import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { Submission } from '../types';

const Admin: React.FC = () => {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const results = await apiService.getSubmissions();
    setData(results);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id: string, status: Submission['status']) => {
    await apiService.updateStatus(id, status);
    loadData();
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Vidavest <span className="text-gold">Command Center</span></h1>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Global Management Platform • Vision Control</p>
          </div>
          <div className="flex gap-4">
             <div className="p-4 bg-[#14141C] border border-white/5 rounded-2xl">
               <p className="text-[10px] font-black text-gray-600 uppercase mb-1">Global Leads</p>
               <p className="text-2xl font-black text-white">{data.length}</p>
             </div>
             <div className="p-4 bg-[#14141C] border border-white/5 rounded-2xl">
               <p className="text-[10px] font-black text-gray-600 uppercase mb-1">Impact Approved</p>
               <p className="text-2xl font-black text-gold">{data.filter(s => s.status === 'approved').length}</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          {data.length === 0 ? (
            <div className="py-32 text-center glass-card rounded-[3rem] border-dashed border-white/10">
              <p className="text-gray-600 font-black uppercase tracking-[0.4em]">No global submissions in vault yet.</p>
            </div>
          ) : (
            data.map((item) => (
              <div key={item.id} className="glass-card p-8 rounded-[2.5rem] flex flex-col lg:flex-row gap-8 items-start hover:border-white/20 transition-all group relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  item.status === 'approved' ? 'bg-green-500' : 
                  item.status === 'declined' ? 'bg-red-500' : 'bg-gold'
                }`}></div>
                
                <div className="lg:w-1/4">
                  <span className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block ${
                    item.type === 'funding' ? 'bg-purple-500/10 text-brandPurple border border-purple-500/20' : 'bg-gold/10 text-gold border border-gold/20'
                  }`}>
                    {item.type} Submission
                  </span>
                  <h3 className="text-xl font-black text-white mb-1">{item.fullName}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-4">{item.email}</p>
                  <p className="text-[10px] font-black text-gray-600 uppercase">{new Date(item.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="lg:w-2/4 bg-black/30 p-6 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-gold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span> Strategic Intelligence Insight
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium italic">"{item.aiReview}"</p>
                  {item.amount && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                       <span className="text-[9px] font-black text-gray-600 uppercase">Requested Funding</span>
                       <span className="text-sm font-black text-white">₦{item.amount}</span>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/4 flex flex-col gap-3 w-full">
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => handleStatusChange(item.id, 'approved')}
                      className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition ${item.status === 'approved' ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-green-500/20 hover:text-green-400'}`}
                    >
                      Approve Request
                    </button>
                    <button 
                      onClick={() => handleStatusChange(item.id, 'declined')}
                      className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition ${item.status === 'declined' ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400'}`}
                    >
                      Decline
                    </button>
                  </div>
                  <p className="text-center text-[9px] font-black text-gray-600 uppercase mt-2">Current: <span className="text-white">{item.status}</span></p>
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