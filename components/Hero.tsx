import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 px-6 overflow-hidden min-h-screen flex items-center" aria-label="Hero Section">
      {/* Dynamic Background Elements */}
      <div className="bg-blur-dot top-0 -right-48 opacity-40"></div>
      <div className="bg-blur-dot bottom-0 -left-48 opacity-20" style={{ background: 'rgba(243, 199, 122, 0.1)' }}></div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-7 text-left animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-purple-500/20 bg-purple-950/20 text-[--gold] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[--gold] animate-pulse"></span>
            Empowering Nigeria's Next Generation
          </div>
          
          <h1 className="text-6xl sm:text-7xl xl:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
            Fueling <br /> the <span className="brand-gradient-text">Ambition</span> <br /> of Nigeria.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium">
            Vidavest is an impact-first investment vehicle dedicated to funding, mentoring, and scaling young entrepreneurs across Nigeria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button 
              onClick={() => onNavigate(Page.Programs)}
              className="brand-gradient-bg text-black px-12 py-6 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-widest active:scale-95"
            >
              Get Funded Now
            </button>
            <button 
              onClick={() => onNavigate(Page.About)}
              className="bg-white/5 border border-white/10 px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/10 transition-all duration-300 uppercase tracking-widest backdrop-blur-md"
            >
              Our Mission
            </button>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex -space-x-4" aria-label="Members">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-[#0B0B0F] bg-[#1A1A24] overflow-hidden">
                   <img src={`https://picsum.photos/seed/user-${i+20}/100/100`} alt="Member" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xl font-black text-white leading-none">500+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1">Founders Supported</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block relative">
           <div className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_40px_100px_-20px_rgba(142,68,173,0.3)]">
              <img 
                src="https://picsum.photos/seed/nigeria-startup/800/1000" 
                alt="Nigerian Entrepreneurs" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 p-10 glass-card rounded-[2.5rem]">
                 <p className="text-lg font-bold italic text-white/90 leading-snug">"We are building the infrastructure for a new era of African self-reliance."</p>
                 <div className="mt-6 flex items-center justify-between">
                    <p className="text-[10px] font-black text-[--gold] uppercase tracking-[0.3em]">Executive Vision</p>
                    <div className="flex gap-1">
                      <div className="w-8 h-1 bg-[--gold] rounded-full"></div>
                      <div className="w-2 h-1 bg-white/20 rounded-full"></div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Abstract Floating UI Elements */}
           <div className="absolute -top-12 -right-12 glass-card p-6 rounded-3xl shadow-2xl animate-float z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full brand-gradient-bg flex items-center justify-center text-xl">🚀</div>
                <div>
                   <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Growth Phase</p>
                   <p className="text-sm font-black text-white">Scaling 2026</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;