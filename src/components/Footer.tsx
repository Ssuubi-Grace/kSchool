'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-brand-blue text-white">
            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue/80 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                            <p className="text-white/90 text-lg">
                                Subscribe to our newsletter for school news, events, and educational tips delivered to your inbox.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-6 py-3 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Subscribe Now
                            </button>
                            {subscribed && (
                                <p className="text-green-300 text-sm font-semibold">✓ Thank you for subscribing!</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-16 px-4 md:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* About Section */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-brand-yellow">About KMPS</h4>
                            <p className="text-white/80 text-sm leading-relaxed mb-4">
                                Kutya Mukama Nursery & Primary School is committed to providing quality education and nurturing young minds for over 25 years.
                            </p>
                            <p className="text-white/60 text-xs">Excellence | Care | Growth</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-brand-yellow">Quick Links</h4>
                            <ul className="space-y-3">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About Us' },
                                    { href: '/curriculum', label: 'Programs' },
                                    { href: '/facilities', label: 'Facilities' },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/80 hover:text-brand-yellow transition-colors duration-300 font-medium"
                                        >
                                            → {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-brand-yellow">Services</h4>
                            <ul className="space-y-3">
                                {[
                                    { href: '/curriculum', label: 'Educational Programs' },
                                    { href: '/facilities', label: 'World-Class Facilities' },
                                    { href: '/events', label: 'Events & Activities' },
                                    { href: '/register', label: 'Apply for Admission' },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/80 hover:text-brand-yellow transition-colors duration-300 font-medium"
                                        >
                                            → {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-brand-yellow">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-brand-red text-lg flex-shrink-0">📍</span>
                                    <span className="text-white/80 text-sm">Gitta Nabutaka Village, Kampala, Uganda</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-red text-lg flex-shrink-0">📞</span>
                                    <a
                                        href="tel:+256700000000"
                                        className="text-white/80 hover:text-brand-yellow transition-colors font-medium"
                                    >
                                        +256 700 000 000
                                    </a>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-brand-red text-lg flex-shrink-0">📧</span>
                                    <a
                                        href="mailto:info@kutyamukama.org"
                                        className="text-white/80 hover:text-brand-yellow transition-colors font-medium break-all"
                                    >
                                        info@kutyamukama.org
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social & Back to Top */}
                    <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <span className="text-white/60 font-semibold">Follow Us:</span>
                            <div className="flex gap-4">
                                {[
                                    { icon: '📘', label: 'Facebook', href: '#' },
                                    { icon: '𝕏', label: 'Twitter', href: '#' },
                                    { icon: '📷', label: 'Instagram', href: '#' },
                                    { icon: '▶️', label: 'YouTube', href: '#' },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110 text-white font-bold"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-brand-red hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                        >
                            ↑ Back to Top
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black/20 border-t border-white/10 py-6 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-white/70 text-sm font-medium">
                        &copy; {new Date().getFullYear()} Kutya Mukama Nursery & Primary School. All rights reserved.
                    </p>
                    <p className="text-white/50 text-xs mt-2">
                        Website designed for excellence | Empowering young minds across Uganda
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;