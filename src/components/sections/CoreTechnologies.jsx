import React from 'react';
import { Cpu, Globe, Zap, Shield } from 'lucide-react';

const tech = [
  {
    icon: <Cpu className="text-blue-400" />,
    title: "Edge Computing",
    description: "Run code closer to your users with zero latency."
  },
  {
    icon: <Globe className="text-purple-400" />,
    title: "Global Mesh",
    description: "Automatic multi-region replication and routing."
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Instant Deploys",
    description: "Push to git and see your changes live in seconds."
  },
  {
    icon: <Shield className="text-green-400" />,
    title: "Self-Healing",
    description: "Automatic recovery from infrastructure failures."
  }
];

const CoreTechnologies = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Technologies</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Built on a foundation of performance and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tech.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl glass hover:border-slate-700 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
