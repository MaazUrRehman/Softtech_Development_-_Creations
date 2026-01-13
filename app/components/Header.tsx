'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/About', name: 'About' },
    { path: '/Portfolio', name: 'Portfolio' },
    { path: '/Services', name: 'Services' },
    { path: '/Contact', name: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-red-200/30 dark:border-red-900/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 overflow-x-hidden">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/20 dark:group-hover:shadow-red-600/30 transition-all duration-300">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <div>
                <div className="text-xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
                  Softtech
                </div>
                <div className="text-xs text-red-700 dark:text-red-400 uppercase group-hover:text-red-800 dark:group-hover:text-red-300 transition-colors duration-300">
                  Development & Creations
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-8">
              {links.map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative uppercase text-sm tracking-wider transition-all duration-300 group/nav-link ${
                    pathname === link.path
                      ? 'text-red-600 dark:text-red-500'
                      : 'text-black dark:text-gray-100'
                  } hover:text-red-700 dark:hover:text-red-400 focus:text-red-700 dark:focus:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:rounded-md px-2 py-1`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                      pathname === link.path
                        ? 'scale-x-100 bg-red-600 dark:bg-red-500'
                        : 'scale-x-0 group-hover/nav-link:scale-x-100 bg-red-700 dark:bg-red-400'
                    } w-full`}
                  />
                  <span className="absolute inset-0 rounded-md opacity-0 group-hover/nav-link:opacity-100 group-focus/nav-link:opacity-100 bg-red-100 dark:bg-red-900/30 transition-opacity duration-300 -z-10" />
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center gap-1 z-[100] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:rounded-md"
              aria-label="Toggle mobile menu"
            >
              <span className={`h-0.5 bg-black dark:bg-gray-100 transition-all duration-300 ${isMobileMenuOpen && 'rotate-45 translate-y-1.5 bg-red-600 dark:bg-red-500'}`} />
              <span className={`h-0.5 bg-black dark:bg-gray-100 transition-all duration-300 ${isMobileMenuOpen && 'opacity-0'}`} />
              <span className={`h-0.5 bg-black dark:bg-gray-100 transition-all duration-300 ${isMobileMenuOpen && '-rotate-45 -translate-y-1.5 bg-red-600 dark:bg-red-500'}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-black transform transition-transform duration-300 border-l border-red-200/30 dark:border-red-900/30 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="pt-24 px-6 space-y-1">
              {links.map((link, index) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block uppercase tracking-wider text-lg px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
                    pathname === link.path
                      ? 'bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 font-semibold border-l-4 border-red-600 dark:border-red-500'
                      : 'text-black dark:text-gray-100 hover:bg-red-50/50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400 hover:translate-x-1'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}