
import React, { useState } from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Empowerment Paths</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">Choose Your <span className="brand-gradient-text">Journey.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">We provide tailored solutions designed to meet you at different stages of your financial journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {PROGRAMS.map(p => (
            <div key={p.id} className="p-10 rounded-[2.5rem] bg-[#14141C] border border-[#2A2A38] flex flex-col justify-between hover:border-purple-500/50 transition duration-500 group">
              <div>
                <div className="text-5xl mb-10 group-hover:scale-110 transition duration-300">{p.icon}</div>
                <h4 className="text-2xl font-black mb-4 leading-tight">{p.title}</h4>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium">{p.description}</p>
              </div>
              <div>
                <div className="py-4 border-t border-[#2A2A38]">
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Target Group</p>
                  <p className="text-xs font-bold text-[--gold]">{p.target}</p>
                </div>
                <div className="py-4 border-t border-[#2A2A38]">
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-xs font-bold text-white">{p.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
             <h3 className="text-4xl font-black mb-8">Ready to <span className="text-[--gold]">Launch?</span></h3>
             <p className="text-gray-400 text-lg mb-12 font-medium">Apply now to be part of our next cohort. Our selection committee in Abuja reviews applications on a rolling basis.</p>
             <div className="space-y-6">
                {[
                  'Submit your detailed business plan or skill portfolio.',
                  'Wait for our internal review (Usually 7-14 business days).',
                  'Participate in a virtual or physical pitch session.',
                  'Get onboarded with funding and mentorship.'
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-xs font-black text-[--gold]">{i+1}</div>
                    <p className="text-sm font-bold text-gray-300">{step}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="p-10 md:p-16 rounded-[3rem] bg-[#14141C] border border-[#2A2A38] shadow-2xl relative overflow-hidden">
             {submitted ? (
               <div className="text-center py-20">
                  <div className="text-6xl mb-8">🎉</div>
                  <h4 className="text-3xl font-black mb-4">Application Received!</h4>
                  <p className="text-gray-400 font-medium">Check your email for a confirmation. Our team will contact you shortly.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                 <div>
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Full Name</label>
                   <input required type="text" className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Email Address</label>
                   <input required type="email" className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" placeholder="john@example.com" />
                 </div>
                 <div>
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Select Program</label>
                   <select required className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition appearance-none">
                     <option>Transition to CEO (NYSC)</option>
                     <option>Skill Builders</option>
                     <option>Innovators Launch</option>
                     <option>Business Advancement</option>
                   </select>
                 </div>
                 <div>
                   <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Brief Pitch</label>
                   <textarea rows={4} className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" placeholder="Tell us about your ambition..."></textarea>
                 </div>
                 <button type="submit" className="w-full brand-gradient-bg text-black py-6 rounded-2xl font-black text-lg hover:scale-[1.02] transition shadow-2xl shadow-purple-900/20">
                   Submit Application
                 </button>
               </form>
             )}
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
