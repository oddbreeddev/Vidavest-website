import React, { useState, useRef } from 'react';
import { PROGRAMS } from '../constants';
import { apiService } from '../services/api';
import Notification, { NotificationType } from './Notification';

const Programs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notification, setNotification] = useState<{message: string, type: NotificationType} | null>(null);
  
  const formRef = useRef<HTMLDivElement>(null);
  const formDataRef = useRef<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const { fullName, phone, email, amount } = formDataRef.current;

    if (!fullName || fullName.length < 3) newErrors.fullName = "Full name required";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid email required";
    if (!phone || phone.length < 7) newErrors.phone = "Valid contact number required";
    if (!amount || isNaN(Number(amount.replace(/,/g, '')))) newErrors.amount = "Valid numeric amount required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    formDataRef.current[name] = value;
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setNotification({ message: "Please check the form for errors.", type: 'error' });
      return;
    }

    setLoading(true);
    try {
      await apiService.saveSubmission({
        type: 'funding',
        tier: selectedProgram,
        fullName: formDataRef.current.fullName,
        email: formDataRef.current.email,
        phone: formDataRef.current.phone,
        amount: formDataRef.current.amount
      });

      setSubmitted(true);
      setNotification({ message: "Application submitted and vetted by our global AI systems!", type: 'success' });
      setTimeout(() => {
        setSubmitted(false);
        setSelectedProgram("");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 5000);
    } catch (err) {
      setNotification({ message: "Network connection unstable. Retrying...", type: 'warning' });
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section className="pt-32 pb-32 px-6 md:px-12 relative overflow-hidden bg-[#0B0B0F]">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      
      <div className="bg-glow-orb top-0 right-0 opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Access Capital</span>
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">Choose Your <br/><span className="brand-gradient-text">Growth Path.</span></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Select the program that aligns with your current status. Our funding model is built to scale with global youth ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {PROGRAMS.map(p => (
            <button 
              key={p.id} 
              onClick={() => handleCardClick(p.title)}
              className={`p-10 rounded-[3rem] bg-[#14141C] border text-left transition-all duration-500 group flex flex-col justify-between hover:scale-[1.02] active:scale-95 relative overflow-hidden ${
                selectedProgram === p.title 
                ? 'border-brandPurple shadow-[0_0_50px_-10px_rgba(142,68,173,0.3)] bg-[#1a1a24]' 
                : 'border-white/5 hover:border-brandPurple/30'
              }`}
            >
              {selectedProgram === p.title && (
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gold animate-pulse"></div>
              )}
              
              <div>
                <div className="text-5xl mb-10 group-hover:scale-110 transition duration-500 grayscale group-hover:grayscale-0">{p.icon}</div>
                <h4 className="text-2xl font-black mb-4 leading-tight text-white">{p.title}</h4>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">{p.description}</p>
              </div>
              
              <div className="w-full">
                <div className="py-4 border-t border-white/5">
                  <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Target Participant</p>
                  <p className="text-xs font-bold text-gold">{p.target}</p>
                </div>
                <div className={`w-full mt-4 py-4 rounded-2xl border text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedProgram === p.title 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/10 group-hover:bg-white group-hover:text-black'
                }`}>
                  {selectedProgram === p.title ? 'Program Selected' : 'Apply for Funding'}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div ref={formRef} className={`transition-all duration-1000 transform scroll-mt-32 ${selectedProgram ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24 pointer-events-none'}`}>
          {selectedProgram && (
            <div className="grid lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-40">
                 <div className="inline-block py-2 px-5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                   Application Phase
                 </div>
                 <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
                   The Vidavest <br/><span className="text-gold">Global Process.</span>
                 </h3>
                 <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">
                   You are applying for the <span className="text-white font-bold">{selectedProgram}</span>. 
                 </p>
                 <div className="space-y-8">
                    {['Digital Submission', 'AI Integrity Vetting', 'Virtual Pitch', 'Disbursement'].map((step, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-gold group-hover:brand-gradient-bg group-hover:text-black transition-all">0{i+1}</div>
                        <div>
                          <h5 className="text-sm font-black text-white uppercase tracking-wider mb-1">{step}</h5>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                            {i === 1 ? 'Automated analysis powered by Gemini.' : 'Verified process by our global partners.'}
                          </p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:col-span-7">
                <div className={`p-8 md:p-16 rounded-[3.5rem] bg-[#14141C] border border-white/5 shadow-2xl relative overflow-hidden transition-all ${loading ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
                   {loading && (
                     <div className="absolute inset-0 z-50 bg-black/60 flex flex-col items-center justify-center backdrop-blur-sm animate-page-enter">
                        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-6"></div>
                        <p className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">AI Integrity Vetting in progress...</p>
                     </div>
                   )}

                   {submitted ? (
                     <div className="text-center py-24 animate-page-enter">
                        <div className="text-7xl mb-10">📬</div>
                        <h4 className="text-4xl font-black mb-6 tracking-tighter">Request Received.</h4>
                        <p className="text-gray-400 font-medium max-w-sm mx-auto leading-relaxed">Your application has been logged and the AI-initial review is ready for the strategy team.</p>
                     </div>
                   ) : (
                     <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                       <h4 className="text-xl font-black text-white uppercase tracking-widest pb-4 border-b border-white/5">Funding Request Form</h4>
                       
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                            <input name="fullName" onChange={handleInputChange} required type="text" className={`w-full bg-black/40 border rounded-2xl p-5 text-white outline-none transition text-sm font-bold ${errors.fullName ? 'border-red-500/50 shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/5 focus:border-gold'}`} placeholder="Legal Name" />
                            {errors.fullName && <p className="text-[8px] text-red-500 font-black uppercase tracking-widest ml-1">{errors.fullName}</p>}
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                            <input name="phone" onChange={handleInputChange} required type="tel" className={`w-full bg-black/40 border rounded-2xl p-5 text-white outline-none transition text-sm font-bold ${errors.phone ? 'border-red-500/50 shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/5 focus:border-gold'}`} placeholder="Contact Number" />
                          </div>
                       </div>

                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                            <input name="email" onChange={handleInputChange} required type="email" className={`w-full bg-black/40 border rounded-2xl p-5 text-white outline-none transition text-sm font-bold ${errors.email ? 'border-red-500/50 shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/5 focus:border-gold'}`} placeholder="name@domain.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Est. Funding (Base ₦)</label>
                            <input name="amount" onChange={handleInputChange} required type="text" className={`w-full bg-black/40 border rounded-2xl p-5 text-gold outline-none transition text-lg font-black ${errors.amount ? 'border-red-500/50 shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/5 focus:border-gold'}`} placeholder="500,000" />
                          </div>
                       </div>

                       <button type="submit" disabled={loading} className={`w-full brand-gradient-bg text-black py-6 rounded-2xl font-black text-lg transition shadow-xl uppercase tracking-widest ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-95'}`}>
                         {loading ? 'Processing Securely...' : 'Submit Global Request'}
                       </button>
                     </form>
                   )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programs;