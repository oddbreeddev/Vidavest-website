import { GoogleGenAI } from "@google/genai";
import { Submission } from "../types";

const STORAGE_KEY = 'vidavest_vault_data';

export const apiService = {
  // Database Simulation using LocalStorage
  async getSubmissions(): Promise<Submission[]> {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load submissions:", e);
      return [];
    }
  },

  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    // Correct initialization as per rules: Always use new GoogleGenAI({ apiKey: process.env.API_KEY })
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const submissions = await this.getSubmissions();
    
    let aiReview = "Vetting system initialized. Global review pending.";
    
    if (submission.type === 'funding') {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Review this funding request for Vidavest Global. 
          Applicant: ${submission.fullName}
          Requested: ₦${submission.amount}
          Program: ${submission.tier}
          Task: Provide a 1-sentence risk assessment and a 1-sentence recommendation based on global entrepreneurship standards.`,
          config: {
            systemInstruction: "You are a senior Global Investment Strategist. Be concise, visionary, and focus on scalable youth impact."
          }
        });
        
        if (response && response.text) {
          aiReview = response.text.trim();
        }
      } catch (e) {
        console.warn("AI Vetting temporarily unavailable:", e);
        aiReview = "Automated vetting skipped. Requires priority manual review by the global strategy team.";
      }
    }

    const newSubmission: Submission = {
      ...submission,
      id: Math.random().toString(36).substring(2, 11),
      createdAt: new Date().toISOString(),
      status: 'pending',
      aiReview
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newSubmission, ...submissions]));
    } catch (e) {
      console.error("Failed to save submission to storage:", e);
    }
    
    return newSubmission;
  },

  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    const submissions = await this.getSubmissions();
    const updated = submissions.map(s => s.id === id ? { ...s, status } : s);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
};