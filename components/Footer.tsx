
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
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center font-black text-black text-sm">V</div>
              <span className="text-2xl font-black brand-gradient-text tracking-tighter">VIDAVEST</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
              Bridging the gap between potential and opportunity through ethical wealth creation and sustainable impact.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-[#2A2A38] flex items-center justify-center text-xs font-bold hover:bg-white/5 transition">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[--gold] font-black uppercase tracking-[0.2em] text-xs mb-8">Quick Links</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><button onClick={() => onNavigate(Page.About)} className="hover:text-white transition">Our Story</button></li>
              <li><button onClick={() => onNavigate(Page.Programs)} className="hover:text-white transition">Programs</button></li>
              <li><button onClick={() => onNavigate(Page.Donate)} className="hover:text-white transition">Support Mission</button></li>
              <li><button onClick={() => onNavigate(Page.Contact)} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[--gold] font-black uppercase tracking-[0.2em] text-xs mb-8">Office</h5>
            <address className="not-italic text-gray-400 space-y-4">
              <p>Abuja, Nigeria</p>
              <p>+234 803 628 9811</p>
              <p className="text-white font-bold">charityaminukwala@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2A2A38] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.4em]">© 2026 VIDAVEST. Empowering Nigeria.</p>
          <div className="flex space-x-8 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
