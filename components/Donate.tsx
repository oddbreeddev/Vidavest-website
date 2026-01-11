import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "1234567890"; // Injected placeholder

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donationTiers = [
    { title: 'Empowerment Partner', amount: '50,000', description: 'Provides essential tools for one Skill Builder.', color: 'border-white/5' },
    { title: 'Growth Partner', amount: '250,000', description: 'Covers seed capital and 6 months mentorship for an Innovator.', color: 'border-[--gold]/20 bg-purple-950/20 shadow-xl shadow-purple-900/10 scale-105' },
    { title: 'Legacy Partner', amount: '1,500,000+', description: 'Funds an entire cohort in a specific region.', color: 'border-white/5' }
  ];

  return (
    <section className="pt-40 pb-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Support the Mission</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">Invest in <span className="brand-gradient-text">Human Capital.</span></h2>
          <p className="text-gray-400 text-xl font-medium leading-relaxed">Your support directly fuels the seed capital for Nigeria's next generation of industry leaders.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32 items-center">
          {donationTiers.map(tier => (
            <div key={tier.title} className={`p-12 rounded-[3.5rem] bg-[#14141C] border ${tier.color} flex flex-col items-center text-center transition-all duration-500 group relative overflow-hidden`}>
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full"></div>
               <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-8">{tier.title}</h4>
               <p className="text-gray-400 text-lg font-black mb-2">₦</p>
               <p className="text-6xl font-black mb-10 text-white tracking-tighter">{tier.amount}</p>
               <p className="text-gray-500 text-sm mb-12 font-medium leading-relaxed max-w-[200px]">{tier.description}</p>
               <button className="w-full py-5 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">Select Partner Tier</button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
             <h3 className="text-4xl md:text-5xl font-black mb-10">Transparency <br/>& <span className="brand-gradient-text">Impact First.</span></h3>
             <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: '⚡', title: 'Sustainable Cycle', desc: 'Beneficiaries reinvest 5% of future profits to support the next cohort.' },
                  { icon: '🌱', title: 'Direct Deployment', desc: '100% of empowerment donations go to equipment and seed capital.' },
                  { icon: '📋', title: 'Reporting', desc: 'Partners receive quarterly audits on business progress.' },
                  { icon: '🌍', title: 'Regional Scale', desc: 'We target underserved areas to ensure equitable wealth distribution.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 glass-card rounded-3xl">
                    <div className="w-12 h-12 rounded-xl brand-gradient-bg flex items-center justify-center text-xl mb-6">{item.icon}</div>
                    <h5 className="text-lg font-bold mb-3">{item.title}</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-10 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#1A1A24] to-[#0B0B0F] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">🏦</div>
                  <img src="https://i.postimg.cc/mrJWTxq6/IMG-20260105-WA0043-removebg-preview.png" alt="Vidavest Logo" className="w-12 opacity-50 grayscale" />
                </div>
                
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">Official Fund Account</p>
                <h4 className="text-2xl font-black text-white mb-10">VIDAVEST EMPOWERMENT</h4>
                
                <div className="space-y-6">
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Account Number</p>
                    <p className="text-4xl font-black brand-gradient-text tracking-[0.2em]">{accountNumber}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Bank Name</p>
                      <p className="text-lg font-bold text-white">Zenith Bank PLC</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Branch</p>
                      <p className="text-lg font-bold text-white">Abuja FCT</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={copyToClipboard}
                  className="w-full mt-12 py-5 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-3 hover:bg-[--gold] transition-all duration-300 active:scale-95 uppercase tracking-widest"
                >
                  {copied ? (
                    <><span>✅</span> Copied</>
                  ) : (
                    <><span>📄</span> Copy Account Details</>
                  )}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-center text-gray-600 font-bold uppercase tracking-[0.4em] mt-8">Secure Corporate Transfer Only</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;