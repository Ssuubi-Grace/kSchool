'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/IMG/Gal1.jpg" alt="Students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0350]/95 via-[#0A0350]/85 to-[#0A0350]/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="inline-block mb-6 px-8 py-3 bg-[#FCC953] rounded-full animate-fadeIn">
          <span className="text-[#0A0350] font-bold text-sm tracking-widest">ESTABLISHED 1985</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fadeIn">
          Transforming Lives<br />Through Education
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Providing quality education to children in Gitta Nabutaka Village for over 39 years
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/about"
            className="bg-[#FCC953] text-[#0A0350] px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Learn More
          </Link>
          <Link
            href="/register"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#0A0350] transform hover:scale-105 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
