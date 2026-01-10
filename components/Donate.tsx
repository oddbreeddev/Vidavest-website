
import React from 'react';

const Donate: React.FC = () => {
  const donationTiers = [
    { title: 'Empowerment Partner', amount: '50,000', description: 'Provides essential tools for one Skill Builder.', color: 'border-purple-500/20' },
    { title: 'Growth Partner', amount: '250,000', description: 'Covers seed capital and 6 months mentorship for an Innovator.', color: 'border-[--gold]/40 bg-purple-950/10' },
    { title: 'Legacy Partner', amount: '1,500,000+', description: 'Funds an entire cohort in a specific region.', color: 'border-purple-500/20' }
  ];

  return (
    <section className="pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Support the Mission</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">Invest in <span className="brand-gradient-text">Human Capital.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Your support directly fuels the seed capital for Nigeria's future industry leaders.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {donationTiers.map(tier => (
            <div key={tier.title} className={`p-12 rounded-[3rem] bg-[#14141C] border ${tier.color} flex flex-col items-center text-center group hover:scale-[1.02] transition duration-500`}>
               <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">{tier.title}</h4>
               <p className="text-5xl font-black mb-8 text-white">₦{tier.amount}</p>
               <p className="text-gray-400 text-sm mb-12 font-medium leading-relaxed">{tier.description}</p>
               <button className="w-full py-4 rounded-2xl border border-purple-500/30 text-white font-black text-sm hover:bg-purple-900/20 transition">Select Tier</button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="p-10 md:p-16 rounded-[3rem] bg-[#14141C] border border-[#2A2A38] relative overflow-hidden">
            <h3 className="text-3xl font-black mb-10">Secure <span className="text-[--gold]">Transfer</span></h3>
            <div className="space-y-6">
               <div className="bg-black/50 p-8 rounded-3xl border border-purple-500/20 relative">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Abuja FCT Branch</span>
                     <div className="w-10 h-6 bg-white/10 rounded"></div>
                  </div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Account Holder</p>
                  <p className="text-xl font-bold mb-6">VIDAVEST EMPOWERMENT FUND</p>
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Account Number</p>
                        <p className="text-3xl font-black brand-gradient-text tracking-widest">1234567890</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Bank Name</p>
                        <p className="text-sm font-bold">Zenith Bank PLC</p>
                     </div>
                  </div>
               </div>
               <p className="text-xs text-center text-gray-500 font-bold uppercase tracking-wider">Please use "DONATION - [YOUR NAME]" as reference.</p>
               <button className="w-full py-5 rounded-2xl bg-white/5 border border-[#2A2A38] font-black text-sm flex items-center justify-center gap-3 hover:bg-white/10 transition">
                  <span>📄</span> Copy Account Details
               </button>
            </div>
          </div>

          <div>
             <h3 className="text-4xl font-black mb-8">Transparency & <span className="brand-gradient-text">Impact</span></h3>
             <div className="space-y-10">
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl brand-gradient-bg flex items-center justify-center text-2xl">⚡</div>
                   <div>
                      <h5 className="text-xl font-bold mb-2">Sustainable Cycle</h5>
                      <p className="text-sm text-gray-400 leading-relaxed font-medium">Beneficiaries reinvest 5-10% of their future profits back into the fund to support the next cohort.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl brand-gradient-bg flex items-center justify-center text-2xl">🌱</div>
                   <div>
                      <h5 className="text-xl font-bold mb-2">Direct Deployment</h5>
                      <p className="text-sm text-gray-400 leading-relaxed font-medium">100% of empowerment donations go directly into seed capital and essential equipment for participants.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-14 h-14 rounded-2xl brand-gradient-bg flex items-center justify-center text-2xl">📋</div>
                   <div>
                      <h5 className="text-xl font-bold mb-2">Quarterly Reporting</h5>
                      <p className="text-sm text-gray-400 leading-relaxed font-medium">Partners receive detailed impact reports showing the growth and progress of the businesses they fund.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
