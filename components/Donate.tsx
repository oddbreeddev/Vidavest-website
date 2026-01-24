
import React, { useState, useRef } from 'react';
import { apiService } from '../services/api';
import Notification, { NotificationType } from './Notification';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: NotificationType} | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);
  const formDataRef = useRef<Record<string, string>>({});
  
  const accountNumber = "1234567890"; 

  const tiers = [
    { id: 'empowerment', title: 'Empowerment Partner', amount: '50,000', desc: 'Directly funds equipment for one local artisan or ambitious youth.' },
    { id: 'growth', title: 'Growth Partner', amount: '250,000', desc: 'Seed capital and 6 months mentorship for a global youth innovator.' },
    { id: 'legacy', title: 'Legacy Partner', amount: '1,500,000+', desc: 'Funds an entire regional youth cohort across the platform.' }
  ];

  const handleTierSelect = (title: string) => {
    setSelectedTier(title);
    setFormSubmitted(false);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formDataRef.current[e.target.name] = e.target.value;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;

    setLoading(true);
    try {
      await apiService.saveSubmission({
        type: 'partnership',
        tier: selectedTier,
        fullName: formDataRef.current.fullName,
        email: formDataRef.current.email,
        phone: formDataRef.current.phone,
        amount: tiers.find(t => t.title === selectedTier)?.amount || "0"
      });
      
      setFormSubmitted(true);
      setNotification({ message: "Partnership registered in our global vault.", type: 'success' });
    } catch (err) {
      setNotification({ message: "Cloud sync failed. Please check your connection.", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-24 pb-20 px-4 md:px-12 relative flex flex-col items-center min-h-screen">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <div className="bg-glow-orb -top-20 -right-20 opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 md:mb-24 mt-12">
          <span className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 md:mb-6 block">Support the Mission</span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tighter text-white">
            Direct <br className="hidden sm:block"/><span className="brand-gradient-text">Empowerment.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Your support fuels the seed capital and infrastructure needed to transform global youth talent into sustainable enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-32">
          {tiers.map((tier) => (
            <button 
              key={tier.id} 
              onClick={() => handleTierSelect(tier.title)}
              className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#14141C] border flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 group w-full ${
                selectedTier === tier.title 
                ? 'border-gold shadow-[0_0_40px_-10px_rgba(243,199,122,0.3)] bg-[#1a1a24]' 
                : 'border-white/5 hover:border-brandPurple/50'
              }`}
            >
               <h4 className={`text-[10px] font-black uppercase tracking-widest mb-6 md:mb-10 transition-colors ${selectedTier === tier.title ? 'text-gold' : 'text-gray-500'}`}>
                 {tier.title}
               </h4>
               <p className="text-3xl md:text-5xl font-black text-white mb-4">₦{tier.amount}</p>
               <p className="text-xs text-gray-400 font-medium mb-8 md:mb-12 max-w-[200px] leading-relaxed">{tier.desc}</p>
               <div className={`w-full py-4 rounded-xl border font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                 selectedTier === tier.title 
                 ? 'bg-gold text-black border-gold' 
                 : 'border-white/10 group-hover:bg-white group-hover:text-black text-white'
               }`}>
                 {selectedTier === tier.title ? 'Tier Selected' : 'Select Partner Tier'}
               </div>
            </button>
          ))}
        </div>

        <div ref={formRef} className="scroll-mt-32">
          {!selectedTier ? (
            <div className="text-center py-20 border border-dashed border-white/5 rounded-[3rem] animate-pulse">
               <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">Select an empowerment tier above to proceed with your partnership</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start animate-page-enter">
              <div className="lg:col-span-6 w-full">
                <div className={`p-8 md:p-14 rounded-[3rem] bg-[#14141C] border border-white/10 shadow-2xl relative overflow-hidden transition-all ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
                  {loading && (
                    <div className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  {formSubmitted ? (
                    <div className="py-10 text-center animate-page-enter">
                      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-3xl mx-auto mb-8">✅</div>
                      <h3 className="text-3xl font-black text-white mb-4">Intent Logged.</h3>
                      <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                        Thank you for committing to the <span className="text-gold font-bold">{selectedTier} level</span>. 
                        Please use the account details provided to complete your impact investment.
                      </p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition"
                      >
                        Edit Information
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                       <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-black text-white uppercase tracking-widest">Partnership Details</h4>
                          <span className="text-[9px] font-black text-gold bg-gold/10 px-3 py-1 rounded-full uppercase tracking-widest border border-gold/20">
                            {selectedTier}
                          </span>
                       </div>
                       <div className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name / Organization</label>
                            <input name="fullName" onChange={handleInputChange} required type="text" className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white focus:border-gold outline-none transition text-sm font-bold" placeholder="Your name" />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
                              <input name="email" onChange={handleInputChange} required type="email" className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white focus:border-gold outline-none transition text-sm font-bold" placeholder="Email address" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Contact Number</label>
                              <input name="phone" onChange={handleInputChange} required type="tel" className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white focus:border-gold outline-none transition text-sm font-bold" placeholder="Phone" />
                            </div>
                          </div>
                       </div>
                       <button type="submit" className="w-full brand-gradient-bg text-black py-5 rounded-2xl font-black text-sm hover:scale-[1.01] transition shadow-xl uppercase tracking-widest mt-4">
                         Confirm Partnership
                       </button>
                    </form>
                  )}
                </div>
              </div>

              <div className={`lg:col-span-6 w-full transition-all duration-700 ${formSubmitted ? 'opacity-100 scale-100' : 'opacity-40 grayscale blur-[2px] pointer-events-none'}`}>
                <div className="p-8 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#1A1A24] to-[#0B0B0F] border border-white/10 shadow-2xl relative group overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-brandPurple/10 rounded-full blur-[80px] pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-2xl md:text-3xl">🏦</div>
                      <div className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                        <img src="https://i.postimg.cc/mrJWTxq6/IMG-20260105-WA0043-removebg-preview.png" alt="Vidavest" className="w-full h-full object-contain brightness-110" />
                      </div>
                    </div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Step 2: Activation</p>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-8 md:mb-10 tracking-tighter uppercase">Official <br className="sm:hidden" />Hub Account</h4>
                    <div className="space-y-6">
                      <div className="bg-black/60 p-6 md:p-8 rounded-[1.5rem] border border-white/5 group-hover:border-gold/30 transition-all">
                        <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-2">Account Number</p>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[0.05em] break-all">{accountNumber}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4 px-2">
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Institution</p>
                          <p className="text-sm md:text-base font-bold text-gray-200 uppercase tracking-wider">Zenith Bank PLC</p>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Account Type</p>
                          <p className="text-sm md:text-base font-bold text-gold uppercase tracking-wider">Strategic Operations</p>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={copyToClipboard}
                      className="w-full mt-10 md:mt-12 py-4 md:py-5 rounded-xl bg-white text-black font-black text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-gold transition-all active:scale-95 uppercase tracking-widest shadow-xl"
                    >
                      {copied ? '✅ COPIED TO CLIPBOARD' : '📄 COPY ACCOUNT DETAILS'}
                    </button>
                  </div>
                </div>
                <p className="text-[9px] text-center text-gray-700 font-bold uppercase tracking-[0.4em] mt-8 italic">Verified Partnership Hub • Global Youth Initiative</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-32 border-t border-white/5 pt-20">
           <h3 className="text-3xl md:text-5xl font-black leading-tight text-white mb-16 text-center">Transparent <span className="text-gold">Impact.</span></h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '⚡', title: 'Circular Model', desc: 'Successful founders reinvest back into the ecosystem.' },
                { icon: '🌱', title: '100% Direct', desc: 'Funds go purely to equipment and growth capital.' },
                { icon: '📋', title: 'Audit Reports', desc: 'Quarterly transparency for all global partners.' },
                { icon: '🌍', title: 'Global Focus', desc: 'Targeting underserved states and regions worldwide.' }
              ].map((item, idx) => (
                <div key={idx} className="p-8 glass-card rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl brand-gradient-bg flex items-center justify-center text-xl mb-6 shadow-lg">{item.icon}</div>
                  <h5 className="text-base font-black mb-2 text-white">{item.title}</h5>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
