'use client';

import { useState, useEffect, useRef } from 'react';

const QuickStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ students: 0, staff: 0, years: 0, lives: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const finalCounts = { students: 500, staff: 80, years: 39, lives: 5000 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        students: Math.floor(finalCounts.students * easeOutQuart),
        staff: Math.floor(finalCounts.staff * easeOutQuart),
        years: Math.floor(finalCounts.years * easeOutQuart),
        lives: Math.floor(finalCounts.lives * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-r from-[#0A0350] via-[#1a1a7e] to-[#0A0350] overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute top-8 left-10 w-20 h-20 bg-[#FCC953]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-red-400/20 rounded-full animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-[#FCC953] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              key: 'students',
              value: counts.students,
              suffix: '+',
              label: 'Happy Students',
              icon: '👨‍🎓',
              color: 'from-blue-400 to-blue-600'
            },
            {
              key: 'staff',
              value: counts.staff,
              suffix: '+',
              label: 'Qualified Staff',
              icon: '👩‍🏫',
              color: 'from-green-400 to-green-600'
            },
            {
              key: 'years',
              value: counts.years,
              suffix: '',
              label: 'Years Excellence',
              icon: '🏆',
              color: 'from-yellow-400 to-yellow-600'
            },
            {
              key: 'lives',
              value: counts.lives,
              suffix: '+',
              label: 'Lives Impacted',
              icon: '❤️',
              color: 'from-red-400 to-red-600'
            },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#FCC953] transition-colors duration-300">
                  {stat.value.toLocaleString()}{stat.suffix}
                </h3>
                <p className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FCC953]/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#FCC953] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-[#FCC953] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;