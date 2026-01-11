import React from 'react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="pt-40 pb-32 px-6 md:px-12" aria-label="About Us Section">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div>
            <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Our Genesis</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none">Redefining <br/><span className="brand-gradient-text">Wealth Equity.</span></h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                Vidavest was established with a clear mission: to address the reality that while Nigeria is brimming with talent, it often lacks the financial scaffolding to turn that talent into sustainable enterprise.
              </p>
              <p>
                We do not just provide capital; we provide a "Vida" (Life) for our participants' "Vest" (Investment). Our ecosystem is designed to bridge the chasm between raw skill and professional excellence.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#14141C] border border-[#2A2A38]">
                <h4 className="text-[--gold] font-black text-2xl mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500">To democratize access to growth capital and business intelligence for every Nigerian youth.</p>
              </div>
              <div className="p-8 rounded-3xl bg-[#14141C] border border-[#2A2A38]">
                <h4 className="text-[--gold] font-black text-2xl mb-2">Our Vision</h4>
                <p className="text-sm text-gray-500">To catalyze a decade of African entrepreneurship that is ethical, scalable, and inclusive.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square rounded-[4rem] overflow-hidden border border-white/5 bg-[#14141C]">
              <img src="https://picsum.photos/seed/vidavest-impact-generic/800/800" alt="Vidavest social impact and wealth creation initiative in Nigeria" className="w-full h-full object-cover grayscale opacity-60" />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 brand-gradient-bg rounded-full blur-[80px] opacity-20" aria-hidden="true"></div>
          </div>
        </div>

        {/* Corporate Philosophy Section */}
        <div className="mb-48 bg-[#0D0D12] rounded-[4rem] p-10 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px]"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="absolute -inset-4 brand-gradient-bg rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://picsum.photos/seed/vidavest-leadership/800/1000" alt="Vidavest Leadership Team" className="w-full h-full object-cover grayscale brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Impact Badges */}
              <div className="absolute -bottom-8 -right-8 flex flex-col gap-4">
                <div className="bg-[#1A1A24] border border-[#2A2A38] p-5 rounded-2xl shadow-2xl backdrop-blur-md">
                   <p className="text-[--gold] text-xl font-black">100%</p>
                   <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Ethical Investment</p>
                </div>
                <div className="bg-white text-black p-5 rounded-2xl shadow-2xl">
                   <p className="text-xl font-black">200+</p>
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Sustainable Jobs</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-block py-2 px-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[--gold] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Our Corporate DNA
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Leadership <br/><span className="brand-gradient-text">& Visionary Growth.</span></h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
                <p className="font-semibold text-white italic">"We believe true empowerment isn't just about resource allocation; it's about building the character and the community required to sustain generational wealth."</p>
                <p>
                  At Vidavest, our management team is comprised of seasoned strategists with a deep-seated passion for human capital development. Our journey began with a collective observation of the untapped potential in Nigerian youth, particularly those starting vocational paths or transitioning from national service.
                </p>
                <p>
                  We established this platform to serve as a beacon of integrity and excellence in the Nigerian investment landscape, ensuring every seed sown leads to a measurable harvest of impact.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300 text-gray-400" aria-label="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300 text-gray-400" aria-label="X (Twitter)">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300 text-gray-400" aria-label="Instagram">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
                <div className="h-10 w-px bg-[#2A2A38] hidden sm:block"></div>
                <button className="text-[10px] font-black text-white hover:text-[--gold] transition border-b border-gray-800 hover:border-[--gold] pb-1 uppercase tracking-[0.3em]">
                  Download Annual Impact Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-black mb-16 text-center uppercase tracking-widest">Our <span className="brand-gradient-text">Core Principles.</span></h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map(value => (
              <article key={value.title} className="p-8 rounded-3xl bg-[#14141C] border border-[#2A2A38] hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition duration-300" aria-hidden="true">{value.icon}</div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;