
import { GoogleGenAI } from "@google/genai";
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc, 
  query, 
  orderBy, 
  Timestamp,
  Firestore
} from "firebase/firestore";
import { Submission } from "../types";

/**
 * FIREBASE CONFIGURATION
 * Safely extracting config with fallbacks to prevent ReferenceErrors.
 */
const getFirebaseConfig = () => {
  try {
    return (window as any).process?.env?.FIREBASE_CONFIG || {};
  } catch (e) {
    return {};
  }
};

const firebaseConfig = getFirebaseConfig();

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

// Initialize Firebase only if config is present to avoid initialization errors
if (firebaseConfig.projectId) {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
}

export const apiService = {
  /**
   * Fetch all submissions from the Firestore 'submissions' collection.
   */
  async getSubmissions(): Promise<Submission[]> {
    try {
      if (!db) {
        console.warn("Firestore database not initialized. Check FIREBASE_CONFIG.");
        return [];
      }
      
      const submissionsCol = collection(db, 'submissions');
      const q = query(submissionsCol, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      return snapshot.docs.map(d => {
        const data = d.data();
        return {
          id: d.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp 
            ? data.createdAt.toDate().toISOString() 
            : data.createdAt
        } as Submission;
      });
    } catch (e) {
      console.error("Firebase Read Error:", e);
      return [];
    }
  },

  /**
   * Save a new application to Firestore and trigger AI vetting via Gemini.
   */
  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    // Fix: Use process.env.API_KEY directly for initializing GoogleGenAI.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let aiReview = submission.type === 'funding' 
      ? "Vetting system initialized. Intelligence review pending." 
      : "Partnership registered. Strategic evaluation in progress.";
    
    try {
      if (process.env.API_KEY) {
        const prompt = submission.type === 'funding' 
          ? `Analyze this funding application for Vidavest.
             Applicant: ${submission.fullName}
             Program: ${submission.tier}
             Amount: ₦${submission.amount}
             Provide a professional 2-sentence executive summary focusing on risk and high-level potential.`
          : `Analyze this strategic partnership for Vidavest.
             Partner: ${submission.fullName}
             Tier: ${submission.tier}
             Provide a 2-sentence executive summary on the strategic value of this partnership.`;

        // Fix: Call generateContent and access the .text property directly.
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: prompt,
          config: {
            systemInstruction: "You are the Vidavest Chief Operating Officer. Provide insightful, concise, and professional risk/benefit analysis.",
            thinkingConfig: { thinkingBudget: 2048 }
          }
        });
        
        if (response && response.text) {
          aiReview = response.text.trim();
        }
      }
    } catch (e) {
      console.warn("AI Analysis bypassed:", e);
    }

    const payload = {
      ...submission,
      status: 'pending' as const,
      aiReview,
      createdAt: Timestamp.now()
    };

    if (!db) {
      throw new Error("Database not connected. Application could not be saved.");
    }

    try {
      const docRef = await addDoc(collection(db, 'submissions'), payload);
      return {
        id: docRef.id,
        ...payload,
        createdAt: payload.createdAt.toDate().toISOString()
      } as Submission;
    } catch (e) {
      console.error("Firestore Write Error:", e);
      throw e;
    }
  },

  /**
   * Update the status of a specific application in Firestore.
   */
  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    try {
      if (!db) return;
      const docRef = doc(db, 'submissions', id);
      await updateDoc(docRef, { status });
    } catch (e) {
      console.error("Firestore Status Update Failed:", e);
    }
  },

  /**
   * Generate a strategic report based on Firestore data using Gemini.
   */
  async getGlobalPulse(): Promise<string> {
    const submissions = await this.getSubmissions();
    if (submissions.length === 0) return "Global cloud vault is currently empty. No data for pulse analysis.";

    // Fix: Use process.env.API_KEY directly for initialization.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const summaryText = submissions
        .slice(0, 10)
        .map(s => `${s.type === 'funding' ? 'REQ' : 'PARTNER'}: ₦${s.amount}`)
        .join(', ');

      // Fix: Call generateContent and access the .text property directly.
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Vidavest Pipeline: [${summaryText}]. Summarize market traction in 2 sentences.`,
        config: {
          systemInstruction: "You are the Vidavest Chief Strategy Officer.",
          thinkingConfig: { thinkingBudget: 1024 }
        }
      });
      return response.text || "Strategy synthesis complete.";
    } catch (e) {
      return "Global Pulse analytics node is currently syncing.";
    }
  }
};
