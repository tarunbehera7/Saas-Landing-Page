import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and hobbyists.",
    features: ["Up to 3 projects", "Global Edge Network", "Community Support"],
    highlight: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and growing teams.",
    features: ["Unlimited projects", "Priority Support", "Advanced Analytics", "Custom Domains"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Enterprise-grade security and support.",
    features: ["Custom SLA", "Dedicated Infrastructure", "SSO & SAML", "24/7 Phone Support"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400">Choose the plan that's right for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 bg-slate-900/50'} flex flex-col`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-base font-normal text-slate-500">/mo</span></div>
              <p className="text-slate-400 text-sm mb-8">{plan.description}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-blue-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
