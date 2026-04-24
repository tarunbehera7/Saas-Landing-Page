import React from 'react';

const specs = [
  { label: "Deployment Speed", value: "< 5s" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Global Locations", value: "24+" },
  { label: "Concurrent Builds", value: "Unlimited" }
];

const TechSpecs = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {specs.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-gradient">{spec.value}</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
