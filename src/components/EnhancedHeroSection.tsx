'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '../styles/hero-animations.css';

const EnhancedHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const slides = [
        {
            image: "/IMG/Gal1.jpg",
            title: "Transforming Lives Through Education",
            subtitle: "Providing quality education to children in Gitta Nabutaka Village for over 39 years",
            badge: "ESTABLISHED 1985",
            cta: "Our Story"
        },
        {
            image: "/IMG/Gal2.jpg",
            title: "Excellence in Early Learning",
            subtitle: "Nurturing young minds with innovative teaching methods and caring guidance",
            badge: "500+ STUDENTS",
            cta: "Programs"
        },
        {
            image: "/IMG/Gal3.jpg",
            title: "Building Tomorrow's Leaders",
            subtitle: "Empowering students with knowledge, values, and skills for a brighter future",
            badge: "80+ TEACHERS",
            cta: "Faculty"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        let timer: NodeJS.Timeout;

        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 6000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [slides.length, isPlaying]);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt="Students"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0350]/95 via-[#0A0350]/85 to-[#0A0350]/75"></div>
                </div>
            ))}

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float">
                <div className="w-16 h-16 bg-[#FCC953] rounded-full flex items-center justify-center text-2xl shadow-lg">
                    📚
                </div>
            </div>
            <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl shadow-lg backdrop-blur-sm">
                    ⭐
                </div>
            </div>
            <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-xl shadow-lg">
                    🎓
                </div>
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm shadow-lg">
                    ✨
                </div>
            </div>
            <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-lg shadow-lg">
                    🌟
                </div>
            </div>

            {/* Slide Controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all group"
                >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all group"
                >
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* Play/Pause Control */}
            <div className="absolute top-8 right-8 z-10">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all group"
                >
                    {isPlaying ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6"></path>
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-block mb-6 px-8 py-3 bg-[#FCC953] rounded-full animate-slideInLeft shimmer-effect">
                    <span className="text-[#0A0350] font-bold text-sm tracking-widest">
                        {slides[currentSlide].badge}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                    {slides[currentSlide].title.split(' ').map((word, i) => (
                        <span
                            key={`${currentSlide}-${i}`}
                            className="inline-block mr-4 animate-fadeIn"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed animate-slideInRight">
                    {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                    <Link
                        href="/about"
                        className="group bg-[#FCC953] text-[#0A0350] px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-slow"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Learn More
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </span>
                    </Link>
                    <Link
                        href="/register"
                        className="group bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-[#0A0350] transform hover:scale-105 transition-all duration-300"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Enroll Now
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Quick Access Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <Link href="/tour" className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏫</div>
                        <h3 className="font-bold text-lg mb-2">Virtual Tour</h3>
                        <p className="text-sm text-gray-200">Explore our facilities</p>
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link href="/admissions" className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📋</div>
                        <h3 className="font-bold text-lg mb-2">Admissions</h3>
                        <p className="text-sm text-gray-200">Join our community</p>
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link href="/contact" className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📞</div>
                        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                        <p className="text-sm text-gray-200">Get in touch today</p>
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#FCC953] w-8' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 animate-bounce z-10">
                <div className="flex flex-col items-center text-white">
                    <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default EnhancedHeroSection;