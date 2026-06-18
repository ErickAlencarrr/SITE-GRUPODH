"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Pecuária e Agricultura", href: "#pecuaria-agricultura" },
  { label: "Blog", href: "/blog" },
];

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-terra-noite/95 backdrop-blur-md border-b border-verde-pasto/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
              alt="DH Agropecuária"
              width={200}
              height={80}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cinza-terra hover:text-marfim transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://www.instagram.com/grupodhagropecuaria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cinza-terra hover:text-marfim transition-colors"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/grupo-dh-agropecuaria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cinza-terra hover:text-marfim transition-colors"
            >
              <IconLinkedIn />
            </a>
            <a
              href="https://www.youtube.com/@grupodhagropecuaria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-cinza-terra hover:text-marfim transition-colors"
            >
              <IconYouTube />
            </a>
            <a
              href="https://wa.me/5561999010093"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-medium text-terra-noite bg-verde-pasto hover:bg-verde-pasto/85 transition-colors"
            >
              Fale Conosco →
            </a>
          </div>

          <button
            className="lg:hidden text-marfim p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-barro border-t border-verde-pasto/20 py-6">
            <nav className="flex flex-col gap-5 px-2" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cinza-terra hover:text-marfim transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-5 pt-2 border-t border-verde-pasto/20">
                <a href="https://www.instagram.com/grupodhagropecuaria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cinza-terra hover:text-marfim transition-colors"><IconInstagram /></a>
                <a href="https://www.linkedin.com/company/grupo-dh-agropecuaria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-cinza-terra hover:text-marfim transition-colors"><IconLinkedIn /></a>
                <a href="https://www.youtube.com/@grupodhagropecuaria" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cinza-terra hover:text-marfim transition-colors"><IconYouTube /></a>
              </div>
              <a
                href="https://wa.me/5561999010093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-5 py-2 text-sm font-medium text-terra-noite bg-verde-pasto"
                onClick={() => setMenuOpen(false)}
              >
                Fale Conosco →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
