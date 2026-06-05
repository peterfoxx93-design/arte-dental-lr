'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Arte Dental"
              className="h-10 w-auto"
            />
            <span className="text-lg md:text-xl font-bold text-gray-900">
              Arte Dental <span className="text-accent-500">LR</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://instagram.com/artedental_lr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              IG
            </a>
            <a href="#citas" className="btn-primary text-sm">
              <Phone className="w-4 h-4 mr-2" />
              Agenda tu cita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary-500"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-up">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-600 hover:text-primary-500 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#citas"
              onClick={() => setOpen(false)}
              className="btn-primary w-full text-center mt-4"
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              Agenda tu cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
