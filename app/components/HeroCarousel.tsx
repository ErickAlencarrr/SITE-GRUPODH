"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

const slides = [
  {
    image: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`,
    heading: "Somos a origem dos animais Angus que abastecem a Dhuboi.",
    text: "Marca responsável por levar cortes premium certificados para restaurantes, chefs e apaixonados por gastronomia.",
    cta: { label: "Conheça a Dhuboi", href: "https://www.dhuboi.com.br/", external: true },
  },
  {
    image: `${BASE}/RSR3143.jpg`,
    heading: "Fique por dentro.",
    text: "Dos últimos conteúdos e novidades no nosso Instagram.",
    cta: { label: "Ver Instagram", href: "https://www.instagram.com/grupodhagropecuaria/", external: true },
  },
  {
    image: `${BASE}/22062022-DJI_0027-scaled.jpg`,
    heading: "Produzir com excelência é nossa tradição.",
    text: "O Grupo DH Agropecuária transforma herança familiar em um modelo produtivo moderno, sustentável e de alta performance em pecuária de corte, agricultura e genética bovina certificada.",
    cta: { label: "Sobre nós", href: "#quem-somos", external: false },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-terra-noite/50 via-terra-noite/20 to-terra-noite/85" />
        </div>
      ))}

      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 lg:px-16 pb-28 transition-all duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "translateY(0)" : "translateY(1rem)",
            pointerEvents: i === current ? "auto" : "none",
          }}
          aria-hidden={i !== current}
        >
          <div className="max-w-3xl">
            <div className="w-8 h-px bg-verde-pasto mb-6" />
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-marfim leading-tight mb-4">
              {slide.heading}
            </h1>
            <p className="text-cinza-terra text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              {slide.text}
            </p>
            {slide.cta.external ? (
              <a
                href={slide.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-verde-pasto text-marfim text-sm tracking-widest uppercase hover:bg-verde-pasto/20 transition-colors"
              >
                {slide.cta.label}
              </a>
            ) : (
              <a
                href={slide.cta.href}
                className="inline-block px-8 py-3 border border-verde-pasto text-marfim text-sm tracking-widest uppercase hover:bg-verde-pasto/20 transition-colors"
              >
                {slide.cta.label}
              </a>
            )}
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "2rem" : "0.375rem",
              height: "0.375rem",
              borderRadius: "9999px",
              backgroundColor: i === current ? "#7c8a5c" : "rgba(244,239,230,0.35)",
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 font-mono text-xs text-cinza-terra/60 flex items-center gap-2">
        <span className="w-8 h-px bg-cinza-terra/40" />
        <span>
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
