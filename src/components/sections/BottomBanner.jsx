import React from 'react';

const BottomBanner = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 text-center relative overflow-hidden group">
          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to transform your workflow?</h2>
            <p className="text-white/80 mb-10 text-lg">
              Join 10,000+ developers shipping world-class applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-bold hover:shadow-xl transition-all">
                Create Free Account
              </button>
              <button className="px-8 py-3 rounded-lg bg-black/20 text-white border border-white/20 hover:bg-black/30 transition-all font-semibold">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
