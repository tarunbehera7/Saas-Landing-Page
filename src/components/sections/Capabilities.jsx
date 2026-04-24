import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const capabilities = [
  "Advanced CI/CD Pipelines",
  "Blue-Green Deployments",
  "Real-time Observability",
  "Custom Security Policies",
  "Native Kubernetes Integration",
  "Automated Database Scaling"
];

const Capabilities = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Designed for scale, <br /> Built for developers.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our platform handles the complexity of infrastructure so you can focus on building features. 
              From startup to enterprise, we scale with you every step of the way.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-blue-500" size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl relative overflow-hidden">
               {/* Simplified Dashboard Mockup */}
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <div className="space-y-3">
                 <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                 <div className="h-4 w-full bg-slate-800 rounded animate-pulse delay-75" />
                 <div className="h-4 w-5/6 bg-slate-800 rounded animate-pulse delay-150" />
                 <div className="h-20 w-full border border-slate-800 rounded bg-slate-950/50 flex items-center justify-center">
                   <span className="text-[10px] text-slate-600 font-mono">system_load: normal</span>
                 </div>
               </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl glass border-slate-700/50 hidden md:block">
              <div className="text-xs text-slate-500 mb-1">Performance</div>
              <div className="text-xl font-bold text-green-400">99.8% Efficient</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
