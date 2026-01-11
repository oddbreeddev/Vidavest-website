
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-24 border-t border-[#2A2A38] px-6 md:px-12 bg-[#08080A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/mrJWTxq6/IMG-20260105-WA0043-removebg-preview.png" 
                  alt="Vidavest Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-black brand-gradient-text tracking-tighter">VIDAVEST</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm font-medium">
              We bridge the gap between potential and opportunity through ethical wealth creation and sustainable impact for Nigerian entrepreneurs.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-[#2A2A38] flex items-center justify-center text-[10px] font-black hover:bg-white hover:text-black transition duration-300 uppercase">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[--gold] font-black uppercase tracking-[0.2em] text-[10px] mb-8">Navigation</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm uppercase tracking-widest">
              <li><button onClick={() => onNavigate(Page.About)} className="hover:text-white transition">Our Vision</button></li>
              <li><button onClick={() => onNavigate(Page.Programs)} className="hover:text-white transition">Programs</button></li>
              <li><button onClick={() => onNavigate(Page.Donate)} className="hover:text-white transition">Support Fund</button></li>
              <li><button onClick={() => onNavigate(Page.Contact)} className="hover:text-white transition">Get in Touch</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[--gold] font-black uppercase tracking-[0.2em] text-[10px] mb-8">Headquarters</h5>
            <address className="not-italic text-gray-400 space-y-4 font-medium">
              <p className="text-white">Abuja, Nigeria</p>
              <p>+234 803 628 9811</p>
              <p className="text-[--gold] font-black tracking-wider transition-colors hover:text-white cursor-pointer">vidavest05@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2A2A38] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">© 2026 VIDAVEST EMPOWERMENT. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
