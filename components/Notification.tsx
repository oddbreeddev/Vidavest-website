import React, { useEffect } from 'react';

export type NotificationType = 'success' | 'error' | 'warning';

interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: '✅',
    error: '⚠️',
    warning: '🔔'
  };

  const colors = {
    success: 'border-green-500/30 bg-green-500/10 text-green-400',
    error: 'border-red-500/30 bg-red-500/10 text-red-400',
    warning: 'border-gold/30 bg-gold/10 text-gold'
  };

  return (
    <div className={`fixed top-24 right-6 z-[100] p-4 pr-12 rounded-2xl border backdrop-blur-xl shadow-2xl animate-page-enter ${colors[type]}`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{type}</p>
          <p className="text-sm font-bold">{message}</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition"
      >
        ✕
      </button>
    </div>
  );
};

export default Notification;