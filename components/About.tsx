import React from 'react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="pt-24 md:pt-40 pb-32 px-5 md:px-12 overflow-x-hidden" aria-label="About Us Section">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-48">
          <div className="order-2 lg:order-1">
            <span className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 md:mb-6 block">Our Genesis</span>
            <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-10 leading-none">Redefining <br/><span className="brand-gradient-text">Wealth Equity.</span></h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Vidavest was established with a clear mission: to address the reality that while the world is brimming with youth talent, it often lacks the financial scaffolding to turn that talent into sustainable enterprise.
              </p>
              <p>
                We do not just provide capital; we provide a "Vida" (Life) for our participants' "Vest" (Investment). Our ecosystem is designed to bridge the chasm between raw skill and professional excellence for emerging leaders globally.
              </p>
            </div>
            
            {/* Mission & Vision Grid - Stacked on mobile */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 rounded-[2rem] bg-bgCard border border-white/5 hover:border-brandPurple/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brandPurple/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
                <h4 className="text-gold font-black text-xl mb-3">Our Mission</h4>
                <p className="text-sm text-gray-500 leading-relaxed">To democratize access to growth capital and business intelligence for every ambitious youth.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-bgCard border border-white/5 hover:border-brandPurple/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🔭</div>
                <h4 className="text-gold font-black text-xl mb-3">Our Vision</h4>
                <p className="text-sm text-gray-500 leading-relaxed">To catalyze a decade of global entrepreneurship that is ethical, scalable, and inclusive.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="w-full aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 bg-bgCard shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                alt="Vidavest global impact" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 brand-gradient-bg rounded-full blur-[60px] md:blur-[80px] opacity-20" aria-hidden="true"></div>
          </div>
        </div>

        {/* Corporate Philosophy Section */}
        <div className="mb-24 md:mb-48 bg-[#0D0D12] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="absolute -inset-2 md:-inset-4 brand-gradient-bg rounded-[2.5rem] md:rounded-[3.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-bgDark">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                    alt="Vidavest Leadership Team" 
                    className="w-full h-full object-cover grayscale brightness-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Impact Badges - Responsive placement */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 flex flex-col gap-3 md:gap-4 z-20 scale-90 md:scale-100">
                <div className="bg-[#1A1A24] border border-[#2A2A38] p-4 md:p-5 rounded-2xl shadow-2xl backdrop-blur-md">
                   <p className="text-gold text-lg md:text-xl font-black">100%</p>
                   <p className="text-[7px] md:text-[8px] font-black text-gray-500 uppercase tracking-widest">Ethical Investment</p>
                </div>
                <div className="bg-white text-black p-4 md:p-5 rounded-2xl shadow-2xl">
                   <p className="text-lg md:text-xl font-black">500+</p>
                   <p className="text-[7px] md:text-[8px] font-black text-gray-400 uppercase tracking-widest">Sustainable Ventures</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <span className="inline-block py-2 px-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                Our Corporate DNA
              </span>
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">Leadership <br/><span className="brand-gradient-text">& Visionary Growth.</span></h2>
              
              <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12">
                <p className="font-semibold text-white italic text-lg border-l-2 border-gold pl-6">"We believe true empowerment isn't just about resource allocation; it's about building the character and the community required to sustain generational wealth."</p>
                <p>
                  At Vidavest, our management team is comprised of seasoned strategists with a deep-seated passion for human capital development. Our journey began with a collective observation of the untapped potential in youth worldwide.
                </p>
                <p>
                  We established this platform to serve as a beacon of integrity and excellence in the international investment landscape, ensuring every seed sown leads to a measurable harvest of impact.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A1A24] border border-white/5 flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300 text-gray-400" aria-label="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A1A24] border border-white/5 flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300 text-gray-400" aria-label="X (Twitter)">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
                <button className="text-[9px] md:text-[10px] font-black text-white hover:text-gold transition border-b border-white/10 hover:border-gold pb-1 uppercase tracking-[0.3em]">
                  Download Impact Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Our DNA</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest">Our <span className="brand-gradient-text">Core Principles.</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map(value => (
              <article key={value.title} className="p-8 rounded-[2.5rem] bg-bgCard border border-white/5 hover:border-brandPurple/50 hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition duration-500" aria-hidden="true">{value.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-4 text-white">{value.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
