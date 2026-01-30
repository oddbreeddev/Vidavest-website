import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Submission, Page } from '../types';

interface AdminProps {
  onNavigate?: (page: Page) => void;
}

const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [pulse, setPulse] = useState<string>("Analyzing global landscape...");
  const [analyzingPulse, setAnalyzingPulse] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const loadData = async () => {
    setLoading(true);
    const results = await apiService.getSubmissions();
    setData(results);
    setLoading(false);
  };

  const loadPulse = async () => {
    setAnalyzingPulse(true);
    const insight = await apiService.getGlobalPulse();
    setPulse(insight);
    setAnalyzingPulse(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
      loadPulse();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (id: string, status: Submission['status']) => {
    await apiService.updateStatus(id, status);
    loadData();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === "admin@vidavest" && password === "pass@admin.vidavest") {
      setIsAuthenticated(true);
    } else {
      alert("Unauthorized Access Attempt Detected. Command Vault Locked.");
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setAdminId("");
    setPassword("");
    if (onNavigate) {
      onNavigate(Page.Home);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full p-10 md:p-14 rounded-[3.5rem] glass-card text-center relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 brand-gradient-bg"></div>
          <div className="w-24 h-24 brand-gradient-bg rounded-3xl mx-auto flex items-center justify-center text-4xl mb-10 shadow-2xl animate-float">🔐</div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Command Vault</h1>
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-12 leading-relaxed">Identity Verification Required</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-4">Identifier</label>
              <input 
                type="text" 
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="admin@vidavest" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-gold transition font-bold text-sm"
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-4">Secure Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-gold transition font-bold text-sm"
                required
              />
            </div>
            <button type="submit" className="w-full brand-gradient-bg text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl mt-6 hover:scale-[1.02] transition active:scale-95">
              Access Node
            </button>
          </form>
          <div className="mt-12 flex items-center justify-center gap-3 opacity-20">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-[9px] text-white font-black uppercase tracking-[0.5em]">Vidavest Strategic Operations Hub</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading && data.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F]">
      <div className="flex flex-col items-center gap-6">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gold text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Syncing with Cloud Vault...</p>
      </div>
    </div>
  );

  return (
    <section className="pt-32 pb-32 px-6 md:px-12 min-h-screen bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.5em] block">Executive Operations Live</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Command <span className="brand-gradient-text">Center.</span></h1>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] mt-3">Pipeline Oversight • Executive Decision Engine</p>
          </div>
          <div className="flex gap-6 items-center">
             <div className="p-8 bg-[#14141C] border border-white/5 rounded-[2.5rem] min-w-[160px] text-center hidden sm:block">
               <p className="text-[11px] font-black text-gray-600 uppercase mb-2 tracking-widest">Active Leads</p>
               <p className="text-4xl font-black text-white">{data.length}</p>
             </div>
             <button 
               onClick={handleSignOut}
               className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-red-500/10 hover:border-red-500/50 transition-all text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-red-400"
             >
               Sign Out
             </button>
          </div>
        </div>

        <div className="mb-16 p-10 md:p-14 rounded-[4rem] bg-gradient-to-br from-[#1A1A24] to-[#0B0B0F] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandPurple/5 blur-[120px] pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl brand-gradient-bg flex items-center justify-center text-3xl shadow-lg">📈</div>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Pipeline Synthesis</h2>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Strategic Overview • Operations Engine</p>
                </div>
              </div>
              <button 
                onClick={loadPulse}
                disabled={analyzingPulse}
                className={`text-[10px] font-black text-gold hover:text-white transition uppercase tracking-widest px-6 py-2.5 border border-gold/20 rounded-full bg-gold/5 ${analyzingPulse ? 'opacity-50 animate-pulse' : ''}`}
              >
                {analyzingPulse ? 'Processing Pulse...' : 'Refresh Insights'}
              </button>
            </div>
            <div className="bg-black/40 p-10 rounded-[2.5rem] border border-white/5 min-h-[120px] flex items-center shadow-inner">
              <p className="text-xl text-gray-300 font-medium leading-relaxed italic">
                "{pulse}"
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.5em]">Encrypted Cloud Leads</h3>
            <span className="text-[9px] font-black text-gray-800 uppercase tracking-widest">Real-time Synchronization Active</span>
          </div>
          
          {data.length === 0 ? (
            <div className="py-40 text-center glass-card rounded-[4rem] border-dashed border-white/10">
              <p className="text-gray-600 font-black uppercase tracking-[0.6em]">No data present in the cloud vault.</p>
            </div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="glass-card p-10 md:p-12 rounded-[3rem] flex flex-col lg:flex-row gap-10 items-center hover:border-brandPurple/40 transition-all duration-500 group relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-2 transition-all duration-500 ${
                  item.status === 'approved' ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 
                  item.status === 'declined' ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-gold shadow-[0_0_20px_rgba(243,199,122,0.3)]'
                }`}></div>
                
                <div className="lg:w-1/4 w-full">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl shadow-inner border border-white/5">
                      {item.type === 'partnership' ? '🤝' : '👤'}
                    </div>
                    <div className="overflow-hidden">
                      <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-2 ${
                        item.type === 'funding' ? 'bg-purple-500/10 text-brandPurple border border-purple-500/20' : 'bg-gold/10 text-gold border border-gold/20'
                      }`}>
                        {item.type}
                      </span>
                      <h3 className="text-2xl font-black text-white truncate tracking-tighter">{item.fullName}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-bold mb-1 truncate px-1">{item.email}</p>
                  <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest px-1">{new Date(item.createdAt).toLocaleString()}</p>
                </div>

                <div className="lg:w-2/4 w-full bg-black/40 p-10 rounded-[3rem] border border-white/5 relative shadow-inner group-hover:bg-black/50 transition-colors">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span> Executive Review Notes
                  </p>
                  <p className="text-base text-gray-400 leading-relaxed font-semibold italic">"{item.aiReview || 'Review pending. Portfolio team will update shortly.'}"</p>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-12">
                     <div>
                       <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">Program Node</p>
                       <p className="text-base font-black text-white uppercase tracking-tight">{item.tier || 'General Access'}</p>
                     </div>
                     {item.amount && (
                       <div>
                         <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-2">Target Commitment</p>
                         <p className="text-base font-black text-gold tracking-tight">₦{item.amount}</p>
                       </div>
                     )}
                  </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-3">
                    <button 
                      onClick={() => handleStatusChange(item.id, 'approved')}
                      className={`py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item.status === 'approved' ? 'bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)]' : 'bg-white/5 text-gray-500 hover:bg-green-500/20 hover:text-green-400 border border-white/5'}`}
                    >
                      {item.status === 'approved' ? 'Approved ✓' : 'Approve'}
                    </button>
                    <button 
                      onClick={() => handleStatusChange(item.id, 'declined')}
                      className={`py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item.status === 'declined' ? 'bg-red-500 text-white shadow-[0_10px_30px_rgba(239,68,68,0.3)]' : 'bg-white/5 text-gray-500 hover:bg-red-500/20 hover:text-red-400 border border-white/5'}`}
                    >
                      {item.status === 'declined' ? 'Declined ✕' : 'Decline'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Admin;