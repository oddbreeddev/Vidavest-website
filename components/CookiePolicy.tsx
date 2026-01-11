
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block text-center">Legal</span>
        <h1 className="text-5xl md:text-7xl font-black mb-16 leading-none text-center">Cookie <span className="brand-gradient-text">Policy.</span></h1>
        
        <div className="space-y-12 text-gray-400 leading-relaxed font-medium">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These are required for the operation of our website.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.</li>
            </ul>
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">3. Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" className="text-[--gold] hover:underline" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
            </p>
          </div>

          <div className="p-10 border border-white/5 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-6">4. Third-Party Cookies</h2>
            <p>
              Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 pt-10">Last Updated: October 2026</p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
