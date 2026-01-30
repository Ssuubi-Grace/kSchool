'use client';

import { ReactNode } from 'react';

interface SectionTransitionProps {
    children: ReactNode;
    variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag';
    color?: string;
    flip?: boolean;
}

const SectionTransition = ({
    children,
    variant = 'wave',
    color = '#0A0350',
    flip = false
}: SectionTransitionProps) => {
    const getPath = () => {
        switch (variant) {
            case 'wave':
                return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
            case 'diagonal':
                return "M0,0L1440,64L1440,0Z";
            case 'curve':
                return "M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z";
            case 'zigzag':
                return "M0,32L120,37.3L240,21.3L360,32L480,10.7L600,21.3L720,32L840,10.7L960,21.3L1080,32L1200,10.7L1320,21.3L1440,32L1440,0L1320,0L1200,0L1080,0L960,0L840,0L720,0L600,0L480,0L360,0L240,0L120,0L0,0Z";
            default:
                return "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
        }
    };

    return (
        <div className="relative">
            {/* Top Transition */}
            <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
                <svg
                    className="relative block w-full h-16"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 64"
                    preserveAspectRatio="none"
                >
                    <path
                        d={getPath()}
                        fill={color}
                        className="transition-all duration-300"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Bottom Transition */}
            <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${flip ? '' : 'rotate-180'}`}>
                <svg
                    className="relative block w-full h-16"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 64"
                    preserveAspectRatio="none"
                >
                    <path
                        d={getPath()}
                        fill={color}
                        className="transition-all duration-300"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SectionTransition;