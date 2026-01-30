'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import QuickStats from '@/components/QuickStats';
import WelcomeSection from '@/components/WelcomeSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';
import FeaturedNews from '@/components/FeaturedNews';

export default function Home() {
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.count');

      counters.forEach((counter) => {
        const updateCounter = () => {
          const target = +(counter as HTMLElement).getAttribute('data-target')!;
          const current = +(counter as HTMLElement).innerText || 0;
          const increment = target / 800;

          if (current < target) {
            (counter as HTMLElement).innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 50);
          } else {
            if ((counter as HTMLElement).getAttribute('data-plus') === 'true') {
              (counter as HTMLElement).innerText = target + '+';
            } else {
              (counter as HTMLElement).innerText = target.toString();
            }
          }
        };

        updateCounter();
      });
    };

    animateCounters();
  }, []);

  return (
    <div className="w-full m-0 p-0">
      {/* Hero Section */}
      <EnhancedHeroSection />

      {/* Quick Stats Bar */}
      <QuickStats />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <WelcomeSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <WhyChooseUs />
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <ProgramsSection />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-[#0A0350] font-bold mb-6">
              Parent Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families whose children&apos;s lives have been transformed
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <CTASection />
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Impact & Growth</h2>
          <p className="text-center text-white/90 text-lg mb-16">
            Numbers that tell the story of our commitment to educational excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👨‍🏫', label: 'Dedicated Teachers', number: '80', plus: true },
              { icon: '👧', label: 'Happy Students', number: '500', plus: true },
              { icon: '📚', label: 'Books in Library', number: '5000', plus: true },
              { icon: '⭐', label: 'Years Excellence', number: '39', plus: false },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  <span className="count" data-target={parseInt(stat.number)} data-plus={stat.plus}>
                    0
                  </span>
                </div>
                <p className="text-white/90 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-gray-50">
        <FeaturedNews />
      </section>
    </div>
  );
}
