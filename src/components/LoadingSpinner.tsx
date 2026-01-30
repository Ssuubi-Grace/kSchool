'use client';

import { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
    variant?: 'default' | 'school' | 'minimal';
    size?: 'sm' | 'md' | 'lg';
    message?: string;
}

const LoadingSpinner = ({
    variant = 'school',
    size = 'md',
    message = 'Loading...'
}: LoadingSpinnerProps) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    const containerSizeClasses = {
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-12'
    };

    if (variant === 'minimal') {
        return (
            <div className="flex items-center justify-center">
                <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-[#0A0350] rounded-full animate-spin`}></div>
            </div>
        );
    }

    if (variant === 'school') {
        return (
            <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]} text-center`}>
                {/* School-themed animated loader */}
                <div className="relative mb-6">
                    <div className="flex space-x-2">
                        <div className="w-4 h-4 bg-[#0A0350] rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-[#FCC953] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>

                    {/* Books animation */}
                    <div className="mt-4 flex justify-center space-x-1">
                        <div className="w-2 h-6 bg-blue-400 rounded animate-pulse"></div>
                        <div className="w-2 h-8 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-7 bg-yellow-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        <div className="w-2 h-5 bg-red-400 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                </div>

                <div className="text-[#0A0350] font-semibold text-lg mb-2">
                    Kutya Kids School
                </div>
                <div className="text-gray-600 flex items-center">
                    <span>{message}</span>
                    <span className="w-8 text-left">{dots}</span>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]}`}>
            <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-[#0A0350] rounded-full animate-spin mb-4`}></div>
            <div className="text-gray-600 flex items-center">
                <span>{message}</span>
                <span className="w-8 text-left">{dots}</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;