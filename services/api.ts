
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  updateDoc, 
  doc, 
  query, 
  orderBy, 
  Timestamp,
  Firestore
} from "firebase/firestore";
import { Submission } from "../types";

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

try {
  if (firebaseConfig.projectId) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  }
} catch (e) {
  console.error("Firebase Core Sync Failure:", e);
}

export const apiService = {
  /**
   * Real-time subscription to all interactions.
   */
  subscribeToSubmissions(callback: (data: Submission[]) => void) {
    if (!db) return () => {};
    
    const submissionsCol = collection(db, 'submissions');
    const q = query(submissionsCol, orderBy('createdAt', 'desc'));
    
    return onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data(),
        createdAt: d.data().createdAt instanceof Timestamp 
          ? d.data().createdAt.toDate().toISOString() 
          : d.data().createdAt
      } as Submission));
      callback(data);
    }, (error) => {
      console.error("Live Stream Interrupted:", error);
    });
  },

  /**
   * Save a new funding/partnership application.
   */
  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<void> {
    if (!db) throw new Error("Vault Offline");

    const payload = {
      ...submission,
      status: 'pending' as const,
      createdAt: Timestamp.now()
    };

    await addDoc(collection(db, 'submissions'), payload);
  },

  /**
   * Fast newsletter subscription.
   */
  async saveNewsletter(email: string): Promise<void> {
    if (!db) throw new Error("Vault Offline");

    const payload = {
      type: 'newsletter' as const,
      email,
      createdAt: Timestamp.now()
    };

    await addDoc(collection(db, 'submissions'), payload);
  },

  /**
   * Update status in real-time.
   */
  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    if (!db) return;
    const docRef = doc(db, 'submissions', id);
    await updateDoc(docRef, { status });
  }
};
