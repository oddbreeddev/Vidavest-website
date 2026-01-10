
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
    <nav className="fixed top-0 w-full z-50 glass-nav py-4 px-6 md:px-12 flex justify-between items-center">
      <div 
        className="flex items-center space-x-3 cursor-pointer" 
        onClick={() => onNavigate(Page.Home)}
      >
        <div className="w-10 h-10 rounded-xl brand-gradient-bg flex items-center justify-center font-black text-black text-xl shadow-lg">V</div>
        <span className="text-2xl font-black brand-gradient-text tracking-tighter">VIDAVEST</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center">
        {links.map(link => (
          <button 
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`text-sm font-semibold transition-colors duration-300 ${
              currentPage === link.id ? 'text-[--gold]' : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => onNavigate(Page.Donate)}
          className="brand-gradient-bg text-black px-7 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-purple-900/20 hover:scale-105 transition-transform"
        >
          Support Mission
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0B0F] border-b border-[#2A2A38] p-8 flex flex-col space-y-6 md:hidden">
          {links.map(link => (
            <button 
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsOpen(false); }}
              className="text-lg font-bold text-left text-gray-300"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate(Page.Donate); setIsOpen(false); }}
            className="brand-gradient-bg text-black px-6 py-4 rounded-2xl font-black text-center"
          >
            Support Mission
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
