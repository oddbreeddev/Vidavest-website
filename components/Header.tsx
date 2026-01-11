
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: Page.Home, label: 'Home' },
    { id: Page.About, label: 'About' },
    { id: Page.Programs, label: 'Programs' },
    { id: Page.Contact, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav py-3 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div 
        className="flex items-center space-x-2 cursor-pointer group" 
        onClick={() => onNavigate(Page.Home)}
      >
        <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
          <img 
            src="https://i.postimg.cc/mrJWTxq6/IMG-20260105-WA0043-removebg-preview.png" 
            alt="Vidavest Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl font-black brand-gradient-text tracking-tighter hidden sm:block">VIDAVEST</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center">
        {links.map(link => (
          <button 
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
              currentPage === link.id ? 'text-[--gold]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => onNavigate(Page.Donate)}
          className="brand-gradient-bg text-black px-7 py-2.5 rounded-xl text-xs font-black shadow-xl shadow-purple-900/20 hover:scale-105 transition-transform uppercase tracking-widest"
        >
          Support Mission
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-[#2A2A38] p-10 flex flex-col space-y-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map(link => (
            <button 
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsOpen(false); }}
              className={`text-2xl font-black text-left uppercase tracking-tighter ${
                currentPage === link.id ? 'text-[--gold]' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate(Page.Donate); setIsOpen(false); }}
            className="brand-gradient-bg text-black px-6 py-5 rounded-2xl font-black text-center uppercase tracking-widest text-sm"
          >
            Support Mission
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
