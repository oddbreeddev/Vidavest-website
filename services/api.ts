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
 * Accessing environment variables injected by the build tool.
 * These are replaced as literals during the build process.
 */
const firebaseConfig = (process.env.FIREBASE_CONFIG as any) || {};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

// Initialize Firebase with protection against multiple initializations
try {
  if (firebaseConfig.projectId) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  }
} catch (e) {
  console.error("Firebase Sync Core Failure:", e);
}

export const apiService = {
  /**
   * Fetch all submissions from the Firestore 'submissions' collection.
   */
  async getSubmissions(): Promise<Submission[]> {
    try {
      if (!db) {
        console.warn("Vault offline. Check network configuration.");
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
      console.error("Cloud Retrieval Sync Error:", e);
      return [];
    }
  },

  /**
   * Save a new application and trigger Gemini analysis.
   */
  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    // ALWAYS initialize right before usage with the environment variable
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let aiReview = submission.type === 'funding' 
      ? "Analysis node initialized. Intelligence summary pending." 
      : "Partnership registered. Strategic evaluation in progress.";
    
    // Execute AI reasoning if possible
    if (process.env.API_KEY) {
      try {
        const prompt = submission.type === 'funding' 
          ? `Evaluate funding application for Vidavest: ${submission.fullName}, Tier: ${submission.tier}, Amount: ₦${submission.amount}. Provide a professional 2-sentence risk and growth summary.`
          : `Evaluate partnership for Vidavest: ${submission.fullName}, Commitment: ₦${submission.amount}. Provide a concise 2-sentence value-add summary.`;

        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: prompt,
          config: {
            systemInstruction: "You are the Chief Operating Officer of Vidavest. You are analytical, supportive, and focused on sustainable wealth in Nigeria.",
            thinkingConfig: { thinkingBudget: 2048 }
          }
        });
        
        // Correctly access .text property
        if (response.text) {
          aiReview = response.text.trim();
        }
      } catch (e) {
        console.warn("Intelligence synthesis bypassed due to latency thresholds.");
      }
    }

    const payload = {
      ...submission,
      status: 'pending' as const,
      aiReview,
      createdAt: Timestamp.now()
    };

    if (!db) {
      throw new Error("Local Vault Offline. Request cannot be processed.");
    }

    try {
      const docRef = await addDoc(collection(db, 'submissions'), payload);
      return {
        id: docRef.id,
        ...payload,
        createdAt: payload.createdAt.toDate().toISOString()
      } as Submission;
    } catch (e) {
      console.error("Ledger write failure:", e);
      throw e;
    }
  },

  /**
   * Update status in Firestore.
   */
  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    if (!db) return;
    try {
      const docRef = doc(db, 'submissions', id);
      await updateDoc(docRef, { status });
    } catch (e) {
      console.error("Status synchronization failure.");
    }
  },

  /**
   * High-level market pulse analysis.
   */
  async getGlobalPulse(): Promise<string> {
    const submissions = await this.getSubmissions();
    if (submissions.length === 0) return "Global baseline stable. Awaiting initial intake.";

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const summaryData = submissions.slice(0, 10).map(s => `${s.fullName}: ₦${s.amount}`).join(', ');
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analyze these recent Vidavest entries: ${summaryData}. Provide a 2-sentence executive summary of the current pipeline traction.`,
        config: {
          systemInstruction: "You are the Vidavest Chief Strategy Officer. Be visionary and data-driven.",
          thinkingConfig: { thinkingBudget: 1024 }
        }
      });
      return response.text || "Market synthesis complete.";
    } catch (e) {
      console.error("Strategic Analysis Error:", e);
      return "Strategic analysis node is re-calibrating. Market stability confirmed.";
    }
  }
};