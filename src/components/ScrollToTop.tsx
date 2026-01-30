'use client';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = document.documentElement.scrollTop;
            const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrolled / maxHeight) * 100;

            setScrollProgress(progress);
            setIsVisible(scrolled > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}>
            <button
                onClick={scrollToTop}
                className="group relative w-14 h-14 bg-[#0A0350] hover:bg-[#FCC953] text-white hover:text-[#0A0350] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                aria-label="Scroll to top"
            >
                {/* Progress Ring */}
                <svg className="absolute inset-0 w-14 h-14 transform -rotate-90">
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        className="opacity-20"
                    />
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 24}`}
                        strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                        className="transition-all duration-300"
                    />
                </svg>

                {/* Arrow Icon */}
                <svg
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FCC953] to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {/* School-themed floating elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#FCC953] rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
        </div>
    );
};

export default ScrollToTop;