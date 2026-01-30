
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
 */
const getSafeEnv = () => {
  try {
    return (process.env as any) || {};
  } catch (e) {
    return {};
  }
};

const env = getSafeEnv();
const firebaseConfig = env.FIREBASE_CONFIG || {};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

// Initialize Firebase
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
      if (!db) return [];
      
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
   * Save a new application (No AI logic).
   */
  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    const payload = {
      ...submission,
      status: 'pending' as const,
      createdAt: Timestamp.now()
    };

    if (!db) {
      throw new Error("Local Vault Offline.");
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
  }
};
