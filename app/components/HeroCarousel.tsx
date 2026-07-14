"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

const slides = [
  {
    image: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`,
    tag: "PECUÁRIA DE CORTE",
    heading: "Somos a origem dos animais Angus que abastecem a Dhuboi.",
    text: "Marca responsável por levar cortes premium certificados para restaurantes, chefs e apaixonados por gastronomia.",
    cta: { label: "Conheça a Dhuboi", href: "https://www.dhuboi.com.br/", external: true },
  },
  {
    image: `${BASE}/RSR3143.jpg`,
    tag: "ACOMPANHE",
    heading: "Fique por dentro dos últimos conteúdos e novidades.",
    text: "Siga o Grupo DH no Instagram e veja o dia a dia do campo.",
    cta: { label: "Ver Instagram", href: "https://www.instagram.com/grupodhagropecuaria/", external: true },
  },
  {
    image: `${BASE}/22062022-DJI_0027-scaled.jpg`,
    tag: "TRADIÇÃO & INOVAÇÃO",
    heading: "Produzir com excelência é nossa tradição.",
    text: "O Grupo DH Agropecuária transforma herança familiar em modelo produtivo moderno, sustentável e de alta performance.",
    cta: { label: "Sobre nós", href: "#quem-somos", external: false },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }} aria-hidden={i !== current}>
          <Image src={slide.image} alt="" fill priority={i === 0}
            className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-terra-noite/85 via-terra-noite/50 to-terra-noite/20" />
        </div>
      ))}

      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20 transition-all duration-700"
          style={{ opacity: i === current ? 1 : 0, transform: i === current ? "translateY(0)" : "translateY(1.5rem)", pointerEvents: i === current ? "auto" : "none" }}
          aria-hidden={i !== current}>
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-verde-pasto text-terra-noite text-xs font-bold tracking-widest mb-6">
              {slide.tag}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight mb-5">
              {slide.heading}
            </h1>
            <p className="text-cinza-terra text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              {slide.text}
            </p>
            {slide.cta.external ? (
              <a href={slide.cta.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-verde-pasto text-terra-noite text-sm font-bold tracking-widest uppercase hover:bg-verde-pasto/85 transition-colors">
                {slide.cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ) : (
              <a href={slide.cta.href}
                className="inline-flex items-center gap-3 px-8 py-4 bg-verde-pasto text-terra-noite text-sm font-bold tracking-widest uppercase hover:bg-verde-pasto/85 transition-colors">
                {slide.cta.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}

      {/* slide counter + dots */}
      <div className="absolute bottom-8 left-6 sm:left-12 lg:left-20 flex items-center gap-4 z-10">
        <span className="font-mono text-xs text-cinza-terra/70">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300"
              style={{ height: "3px", width: i === current ? "2rem" : "0.75rem", backgroundColor: i === current ? "#7c8a5c" : "rgba(244,239,230,0.35)" }} />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 right-6 sm:right-12 lg:right-20 z-10 flex flex-col items-center gap-2">
        <span className="text-cinza-terra/50 text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>scroll</span>
        <div className="w-px h-12 bg-verde-pasto/40" />
      </div>
    </div>
  );
}
