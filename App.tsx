
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Donate from './components/Donate';
import Contact from './components/Contact';
import HowItWorks from './components/HowItWorks';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Admin from './components/Admin';
import ErrorBoundary from './components/ErrorBoundary';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle specialized navigation
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin-vault') setCurrentPage(Page.Admin);
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-page-enter">
            <ErrorBoundary>
              <Hero onNavigate={setCurrentPage} />
            </ErrorBoundary>
            
            <section className="py-32 bg-[#08080A] border-y border-white/5 overflow-hidden">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-20">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">The Foundation</span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Our Core <span className="brand-gradient-text">Pillars.</span></h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                       { title: 'Investment', desc: 'Structured equity and debt options for viable startups.', icon: '💰' },
                       { title: 'Education', desc: 'Financial and business intelligence curriculum.', icon: '📚' },
                       { title: 'Wealth Building', desc: 'Data-driven generational growth programs.', icon: '📈' },
                       { title: 'Community', icon: '🤝', desc: 'A high-impact ecosystem of mentorship and peer networking.' }
                     ].map(pillar => (
                       <div key={pillar.title} className="p-10 rounded-[2.5rem] glass-card flex flex-col items-center text-center group transition-all duration-500 hover:border-brandPurple/40">
                          <div className="text-5xl mb-8 group-hover:scale-110 transition duration-500">{pillar.icon}</div>
                          <h4 className="text-xl font-black mb-3 text-white uppercase tracking-tighter">{pillar.title}</h4>
                          <p className="text-xs text-gray-500 font-medium leading-relaxed">{pillar.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            <ErrorBoundary>
              <HowItWorks />
            </ErrorBoundary>

            <div className="py-20 flex justify-center">
               <button 
                 onClick={() => setCurrentPage(Page.About)}
                 className="flex flex-col items-center gap-4 group"
               >
                 <span className="text-gray-600 group-hover:text-gold font-black uppercase tracking-[0.6em] text-[10px] transition-colors duration-300">Discover More About Us</span>
                 <span className="text-xl animate-bounce-slow text-gray-800">↓</span>
               </button>
            </div>
          </div>
        );
      case Page.About: return <ErrorBoundary><div className="animate-page-enter pt-20"><About /></div></ErrorBoundary>;
      case Page.Programs: return <ErrorBoundary><div className="animate-page-enter pt-20"><Programs /></div></ErrorBoundary>;
      case Page.Donate: return <ErrorBoundary><div className="animate-page-enter pt-20"><Donate /></div></ErrorBoundary>;
      case Page.Contact: return <ErrorBoundary><div className="animate-page-enter pt-20"><Contact /></div></ErrorBoundary>;
      case Page.Admin: return <ErrorBoundary><Admin /></ErrorBoundary>;
      case Page.Privacy: return <div className="animate-page-enter pt-20"><PrivacyPolicy /></div>;
      case Page.Terms: return <div className="animate-page-enter pt-20"><TermsOfService /></div>;
      case Page.Cookies: return <div className="animate-page-enter pt-20"><CookiePolicy /></div>;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ErrorBoundary fallback={<div className="min-h-screen bg-[#0B0B0F] flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-black brand-gradient-text mb-4">CRITICAL SYSTEM ERROR</h1>
      <p className="text-gray-500 mb-8 max-w-md">Our global headquarters in Abuja has been notified of a critical rendering error. Please refresh the page.</p>
      <button onClick={() => window.location.reload()} className="brand-gradient-bg text-black px-12 py-4 rounded-2xl font-black">RESET PLATFORM</button>
    </div>}>
      <div className="min-h-screen flex flex-col bg-[#0B0B0F]">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        {(currentPage === Page.Home || currentPage === Page.Admin) && (
          <section className="py-32 px-6">
             <div className="max-w-[1200px] mx-auto brand-gradient-bg rounded-[3rem] p-16 md:p-24 text-center text-black relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                    {currentPage === Page.Admin ? 'Management of Assets' : 'Ready to transform your future?'}
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => setCurrentPage(Page.Programs)}
                      className="bg-black text-white px-10 py-5 rounded-xl font-black text-sm hover:scale-105 transition-all shadow-xl uppercase tracking-widest"
                    >
                      Start Journey
                    </button>
                    <button 
                      onClick={() => setCurrentPage(Page.Contact)}
                      className="bg-white/10 border-2 border-black/10 text-black px-10 py-5 rounded-xl font-black text-sm hover:bg-black/5 transition-all uppercase tracking-widest"
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
    </ErrorBoundary>
  );
};

export default App;
