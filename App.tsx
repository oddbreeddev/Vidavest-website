import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Donate from './components/Donate';
import Contact from './components/Contact';
import HowItWorks from './components/HowItWorks';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Simple scroll-to-top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            
            {/* Core Pillars Section */}
            <section className="py-40 md:py-52 bg-gradient-to-b from-[#0B0B0F] to-[#08080A] border-y border-white/5 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-900/5 blur-[120px] rounded-full pointer-events-none"></div>
               
               <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-24">
                    <span className="text-[--gold] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">The Foundation</span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Our Core <span className="brand-gradient-text">Pillars.</span></h3>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                       { title: 'Investment', desc: 'Curated structured options across viable sectors for long-term equity.', icon: '💰' },
                       { title: 'Education', desc: 'Equipping individuals with advanced financial and business intelligence.', icon: '📚' },
                       { title: 'Wealth Building', desc: 'Designing data-driven programs for intergenerational growth.', icon: '📈' },
                       { title: 'Community', desc: 'A high-impact ecosystem of mentorship and peer support.', icon: '🤝' }
                     ].map(pillar => (
                       <div key={pillar.title} className="p-12 rounded-[2.5rem] glass-card flex flex-col items-center text-center">
                          <div className="text-6xl mb-10 group-hover:scale-110 transition duration-500">{pillar.icon}</div>
                          <h4 className="text-2xl font-black mb-4 text-white">{pillar.title}</h4>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">{pillar.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            <HowItWorks />

            <div className="py-24 flex justify-center">
               <button 
                 onClick={() => setCurrentPage(Page.About)}
                 className="flex flex-col items-center gap-4 group"
               >
                 <span className="text-gray-500 group-hover:text-[--gold] font-black uppercase tracking-[0.6em] text-[10px] transition-colors duration-300">Discover More About Us</span>
                 <span className="text-2xl animate-bounce-slow">↓</span>
               </button>
            </div>
          </>
        );
      case Page.About:
        return <About />;
      case Page.Programs:
        return <Programs />;
      case Page.Donate:
        return <Donate />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] selection:bg-purple-500 selection:text-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* CTA Overlay for Home only */}
      {currentPage === Page.Home && (
        <section className="py-40 px-6">
           <div className="max-w-[1400px] mx-auto brand-gradient-bg rounded-[4rem] p-16 md:p-32 text-center text-black relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(142,68,173,0.4)]">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl transition duration-1000 group-hover:scale-110"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">Ready to transform your financial future?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => setCurrentPage(Page.Programs)}
                    className="bg-black text-white px-16 py-7 rounded-[2rem] font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl active:scale-95 uppercase tracking-widest"
                  >
                    Start Journey
                  </button>
                  <button 
                    onClick={() => setCurrentPage(Page.Contact)}
                    className="bg-white/10 border-2 border-black/10 text-black px-16 py-7 rounded-[2rem] font-black text-xl hover:bg-black/5 transition-all duration-300 active:scale-95 uppercase tracking-widest"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
           </div>
        </section>
      )}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;