
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";
import { Submission } from "../types";

/**
 * PRODUCTION CREDENTIALS
 * Hardcoded as primary fallback to prevent initialization errors in the browser environment.
 */
const DEFAULT_SUPABASE_URL = "https://rsvvsqvoukjjflnqcu.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_8DCplz8MO7FPRPG-DYQX5g_RvxDgtzo";

// Safely access environment variables with hardcoded fallbacks
const supabaseUrl = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || DEFAULT_SUPABASE_KEY;

// Initialize Supabase Client
// This will no longer throw "supabaseUrl is required" as we have guaranteed defaults
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const apiService = {
  /**
   * Fetch all submissions from the Supabase 'submissions' table.
   */
  async getSubmissions(): Promise<Submission[]> {
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('createdAt', { ascending: false });

      if (error) {
        console.error("Supabase Error:", error.message);
        return [];
      }
      return data || [];
    } catch (e) {
      console.error("Failed to load global submissions:", e);
      return [];
    }
  },

  /**
   * Save a new application to Supabase and trigger AI vetting via Gemini.
   */
  async saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'status'>): Promise<Submission> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let aiReview = "Vetting system initialized. Global review pending.";
    
    // Perform Real-time AI Vetting using Gemini 3 Pro for complex reasoning tasks
    if (submission.type === 'funding') {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: `Analyze this funding application for Vidavest.
          Name: ${submission.fullName}
          Tier: ${submission.tier}
          Amount: ₦${submission.amount}
          Contact: ${submission.email} / ${submission.phone}
          
          Provide a professional 2-sentence executive summary focusing on risk and potential impact.`,
          config: {
            systemInstruction: "You are the Vidavest Global Chief Risk Officer. Be insightful, concise, and professional."
          }
        });
        
        // Extract text using the .text property as per guidelines
        if (response && response.text) {
          aiReview = response.text.trim();
        }
      } catch (e) {
        console.warn("AI Intelligence Vetting Error:", e);
        aiReview = "Automated vetting process interrupted. Manual review prioritized.";
      }
    }

    const payload = {
      ...submission,
      status: 'pending',
      aiReview,
      createdAt: new Date().toISOString()
    };

    try {
      const { data, error } = await supabase
        .from('submissions')
        .insert([payload])
        .select();

      if (error) throw error;
      if (!data || data.length === 0) throw new Error("No data returned from database");
      
      return data[0] as Submission;
    } catch (e) {
      console.error("Critical: Database write failed:", e);
      throw e;
    }
  },

  /**
   * Update the status of a specific application (Approve/Decline).
   */
  async updateStatus(id: string, status: Submission['status']): Promise<void> {
    try {
      const { error } = await supabase
        .from('submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
    } catch (e) {
      console.error("Failed to update submission status:", e);
    }
  },

  /**
   * Generate a strategic report based on the current data in Supabase.
   */
  async getGlobalPulse(): Promise<string> {
    const submissions = await this.getSubmissions();
    if (submissions.length === 0) return "No data present in the cloud vault for analysis.";

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const summaryText = submissions
        .slice(0, 20)
        .map(s => `${s.tier}: ₦${s.amount} (${s.status})`)
        .join(', ');

      // Use gemini-3-pro-preview for complex data analysis tasks
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Vidavest Dataset Analysis: [${summaryText}]. 
        Provide a 3-sentence high-level executive summary on market demand and funding distribution trends.`,
        config: {
          systemInstruction: "You are the Vidavest Chief Analytics Officer. Focus on growth metrics and operational scalability."
        }
      });
      // Correctly accessing the text property from the response
      return response.text || "Cloud data synthesis complete. Awaiting board review.";
    } catch (e) {
      console.error("Strategic analysis failed:", e);
      return "Global Pulse analytics are temporarily offline. Monitoring system state.";
    }
  }
};
