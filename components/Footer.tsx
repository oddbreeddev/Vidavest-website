
import React, { useState } from 'react';
import { Page } from '../types';
import { apiService } from '../services/api';
import Notification, { NotificationType } from './Notification';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: NotificationType} | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNotification({ message: 'Valid email required.', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      await apiService.saveNewsletter(email);
      setNotification({ message: 'Successfully joined the Vidavest loop.', type: 'success' });
      setEmail('');
    } catch (err) {
      setNotification({ message: 'Sync failed. Try again later.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/vidavest.05?igsh=MWN2eTVsaXZyM3p1aQ==' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="py-20 border-t border-[#2A2A38] px-6 md:px-12 bg-[#08080A]">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-4 mb-8 cursor-pointer group" onClick={() => onNavigate(Page.Home)}>
              <div className="w-14 h-14 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <img src="https://i.postimg.cc/mrJWTxq6/IMG-20260105-WA0043-removebg-preview.png" alt="Vidavest" className="w-full h-full object-contain brightness-110" />
              </div>
              <span className="text-2xl font-black brand-gradient-text tracking-tighter">VIDAVEST</span>
            </div>
            
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Stay Connected</p>
            <form onSubmit={handleSubscribe} className="flex max-w-sm mb-10">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="flex-grow bg-[#0D0D12] border border-white/5 rounded-l-xl px-5 text-[10px] font-black text-white outline-none focus:border-gold/20 transition uppercase tracking-widest"
                disabled={loading}
              />
              <button 
                type="submit" 
                className={`bg-white text-black px-6 py-4 rounded-r-xl font-black text-[10px] uppercase tracking-widest hover:bg-gold transition ${loading ? 'opacity-50' : ''}`}
                disabled={loading}
              >
                {loading ? '...' : 'Join'}
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-gold font-black uppercase tracking-[0.2em] text-[9px] mb-6">Platform</h5>
            <ul className="space-y-3 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <li><button onClick={() => onNavigate(Page.About)} className="hover:text-white transition">Mission</button></li>
              <li><button onClick={() => onNavigate(Page.Programs)} className="hover:text-white transition">Funding</button></li>
              <li><button onClick={() => onNavigate(Page.Donate)} className="hover:text-white transition">Support</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-gold font-black uppercase tracking-[0.2em] text-[9px] mb-6">Contact</h5>
            <div className="space-y-3 font-bold text-xs uppercase tracking-widest text-gray-400">
              <p className="text-white">+234 803 628 9811</p>
              <p>vidavest05@gmail.com</p>
              <p className="text-[10px] lowercase tracking-normal italic opacity-50 mt-4">@vidavest.05</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#2A2A38] flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black text-gray-700 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2">
            <p>© 2026 VIDAVEST EMPOWERMENT.</p>
            <button 
              onClick={() => onNavigate(Page.Admin)}
              className="opacity-5 hover:opacity-40 transition-opacity cursor-default"
            >
              •
            </button>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => onNavigate(Page.Privacy)} className="hover:text-white transition">Privacy</button>
            <button onClick={() => onNavigate(Page.Terms)} className="hover:text-white transition">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
