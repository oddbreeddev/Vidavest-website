
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none">Let's Build the <span className="brand-gradient-text">Future.</span></h2>
            <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">Whether you are looking for funding, want to partner with us, or simply want to learn more about our mission, our team in Abuja is ready to assist.</p>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#14141C] border border-[#2A2A38] flex items-center justify-center text-3xl group-hover:border-purple-500/50 transition">📍</div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Our Location</p>
                   <p className="text-xl font-bold">FCT, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#14141C] border border-[#2A2A38] flex items-center justify-center text-3xl group-hover:border-purple-500/50 transition">📧</div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                   <p className="text-xl font-bold">charityaminukwala@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#14141C] border border-[#2A2A38] flex items-center justify-center text-3xl group-hover:border-purple-500/50 transition">📞</div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                   <p className="text-xl font-bold">+234 803 628 9811</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 rounded-[3rem] bg-[#14141C] border border-[#2A2A38] shadow-2xl relative">
             <h3 className="text-3xl font-black mb-10">Send a <span className="text-[--gold]">Message</span></h3>
             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <div>
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">First Name</label>
                     <input type="text" className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" />
                   </div>
                   <div>
                     <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Last Name</label>
                     <input type="text" className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" />
                   </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Subject</label>
                  <select className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition appearance-none">
                    <option>Partnership Inquiry</option>
                    <option>Sponsorship</option>
                    <option>General Support</option>
                    <option>Media/Press</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 block">Message</label>
                  <textarea rows={6} className="w-full bg-black/40 border border-[#2A2A38] rounded-2xl p-5 text-white focus:border-[--gold] outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full brand-gradient-bg text-black py-6 rounded-2xl font-black text-lg hover:scale-[1.02] transition shadow-2xl">
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
