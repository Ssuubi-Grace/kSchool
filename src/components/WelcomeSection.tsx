'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const WelcomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Carousel images
  const images = [
    {
      src: "/IMG/Gal1.jpg",
      alt: "Students in classroom",
      caption: "Quality Education"
    },
    {
      src: "/IMG/Gal2.jpg",
      alt: "School facilities",
      caption: "Modern Facilities"
    },
    {
      src: "/IMG/Gal3.jpg",
      alt: "Happy students",
      caption: "Happy Students"
    },
    {
      src: "/IMG/Gal1.jpg", // You can replace with actual 4th image
      alt: "School activities",
      caption: "Engaging Activities"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FCC953]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A0350]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-red-400/10 rounded-full blur-2xl animate-bounce"></div>

      {/* Main Container - Properly Centered */}
      <div className="w-full flex justify-center px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]">

            {/* Left Side - Welcome Message */}
            <div className={`w-full flex flex-col justify-center items-center text-center space-y-8 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="space-y-6 max-w-lg w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0350] font-bold leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-[#0A0350] via-blue-600 to-[#FCC953] bg-clip-text text-transparent">
                    Kutya Mukama
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-medium">
                    Nursery & Primary School
                  </span>
                </h2>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FCC953] to-red-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-[#0A0350] rounded-full"></div>
                  <div className="w-4 h-1 bg-[#0A0350] rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  A <span className="font-semibold text-[#0A0350]">licensed private school</span> in Gitta Village, Wakiso District -
                  your <span className="font-semibold text-[#FCC953]">beacon of learning</span> offering a warm, welcoming environment.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  For <span className="font-bold text-[#FCC953]">39 years</span>, we've nurtured young minds through quality academics,
                  sports, life skills, and talent development. Where <span className="font-semibold text-[#0A0350]">education meets excellence</span>
                  and every child gets wings to soar.
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#0A0350] to-blue-700 hover:from-[#FCC953] hover:to-yellow-400 text-white hover:text-[#0A0350] px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <span>Learn More About Us</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#0A0350]/20 transition-all">
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Side - Enhanced Image Carousel */}
            <div className={`w-full flex justify-center items-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative group w-full max-w-lg">
                {/* Decorative background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#FCC953]/20 via-transparent to-[#0A0350]/20 rounded-3xl blur-2xl"></div>

                {/* Main carousel container */}
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Enhanced image caption */}
                      <div className="absolute bottom-8 left-8 text-white">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/30">
                          <h4 className="text-xl font-bold">{image.caption}</h4>
                          <p className="text-sm opacity-90">Excellence in Education</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced carousel indicators */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${index === currentSlide
                        ? 'w-8 h-3 bg-[#FCC953] rounded-full'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                        }`}
                    />
                  ))}
                </div>

                {/* Enhanced navigation arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full transition-all shadow-lg opacity-80 hover:opacity-100 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-[#0A0350]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full transition-all shadow-lg opacity-80 hover:opacity-100 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-[#0A0350]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                {/* Enhanced decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#FCC953] to-yellow-400 rounded-full animate-bounce opacity-90 shadow-lg flex items-center justify-center">

                  <span className="text-white text-xl">⭐</span>



                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-8 -left-8 w-6 h-6 bg-gradient-to-br from-[#0A0350] to-blue-600 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;