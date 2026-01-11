
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block text-center">Legal</span>
        <h1 className="text-5xl md:text-7xl font-black mb-16 leading-none text-center">Terms of <span className="brand-gradient-text">Service.</span></h1>
        
        <div className="space-y-12 text-gray-400 leading-relaxed font-medium">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Vidavest platform, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Federal Republic of Nigeria. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">2. Eligibility</h2>
            <p>
              Our programs are primarily designed for Nigerian citizens. By applying for funding or mentorship, you represent and warrant that you meet the specific eligibility criteria for the selected program (e.g., being a current NYSC member for the "Transition to CEO" program).
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">3. User Conduct</h2>
            <p>
              Users agree not to use the platform for any unlawful purpose. Any information provided during the application process must be truthful, accurate, and complete. Vidavest reserves the right to disqualify any applicant found providing fraudulent information.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">4. Intellectual Property</h2>
            <p>
              The content on this platform, including logos, graphics, and text, is the property of Vidavest and is protected by copyright and other intellectual property laws. You may not reproduce or distribute any content without our express written permission.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">5. Limitation of Liability</h2>
            <p>
              In no event shall Vidavest or its partners be liable for any damages arising out of the use or inability to use the materials on Vidavest's website, even if Vidavest or a Vidavest authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 pt-10">Last Updated: October 2026</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
