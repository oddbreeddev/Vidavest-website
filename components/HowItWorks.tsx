import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Select Your Path',
      description: 'Choose the program that aligns with your current status—be it a student, graduate, or emerging youth business owner.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Apply or Pledge',
      description: 'Fill out our simplified application form with your pitch, or select a support tier to become a global mission partner.',
      icon: '📝'
    },
    {
      number: '03',
      title: 'Vetting & Review',
      description: 'Our global strategy team evaluates applications for feasibility and scalability. Supporters receive instant confirmation.',
      icon: '⚖️'
    },
    {
      number: '04',
      title: 'Ignite Impact',
      description: 'Successful applicants receive funding and mentorship. Supporters get quarterly reports on the lives they help transform.',
      icon: '🔥'
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#08080A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[--gold] text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Process</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">How it <span className="brand-gradient-text">Works.</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We've streamlined the journey from youth ambition to global achievement into four clear stages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Decorative Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2A2A38] to-transparent -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10 group">
              <div className="p-10 rounded-[2.5rem] bg-[#14141C] border border-[#2A2A38] hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl brand-gradient-bg flex items-center justify-center text-black font-black text-xl mb-8 shadow-xl shadow-purple-900/20 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="text-4xl mb-6">{step.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;