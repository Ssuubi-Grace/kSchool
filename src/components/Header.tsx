'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/curriculum', label: 'Programs' },
        { href: '/facilities', label: 'Facilities' },
        { href: '/events', label: 'Events' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
            {/* Top Contact Bar */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-3 px-4 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+256700000000" className="font-medium">+256 700 000 000</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:info@kutyamukama.org" className="font-medium">info@kutyamukama.org</a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="#facebook" className="hover:text-yellow-300 transition-colors" aria-label="Facebook">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4V9.5c0-.978.522-1.5 1.5-1.5H17V8c-1-.033-2.087-.033-3-.033C10.845 7.967 9 9.287 9 12.726V8z"/></svg>
                        </a>
                        <a href="#twitter" className="hover:text-yellow-300 transition-colors" aria-label="Twitter">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-5 8V12a4.5 4.5 0 008-4"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white h-24 px-4 md:px-8 flex items-center justify-between border-b border-gray-100">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image
                        src="/IMG/kutya_Mukama_Logo.png"
                        alt="Kutya Mukama Logo"
                        width={80}
                        height={80}
                        className="rounded-full shadow-md"
                    />
                    <div className="hidden sm:block">
                        <p className="text-xs font-semibold text-brand-red uppercase tracking-widest">Kutya Mukama</p>
                        <h1 className="text-lg font-bold text-brand-blue leading-tight">
                            Nursery & Primary School
                        </h1>
                    </div>
                </Link>

                {/* Center Navigation Links */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-2 mx-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-brand-blue font-semibold hover:text-brand-red hover:bg-gray-50 rounded-lg transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Enroll Button */}
                    <Link
                        href="/register"
                        className="btn bg-brand-red hover:bg-red-700 text-white font-bold text-base px-6 py-2 rounded-lg shadow-md transition-all hover:shadow-lg active:scale-95"
                    >
                        Enroll Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="btn btn-ghost btn-circle text-brand-blue hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-brand-blue font-semibold hover:text-brand-red hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;