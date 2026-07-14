"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

const slides = [
  {
    image: `${BASE}/22062022-DJI_0027-scaled.jpg`,
    tag: "PECUÁRIA DE CORTE",
    heading: "Somos a origem.",
    sub: "Os animais Angus que abastecem a Dhuboi nascem e crescem nas nossas fazendas.",
    cta: { label: "Conheça a Dhuboi", href: "https://www.dhuboi.com.br/", external: true },
  },
  {
    image: `${BASE}/RSR3143.jpg`,
    tag: "TRADIÇÃO & INOVAÇÃO",
    heading: "Excelência é nossa tradição.",
    sub: "Herança familiar transformada em modelo produtivo moderno, sustentável e de alta performance.",
    cta: { label: "Nossa História", href: "/nossa-historia", external: false },
  },
  {
    image: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`,
    tag: "ACOMPANHE",
    heading: "Fique por dentro.",
    sub: "Novidades, bastidores e o dia a dia real do campo no nosso Instagram.",
    cta: { label: "Ver Instagram", href: "https://www.instagram.com/grupodhagropecuaria/", external: true },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative h-screen min-h-[680px] overflow-hidden">
      {/* backgrounds */}
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}>
          <Image src={s.image} alt="" fill priority={i === 0}
            className="object-cover" sizes="100vw" />
        </div>
      ))}

      {/* gradient — pesado no bottom para texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-terra-noite via-terra-noite/40 to-transparent" />
      {/* gradiente lateral esquerdo */}
      <div className="absolute inset-0 bg-gradient-to-r from-terra-noite/70 to-transparent" />

      {/* conteúdo — alinhado ao bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.2em] uppercase px-3 py-1.5 mb-6">
            {slide.tag}
          </span>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-marfim leading-none mb-6 tracking-tight">
            {slide.heading}
          </h1>

          <p className="text-cinza-terra text-base sm:text-xl max-w-lg mb-10 leading-relaxed">
            {slide.sub}
          </p>

          {slide.cta.external ? (
            <a href={slide.cta.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-dourado-selo text-terra-noite px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/85 transition-colors">
              {slide.cta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ) : (
            <a href={slide.cta.href}
              className="inline-flex items-center gap-3 bg-dourado-selo text-terra-noite px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/85 transition-colors">
              {slide.cta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-8 right-6 sm:right-12 lg:right-20 flex flex-col items-end gap-3 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 block"
            style={{
              height: i === current ? "2.5rem" : "0.375rem",
              width: "2px",
              backgroundColor: i === current ? "#D4AF37" : "rgba(244,239,230,0.3)",
            }} />
        ))}
        <span className="font-mono text-xs text-cinza-terra/50 mt-2">
          {String(current + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
