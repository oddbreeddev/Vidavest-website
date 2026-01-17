
import { GoogleGenAI } from "@google/genai";
import { Submission } from "../types";

const STORAGE_KEY = 'vidavest_vault_data';

export const apiService = {
  // Database Simulation
  async getSubmissions(): Promise<Submission[]> {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const submissions = await this.getSubmissions();
    
    // AI Vetting Logic
    let aiReview = "Awaiting manual verification.";
    if (submission.type === 'funding') {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Review this funding request for a Nigerian empowerment platform. 
          Name: ${submission.fullName}
          Amount: ₦${submission.amount}
          Program: ${submission.tier}
          Identify potential risks and provide a brief summary of why this should be funded. Keep it under 50 words.`,
          config: {
            systemInstruction: "You are a senior investment analyst at Vidavest, Abuja. Be professional, skeptical but encouraging."
          }
        });
        aiReview = response.text || "AI analysis failed.";
      } catch (e) {
        console.error("AI Vetting failed:", e);
      }
    }

    const newSubmission: Submission = {
      ...submission,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'pending',
      aiReview
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([newSubmission, ...submissions]));
    return newSubmission;
  },

  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    const submissions = await this.getSubmissions();
    const updated = submissions.map(s => s.id === id ? { ...s, status } : s);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};
