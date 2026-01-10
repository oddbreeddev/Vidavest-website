
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
                Vidavest was born out of a stark realization: Nigeria is brimming with talent, but often lacks the financial scaffolding to turn that talent into sustainable enterprise.
              </p>
              <p>
                We don't just provide capital; we provide a "Vida" (Life) for your "Vest" (Investment). Our ecosystem is designed to bridge the chasm between raw skill and professional excellence.
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
              <img src="https://picsum.photos/seed/vidavest-impact-1/800/800" alt="Vidavest social impact and wealth creation initiative in Nigeria" className="w-full h-full object-cover grayscale opacity-60" />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 brand-gradient-bg rounded-full blur-[80px] opacity-20" aria-hidden="true"></div>
          </div>
        </div>

        {/* Enhanced Founder Profile Section */}
        <div className="mb-48 bg-[#0D0D12] rounded-[4rem] p-10 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px]"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="absolute -inset-4 brand-gradient-bg rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img src="https://picsum.photos/seed/charity-kwala/800/1000" alt="Charity Aminu Kwala - Founder of Vidavest, a financial empowerment leader in Abuja" className="w-full h-full object-cover grayscale brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Founder Experience Badges */}
              <div className="absolute -bottom-8 -right-8 flex flex-col gap-4">
                <div className="bg-[#1A1A24] border border-[#2A2A38] p-5 rounded-2xl shadow-2xl backdrop-blur-md">
                   <p className="text-[--gold] text-xl font-black">10+</p>
                   <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div className="bg-white text-black p-5 rounded-2xl shadow-2xl">
                   <p className="text-xl font-black">200+</p>
                   <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Mentees Led</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-block py-2 px-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[--gold] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                The Architect of Vidavest
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Charity <br/><span className="brand-gradient-text">Aminu Kwala.</span></h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
                <p className="font-semibold text-white italic">"True empowerment isn't just about handing out checks; it's about building the character and the community required to manage wealth."</p>
                <p>
                  Charity is a visionary leader with a deep-seated passion for human capital development. Her journey began with a simple observation of the untapped potential in Nigerian youth, particularly those transitioning from service (NYSC) or starting vocational paths.
                </p>
                <p>
                  With a background rooted in financial strategy and social impact, she established Vidavest to serve as a beacon of integrity and excellence in the Nigerian investment landscape.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300" aria-label="Founder LinkedIn Profile">
                    <span className="font-bold">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300" aria-label="Founder Twitter Profile">
                    <span className="font-bold">tw</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A24] border border-[#2A2A38] flex items-center justify-center hover:brand-gradient-bg hover:text-black transition duration-300" aria-label="Founder Instagram Profile">
                    <span className="font-bold">ig</span>
                  </a>
                </div>
                <div className="h-10 w-px bg-[#2A2A38] hidden sm:block"></div>
                <button className="text-sm font-black text-white hover:text-[--gold] transition border-b border-gray-800 hover:border-[--gold] pb-1 uppercase tracking-widest">
                  Read Founder's Letter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-black mb-16 text-center">Guided by <span className="brand-gradient-text">Unyielding Principles.</span></h3>
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
