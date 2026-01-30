
import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Submission, Page } from '../types';

interface AdminProps {
  onNavigate?: (page: Page) => void;
}

const Admin: React.FC<AdminProps> = ({ onNavigate }) => {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      const unsubscribe = apiService.subscribeToSubmissions((latestData) => {
        setData(latestData);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (id: string, status: Submission['status']) => {
    await apiService.updateStatus(id, status);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminId === "admin@vidavest" && password === "pass@admin.vidavest") {
      setIsAuthenticated(true);
    } else {
      alert("Verification Failed.");
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
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6">
        <div className="max-w-sm w-full p-12 bg-[#0D0D12] border border-white/5 rounded-2xl">
          <h1 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-12 text-center">Identity Node</h1>
          
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[8px] font-black text-gray-600 uppercase tracking-widest block ml-1">Identifier</label>
              <input 
                type="text" 
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full bg-black border border-white/5 rounded-lg p-4 text-white outline-none focus:border-white/20 transition text-xs font-bold"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[8px] font-black text-gray-600 uppercase tracking-widest block ml-1">Secure Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-white/5 rounded-lg p-4 text-white outline-none focus:border-white/20 transition text-xs font-bold"
                required
              />
            </div>
            <button type="submit" className="w-full bg-white text-black py-4 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-gold transition mt-4">
              Confirm
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-32 px-6 md:px-12 min-h-screen bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/5">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase mb-1">Operations Hub</h1>
            <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
              {data.length} LIVE ENTRIES • {data.filter(d => d.type === 'newsletter').length} PULSE SUBS
            </p>
          </div>
          <button 
            onClick={handleSignOut}
            className="text-[8px] font-black uppercase tracking-widest text-gray-700 hover:text-white transition"
          >
            Terminal Close
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-40">
            <div className="w-5 h-5 border border-white/10 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-2">
            {data.length === 0 ? (
              <div className="py-40 text-center border border-dashed border-white/5 rounded-2xl">
                <p className="text-gray-800 font-black uppercase tracking-[0.4em] text-[10px]">Vault empty.</p>
              </div>
            ) : (
              data.map((item) => (
                <div key={item.id} className="bg-[#0D0D12] border border-white/5 p-6 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-between hover:bg-[#111118] transition-colors group">
                  
                  <div className="flex items-center gap-6 w-full md:w-1/4">
                    <div className={`w-1 h-8 rounded-full ${
                      item.type === 'newsletter' ? 'bg-purple-500' :
                      item.status === 'approved' ? 'bg-green-500' : 
                      item.status === 'declined' ? 'bg-red-500' : 'bg-gold'
                    }`}></div>
                    <div className="overflow-hidden">
                      <span className={`text-[7px] font-black uppercase tracking-widest block mb-0.5 ${item.type === 'newsletter' ? 'text-purple-400' : 'text-gray-600'}`}>
                        {item.type} {item.tier ? `• ${item.tier}` : ''}
                      </span>
                      <h3 className="text-sm font-black text-white truncate uppercase">
                        {item.fullName || 'Anonymous Pulse'}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-2/4 text-left">
                    <div>
                      <p className="text-[7px] font-black text-gray-700 uppercase tracking-widest mb-1">Electronic Mail</p>
                      <p className="text-[10px] text-gray-400 font-bold truncate">{item.email}</p>
                    </div>
                    <div>
                      <p className="text-[7px] font-black text-gray-700 uppercase tracking-widest mb-1">Target / Value</p>
                      <p className="text-[10px] font-black text-white">{item.amount ? `₦${item.amount}` : item.type === 'newsletter' ? 'Subscribed' : 'N/A'}</p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-[7px] font-black text-gray-700 uppercase tracking-widest mb-1">Arrival</p>
                      <p className="text-[9px] text-gray-600 uppercase">{new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full md:w-1/4 justify-end">
                    {item.type !== 'newsletter' ? (
                      <>
                        <button 
                          onClick={() => handleStatusChange(item.id, 'approved')}
                          className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest transition ${
                            item.status === 'approved' ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-600 hover:text-white'
                          }`}
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => handleStatusChange(item.id, 'declined')}
                          className={`px-4 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest transition ${
                            item.status === 'declined' ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-600 hover:text-white'
                          }`}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-[8px] font-black text-purple-500 uppercase tracking-[0.2em] px-4 py-2 bg-purple-500/10 rounded-lg">
                        Auto-Synced
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
