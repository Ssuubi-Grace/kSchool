'use client';

import Link from 'next/link';

const ContactBar = () => {
  return (
    <div className="bg-brand-blue text-white py-3 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+256700000000" className="hover:text-yellow-300 transition">+256 700 000 000</a>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:info@kutyamukama.org" className="hover:text-yellow-300 transition">info@kutyamukama.org</a>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300 transition">Facebook</a>
          <a href="#" className="hover:text-yellow-300 transition">Twitter</a>
          <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
