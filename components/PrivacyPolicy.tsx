
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block text-center">Legal</span>
        <h1 className="text-5xl md:text-7xl font-black mb-16 leading-none text-center">Privacy <span className="brand-gradient-text">Policy.</span></h1>
        
        <div className="space-y-12 text-gray-400 leading-relaxed font-medium">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">1. Introduction</h2>
            <p>
              At Vidavest, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you in Nigeria.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process your applications for funding, to provide you with information regarding our empowerment programs, or to manage our relationship with you as a mission partner.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under the Nigerian Data Protection Regulation (NDPR) in relation to your personal data, including the right to request access to your personal data, request correction of your personal data, or request erasure of your personal data.
            </p>
          </div>
          
          <p className="text-center text-sm text-gray-500 pt-10">Last Updated: October 2026</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
