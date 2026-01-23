
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Submission } from '../types';

const Admin: React.FC = () => {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [pulse, setPulse] = useState<string>("Analyzing global landscape...");
  const [analyzingPulse, setAnalyzingPulse] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // New Auth States
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const loadData = async () => {
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
    loadPulse();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Requested Credentials: 
    // ID: admin@vidavest
    // Pass: pass@admin.vidavest
    if (adminId === "admin@vidavest" && password === "pass@admin.vidavest") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Admin Credentials. Access Denied.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full p-10 md:p-12 rounded-[3rem] glass-card text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 brand-gradient-bg"></div>
          <div className="w-20 h-20 brand-gradient-bg rounded-3xl mx-auto flex items-center justify-center text-3xl mb-8 shadow-2xl animate-float">🔐</div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Command Vault</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 leading-relaxed">Secure Node Access • Strategy HQ</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1 text-left">
              <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-4">Admin Identifier</label>
              <input 
                type="text" 
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="admin@vidavest" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-gold transition font-bold text-sm"
              />
            </div>
            <div className="space-y-1 text-left">
              <label className="text-[9px] font-black text-gray-600 uppercase tracking-widest ml-4">Secure Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white outline-none focus:border-gold transition font-bold text-sm"
              />
            </div>
            <button type="submit" className="w-full brand-gradient-bg text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl mt-4 hover:scale-[1.02] transition active:scale-95">
              Authenticate Access
            </button>
          </form>
          <div className="mt-10 flex items-center justify-center gap-2 opacity-20">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-[8px] text-white font-black uppercase tracking-[0.4em]">Encrypted Session Active</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F]">
      <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] block">Executive Control Live</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Command <span className="brand-gradient-text">Center.</span></h1>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Cloud-Synchronized Pipeline • Real-time Data</p>
          </div>
          <div className="flex gap-4">
             <div className="p-6 bg-[#14141C] border border-white/5 rounded-[2rem] min-w-[140px] text-center">
               <p className="text-[10px] font-black text-gray-600 uppercase mb-2">Global Leads</p>
               <p className="text-3xl font-black text-white">{data.length}</p>
             </div>
             <div className="p-6 bg-[#14141C] border border-white/5 rounded-[2rem] min-w-[140px] text-center">
               <p className="text-[10px] font-black text-gray-600 uppercase mb-2">Success Rate</p>
               <p className="text-3xl font-black text-gold">
                 {data.length ? Math.round((data.filter(s => s.status === 'approved').length / data.length) * 100) : 0}%
               </p>
             </div>
          </div>
        </div>

        {/* AI Strategic Pulse Section */}
        <div className="mb-12 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#1A1A24] to-[#0B0B0F] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandPurple/5 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl brand-gradient-bg flex items-center justify-center text-2xl shadow-lg">📈</div>
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Cloud Insight Synthesis</h2>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Global Intelligence Pulse</p>
                </div>
              </div>
              <button 
                onClick={loadPulse}
                disabled={analyzingPulse}
                className={`text-[9px] font-black text-gold hover:text-white transition uppercase tracking-widest px-4 py-2 border border-gold/20 rounded-full ${analyzingPulse ? 'opacity-50 animate-pulse' : ''}`}
              >
                {analyzingPulse ? 'Analyzing Cloud Data...' : 'Refresh Insights'}
              </button>
            </div>
            <div className="bg-black/40 p-8 rounded-3xl border border-white/5">
              <p className="text-lg text-gray-300 font-medium leading-relaxed italic">
                "{pulse}"
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em] mb-4">Live Cloud Submissions</h3>
          {data.length === 0 ? (
            <div className="py-32 text-center glass-card rounded-[3rem] border-dashed border-white/10">
              <p className="text-gray-600 font-black uppercase tracking-[0.4em]">No cloud records found.</p>
            </div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="glass-card p-8 md:p-10 rounded-[2.5rem] flex flex-col lg:flex-row gap-8 items-center hover:border-brandPurple/30 transition-all group relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  item.status === 'approved' ? 'bg-green-500' : 
                  item.status === 'declined' ? 'bg-red-500' : 'bg-gold'
                }`}></div>
                
                <div className="lg:w-1/4 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">👤</div>
                    <div>
                      <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-1 ${
                        item.type === 'funding' ? 'bg-purple-500/10 text-brandPurple border border-purple-500/20' : 'bg-gold/10 text-gold border border-gold/20'
                      }`}>
                        {item.type}
                      </span>
                      <h3 className="text-xl font-black text-white">{item.fullName}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-bold mb-1">{item.email}</p>
                  <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest">{new Date(item.createdAt).toLocaleString()}</p>
                </div>

                <div className="lg:w-2/4 w-full bg-black/30 p-8 rounded-[2rem] border border-white/5 relative">
                  <p className="text-[9px] font-black text-gold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span> Gemini Vetting
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-semibold italic">"{item.aiReview}"</p>
                  
                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-8">
                     <div>
                       <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Program</p>
                       <p className="text-sm font-black text-white uppercase">{item.tier || 'Standard'}</p>
                     </div>
                     {item.amount && (
                       <div>
                         <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Request</p>
                         <p className="text-sm font-black text-gold">₦{item.amount}</p>
                       </div>
                     )}
                  </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-col gap-3">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    <button 
                      onClick={() => handleStatusChange(item.id, 'approved')}
                      className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${item.status === 'approved' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'bg-white/5 text-gray-400 hover:bg-green-500/20 hover:text-green-400 border border-white/5'}`}
                    >
                      {item.status === 'approved' ? 'Approved ✓' : 'Approve'}
                    </button>
                    <button 
                      onClick={() => handleStatusChange(item.id, 'declined')}
                      className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${item.status === 'declined' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400 border border-white/5'}`}
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
