"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Pecuária e Agricultura", href: "/#pecuaria-agricultura" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Split header: verde | escuro ─────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20">
        {/* bloco do logo — verde-pasto sólido */}
        <Link
          href="/"
          className="flex items-center justify-center bg-verde-pasto px-6 lg:px-10 shrink-0 hover:bg-verde-pasto/90 transition-colors"
          style={{ minWidth: "220px" }}
        >
          <Image
            src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
            alt="DH Agropecuária"
            width={160}
            height={64}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* bloco da nav — terra-noite */}
        <div className="flex-1 bg-terra-noite border-b border-verde-pasto/20 flex items-center justify-between px-6 lg:px-12">
          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-cinza-terra hover:text-verde-pasto transition-colors tracking-[0.15em] uppercase font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6 ml-auto">
            <a
              href="https://wa.me/5561999010093"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 border border-verde-pasto text-verde-pasto text-xs font-bold tracking-[0.15em] uppercase hover:bg-verde-pasto hover:text-terra-noite transition-colors"
            >
              (61) 99901-0093
            </a>

            {/* hamburger — sempre visível mobile, visível desktop como extra */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex flex-col gap-1.5 p-2 group"
            >
              <span className="block w-6 h-0.5 bg-verde-pasto group-hover:w-8 transition-all duration-200" />
              <span className="block w-4 h-0.5 bg-verde-pasto group-hover:w-8 transition-all duration-200" />
              <span className="block w-6 h-0.5 bg-verde-pasto group-hover:w-8 transition-all duration-200" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Fullscreen overlay menu ───────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-[100] flex transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-2rem)",
        }}
      >
        {/* painel verde-pasto — logo + nav */}
        <div className="w-full lg:w-1/2 bg-verde-pasto flex flex-col justify-between p-10 lg:p-16">
          <div className="flex items-center justify-between">
            <Image
              src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
              alt="DH Agropecuária"
              width={160}
              height={64}
              className="h-12 w-auto object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="p-2 text-terra-noite hover:text-barro transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Overlay">
            {[...NAV, { label: "Nossa História", href: "/nossa-historia" }].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 py-3 border-b border-terra-noite/15 hover:border-terra-noite/40 transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="font-mono text-xs text-terra-noite/50 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-3xl lg:text-4xl text-terra-noite group-hover:translate-x-2 transition-transform duration-200">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div>
            <p className="text-terra-noite/60 text-xs mb-3 tracking-widest uppercase">Contato direto</p>
            <a
              href="https://wa.me/5561999010093"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xl text-terra-noite hover:text-barro transition-colors"
            >
              (61) 99901-0093
            </a>
          </div>
        </div>

        {/* painel escuro — redes sociais + fechar ao clicar fora */}
        <div
          className="hidden lg:flex flex-1 bg-terra-noite flex-col justify-end p-16 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <p className="text-cinza-terra/40 text-xs mb-6 tracking-widest uppercase">Nossas redes</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Instagram", href: "https://www.instagram.com/grupodhagropecuaria/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/grupo-dh-agropecuaria/" },
              { label: "YouTube", href: "https://www.youtube.com/@grupodhagropecuaria" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-cinza-terra hover:text-verde-pasto transition-colors text-lg font-medium"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
