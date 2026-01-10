
import React, { useState, useEffect } from 'react';
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
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            
            {/* Core Pillars Section */}
            <section className="py-32 bg-[#14141C]/50 border-y border-[#2A2A38]">
               <div className="max-w-7xl mx-auto px-6 text-center">
                  <h3 className="text-3xl font-black mb-16 uppercase tracking-widest text-gray-600">The Core Pillars of <span className="text-[--gold]">Vidavest</span></h3>
                  <div className="grid md:grid-cols-4 gap-8">
                     {[
                       { title: 'Investment', desc: 'Curated structured options across viable sectors.', icon: '💰' },
                       { title: 'Education', desc: 'Equipping individuals with financial knowledge.', icon: '📚' },
                       { title: 'Wealth Building', desc: 'Designing programs for long-term growth.', icon: '📈' },
                       { title: 'Community', desc: 'Mentorship and growth funding for SMEs.', icon: '🤝' }
                     ].map(pillar => (
                       <div key={pillar.title} className="p-8 rounded-3xl bg-[#0B0B0F] border border-[#2A2A38] hover:border-purple-500/50 transition group">
                          <div className="text-4xl mb-6 group-hover:scale-110 transition">{pillar.icon}</div>
                          <h4 className="text-xl font-bold mb-3">{pillar.title}</h4>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">{pillar.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* How It Works Section */}
            <HowItWorks />

            <div className="py-20 flex justify-center">
               <button 
                 onClick={() => setCurrentPage(Page.About)}
                 className="text-gray-400 hover:text-white font-black uppercase tracking-[0.5em] text-[10px] animate-pulse"
               >
                 Discover More About Us ↓
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
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] selection:bg-[--purple] selection:text-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* CTA Overlay for Home only */}
      {currentPage === Page.Home && (
        <section className="py-32 px-6">
           <div className="max-w-6xl mx-auto brand-gradient-bg rounded-[4rem] p-16 md:p-24 text-center text-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition duration-700"></div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Ready to transform <br/> your financial future?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => setCurrentPage(Page.Programs)}
                  className="bg-black text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl"
                >
                  Start Now
                </button>
                <button 
                  onClick={() => setCurrentPage(Page.Contact)}
                  className="bg-transparent border-2 border-black/20 text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-black/5 transition"
                >
                  Contact Us
                </button>
              </div>
           </div>
        </section>
      )}

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
