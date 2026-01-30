'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#0A0350] to-[#1b163f] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your support helps provide quality education to children who need it most. Together, we can build brighter futures.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="bg-[#FCC953] text-[#0A0350] px-12 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <i className="fas fa-envelope mr-3"></i>Get in Touch
          </Link>
          <Link
            href="/about"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#0A0350] transform hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-info-circle mr-3"></i>Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
