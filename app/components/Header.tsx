"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Início",              href: "/#inicio" },
  { label: "Quem Somos",         href: "/#quem-somos" },
  { label: "Pecuária",           href: "/#pecuaria-agricultura" },
  { label: "Blog",               href: "/blog" },
  { label: "Trabalhe Conosco",   href: "/vagas" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/grupodhagropecuaria/" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/grupo-dh-agropecuaria/" },
  { label: "YouTube",   href: "https://www.youtube.com/@grupodhagropecuaria" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── barra principal ──────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(14,12,9,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,138,92,0.15)" : "none",
        }}
      >
        {/* listra dourada de 3px no topo */}
        <div className="h-[3px] bg-dourado-selo w-full" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-[72px]">

          {/* logo — tamanho generoso */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
              alt="DH Agropecuária"
              width={180}
              height={72}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* nav desktop */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold tracking-[0.18em] uppercase text-marfim/70 hover:text-dourado-selo transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5561999010093"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.18em] uppercase hover:bg-dourado-selo/85 transition-colors"
            >
              Fale Conosco
            </a>

            {/* hamburger — só mobile */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 group"
            >
              <span className="block h-[1.5px] w-6 bg-marfim transition-all group-hover:bg-dourado-selo" />
              <span className="block h-[1.5px] w-4 bg-marfim transition-all group-hover:w-6 group-hover:bg-dourado-selo" />
              <span className="block h-[1.5px] w-6 bg-marfim transition-all group-hover:bg-dourado-selo" />
            </button>
          </div>
        </div>
      </header>

      {/* ── overlay fullscreen ───────────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-[100] grid lg:grid-cols-2 transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-1.5rem)",
        }}
        aria-hidden={!open}
      >
        {/* painel esquerdo escuro — nav grande */}
        <div className="bg-terra-noite flex flex-col justify-between p-10 lg:p-16 overflow-y-auto">
          {/* topo */}
          <div className="flex items-center justify-between mb-16">
            <Image
              src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
              alt="DH Agropecuária" width={160} height={64}
              className="h-11 w-auto object-contain"
            />
            <button onClick={() => setOpen(false)} aria-label="Fechar"
              className="text-cinza-terra hover:text-marfim transition-colors p-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* links grandes */}
          <nav className="flex flex-col gap-1 flex-1 justify-center">
            {[...NAV, { label: "Nossa História", href: "/nossa-historia" }, { label: "Trabalhe Conosco", href: "/vagas" }, { label: "Canal de Denúncia", href: "/canal-de-denuncia" }].map((item, i) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 py-4 border-b border-dourado-selo/10 hover:border-dourado-selo/30 transition-colors">
                <span className="font-mono text-[10px] text-cinza-terra/40 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-4xl lg:text-5xl text-marfim group-hover:text-dourado-selo transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* WhatsApp no rodapé do painel */}
          <div className="mt-12">
            <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.18em] uppercase hover:bg-dourado-selo/85 transition-colors">
              Falar no WhatsApp
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        {/* painel direito barro — redes + fechar ao clicar fora */}
        <div
          className="hidden lg:flex bg-barro flex-col justify-end p-16 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <p className="text-xs font-black tracking-[0.2em] uppercase text-cinza-terra/40 mb-6">Nossas redes</p>
          <div className="flex flex-col gap-4">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-cinza-terra hover:text-dourado-selo transition-colors text-xl font-medium">
                {s.label} ↗
              </a>
            ))}
          </div>
          <p className="mt-16 text-xs text-cinza-terra/30">
            Clique fora para fechar
          </p>
        </div>
      </div>
    </>
  );
}
