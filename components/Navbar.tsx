import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface NavbarProps {
  navigateTo: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('home');
          }}
          className="text-2xl font-black text-light-text hover:text-accent transition-colors"
        >
          DIGIDHEERAJ
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home');
              }}
              className="text-light-text font-semibold uppercase tracking-wider hover:text-accent transition-colors duration-300"
            >
              Home
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-light-text font-semibold uppercase tracking-wider hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('blog');
              }}
              className="text-light-text font-semibold uppercase tracking-wider hover:text-accent transition-colors duration-300"
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-accent rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary text-center py-4 space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
              setMenuOpen(false);
            }}
            className="block text-light-text uppercase font-semibold hover:text-accent transition-colors duration-300"
          >
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-light-text uppercase font-semibold hover:text-accent transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('blog');
              setMenuOpen(false);
            }}
            className="block text-light-text uppercase font-semibold hover:text-accent transition-colors duration-300"
          >
            Blog
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
