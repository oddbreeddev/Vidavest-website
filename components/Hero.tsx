
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center" aria-label="Hero Section">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -mr-48 -mt-48" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -ml-48 -mb-48" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <span className="inline-block py-2 px-5 rounded-full border border-purple-500/30 bg-purple-950/20 text-[--gold] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Empowering Dreams • Building Futures in Nigeria
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
            Fueling <br /> the <span className="brand-gradient-text">Ambition</span> <br /> of Nigeria.
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
            Vidavest is a purpose-driven investment platform designed to fund, mentor, and scale the next generation of African entrepreneurs and Nigerian youth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onNavigate(Page.Programs)}
              className="brand-gradient-bg text-black px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition duration-300"
              aria-label="Apply for entrepreneurship funding"
            >
              Apply for Funding
            </button>
            <button 
              onClick={() => onNavigate(Page.About)}
              className="bg-white/5 border border-[#2A2A38] px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition duration-300"
              aria-label="Learn more about Vidavest mission"
            >
              Learn More
            </button>
          </div>
          
          <div className="mt-16 flex items-center space-x-6">
            <div className="flex -space-x-3" aria-label="Supporters avatars">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0B0B0F] bg-[#1A1A24] flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/seed/${i}/100/100`} alt={`Vidavest Supporter ${i}`} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Joined by 200+ Supporters</p>
          </div>
        </div>

        <div className="hidden lg:block relative">
           <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/vidavest-hero/800/800" 
                alt="Empowering Nigerian youth through financial investment and mentorship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10">
                 <blockquote className="text-sm font-medium italic text-gray-300">"Vidavest is more than a platform; it's a movement for economic stability and youth inclusion."</blockquote>
                 <p className="mt-4 text-[--gold] font-black text-xs uppercase tracking-widest">— Charity Aminu Kwala</p>
              </div>
           </div>
           {/* Floating element */}
           <div className="absolute -top-10 -right-10 bg-[#14141C] p-6 rounded-2xl border border-[#2A2A38] shadow-2xl animate-bounce duration-3000" aria-hidden="true">
              <div className="text-3xl mb-2">💎</div>
              <p className="text-[10px] font-black text-gray-500 uppercase">Impact Driven</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
