import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24" aria-label="Hero">
      <div className="bg-glow-orb -top-40 -right-40 opacity-40"></div>
      
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 animate-page-enter">
          <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold">Abuja Hub • 2026</span>
          </div>

          <h1 className="text-5xl md:text-8xl xl:text-9xl font-black leading-[0.85] mb-8 tracking-tighter">
            Fueling <br /> the <span className="brand-gradient-text">Ambition</span> <br /> of Nigeria.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 font-medium">
            Building the financial infrastructure for Nigeria's next generation of skilled entrepreneurs and corporate leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => onNavigate(Page.Programs)}
              className="brand-gradient-bg text-black px-10 py-5 rounded-xl font-black text-base shadow-xl hover:brightness-110 transition-all uppercase tracking-widest"
            >
              Get Funded
            </button>
            <button 
              onClick={() => onNavigate(Page.About)}
              className="bg-white/5 border border-white/10 px-10 py-5 rounded-xl font-black text-base hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-md"
            >
              Our Mission
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-bgDark bg-[#1A1A24] overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-lg font-black text-white leading-none">500+</p>
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Active Founders</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative group">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="Growth" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent"></div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card p-5 rounded-2xl animate-float z-20">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl brand-gradient-bg flex items-center justify-center text-lg">📈</div>
                  <div>
                    <p className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Growth</p>
                    <p className="text-xs font-black text-white">Milestone Reached</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;