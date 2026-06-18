import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

// ── Topographic SVG divider ──────────────────────────────────────────────────
function TopoDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} aria-hidden>
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 opacity-20">
        <path d="M0 30 Q150 10 300 30 T600 30 T900 30 T1200 30" stroke="#7c8a5c" strokeWidth="0.8" />
        <path d="M0 38 Q150 18 300 38 T600 38 T900 38 T1200 38" stroke="#7c8a5c" strokeWidth="0.6" />
        <path d="M0 46 Q150 26 300 46 T600 46 T900 46 T1200 46" stroke="#7c8a5c" strokeWidth="0.5" />
        <path d="M0 22 Q150 2 300 22 T600 22 T900 22 T1200 22" stroke="#7c8a5c" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

// ── Pillar icons (hosted on dhagropecuaria.com) ──────────────────────────────
const PILLARS = [
  {
    icon: `${BASE}/quality.png`,
    title: "Certificação de Excelência Angus",
    desc: "Trabalhamos com protocolos rigorosos que asseguram a qualidade do nosso rebanho Angus, reconhecido nacionalmente.",
  },
  {
    icon: `${BASE}/planting.png`,
    title: "Sistema Integrado Completo",
    desc: "Integração lavoura-pecuária que garante eficiência, sustentabilidade e equilíbrio no uso da terra.",
  },
  {
    icon: `${BASE}/cow.png`,
    title: "Genética Certificada (CEIP)",
    desc: "Seleção criteriosa de reprodutores e sêmen, priorizando desempenho, fertilidade e qualidade de carcaça.",
  },
  {
    icon: `${BASE}/monitor-1.png`,
    title: "Gestão por Dados",
    desc: "Processos monitorados com métricas, indicadores e tomada de decisão baseada em informação.",
  },
  {
    icon: `${BASE}/validation.png`,
    title: "Sustentabilidade e Bem-estar Animal",
    desc: "Carregamos o Selo Angus de Sustentabilidade, reconhecimento que reforça nosso compromisso com práticas produtivas.",
  },
  {
    icon: `${BASE}/badge-1.png`,
    title: "Rastreabilidade e Consistência",
    desc: "Do nascimento ao abate, cada etapa segue padrões que asseguram segurança alimentar e previsibilidade nos resultados.",
  },
];

// ── "Da fazenda" highlights — distinct icons per item ───────────────────────
const HIGHLIGHTS = [
  {
    label: "Animais criados com padrão técnico",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "Manejo responsável",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "Genética selecionada",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 2l4 4m0 0c1-3 5-3 6 0s5 3 6 0" />
        <path d="M6 6c-1 3-5 3-6 0" />
        <path d="M18 22l-4-4m0 0c-1 3-5 3-6 0s-5-3-6 0" />
        <path d="M14 18c1-3 5-3 6 0" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    label: "Nutrição equilibrada",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Rastreabilidade",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    label: "Padronização de carcaças",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

// ── Gallery — 16 real photos ─────────────────────────────────────────────────
const GALLERY = [
  { src: "https://dhagropecuaria.com/wp-content/uploads/2026/05/IMG_6950.JPG.jpeg", alt: "Campo DH Agropecuária" },
  { src: `${BASE}/WhatsApp-Image-2025-12-03-at-10.02.37.jpeg`, alt: "Rotina da fazenda" },
  { src: `${BASE}/WhatsApp-Image-2025-12-03-at-09.58.17.jpeg`, alt: "Trabalho no campo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`, alt: "Rebanho Angus" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-1.jpeg`, alt: "Manejo dos animais" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.17.jpeg`, alt: "Fazenda DH" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.17-5.jpeg`, alt: "Cuidado com o rebanho" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.17.jpeg`, alt: "Operação fazenda" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.18.jpeg`, alt: "Dia a dia no campo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.14-1.jpeg`, alt: "Ciclo produtivo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.14-2.jpeg`, alt: "Pecuária de corte" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.12.jpeg`, alt: "Animais no pasto" },
  { src: `${BASE}/Sem-titulo-174-scaled.jpg`, alt: "DH Agropecuária" },
  { src: `${BASE}/21062022-C0003T01.jpg`, alt: "Campo aberto" },
  { src: `${BASE}/RSR3143.jpg`, alt: "Produção DH" },
  { src: `${BASE}/22062022-DJI_0027-scaled.jpg`, alt: "Vista aérea da fazenda" },
];

// ── Social icon components (reused in footer) ────────────────────────────────
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="inicio">
          <HeroCarousel />
        </section>

        {/* ── Quem Somos ───────────────────────────────────────────────────── */}
        <section id="quem-somos" className="bg-barro">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="w-8 h-px bg-verde-pasto mb-8" />
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-marfim leading-tight mb-6">
                  Com raízes no campo e visão voltada ao amanhã
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-8">
                  O Grupo DH Agropecuária é a combinação de tradição, técnica e responsabilidade. Atuamos com pecuária de corte Angus e Nelore, agricultura de soja e milho e genética bovina, sempre guiados por um modelo integrado e sustentável. Nosso compromisso é produzir com excelência, respeitar a terra e garantir que cada etapa da nossa cadeia reforce a qualidade que chega até a mesa dos consumidores.
                </p>
                <Link
                  href="/nossa-historia"
                  className="inline-block px-8 py-3 bg-verde-pasto text-terra-noite text-sm font-medium tracking-wide hover:bg-verde-pasto/85 transition-colors"
                >
                  Nossa História →
                </Link>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
                <Image
                  src="https://dhagropecuaria.com/wp-content/uploads/2026/05/IMG_6950.JPG.jpeg"
                  alt="Campo do Grupo DH Agropecuária"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-verde-pasto/20" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Pilares do Grupo DH ──────────────────────────────────────────── */}
        <section className="bg-terra-noite">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center mb-16">
              <div className="w-8 h-px bg-verde-pasto mx-auto mb-6" />
              <h2 className="font-heading text-3xl sm:text-4xl text-marfim">
                Pilares do Grupo DH
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-verde-pasto/10">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-terra-noite p-8 group hover:bg-barro transition-colors"
                >
                  <div className="w-12 h-12 mb-6 relative">
                    <Image
                      src={pillar.icon}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <h3 className="font-heading text-lg text-marfim mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-cinza-terra text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Da fazenda à experiência gastronômica ────────────────────────── */}
        <section className="bg-barro overflow-hidden">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-2xl mb-12">
              <div className="w-8 h-px mb-6" style={{ backgroundColor: "#b6904a" }} />
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4" style={{ color: "#f4efe6" }}>
                Da nossa fazenda para a experiência gastronômica de alto padrão
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "#a8a092" }}>
                Os animais Angus das fazendas do Grupo DH abastecem a Dhuboi, marca de cortes premium Angus certificados. Esse vínculo garante uma cadeia totalmente integrada.
              </p>
              <a
                href="https://wa.me/5561999010093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-sm font-medium tracking-wide transition-colors"
                style={{ backgroundColor: "#b6904a", color: "#0e0c09" }}
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 my-16">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col items-center text-center gap-3 p-4 border border-dourado-selo/20 hover:border-dourado-selo/50 transition-colors"
                >
                  <span className="text-dourado-selo">{h.icon}</span>
                  <span className="text-xs text-cinza-terra leading-tight">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-dourado-selo/40 pl-8 max-w-3xl">
              <p className="text-cinza-terra leading-relaxed mb-6">
                É essa consistência que permite à Dhuboi oferecer cortes reconhecidos por chefs. Restaurantes e apreciadores de alta gastronomia, além de abastecer a Boutique Dhuboi, em Formosa-GO, com produtos que representam exclusividade e sabor.
              </p>
              <a
                href="https://www.dhuboi.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border text-sm tracking-widest uppercase transition-colors hover:bg-dourado-selo/10"
                style={{ borderColor: "#b6904a", color: "#f4efe6" }}
              >
                Conheça a Dhuboi
              </a>
            </div>
          </div>
        </section>

        {/* ── Pecuária e Agricultura ───────────────────────────────────────── */}
        <section id="pecuaria-agricultura" className="bg-terra-noite">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="w-8 h-px bg-verde-pasto mb-6" />
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-marfim leading-tight mb-4">
                  Produtividade com responsabilidade
                </h2>
                <p className="text-cinza-terra leading-relaxed">
                  Nosso modelo de pecuária de ciclo completo é integrado à produção de grãos. A soja e o milho cultivados nas fazendas sustentam o sistema, reforçam a sustentabilidade e aumentam a eficiência produtiva. Do campo ao confinamento, cada etapa é conduzida com cuidado e planejamento, garantindo qualidade e previsibilidade.
                </p>
              </div>
              <a
                href="https://wa.me/5561999010093"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-block px-8 py-3 border border-verde-pasto text-marfim text-sm tracking-widest uppercase hover:bg-verde-pasto/20 transition-colors"
              >
                Veja como produzimos
              </a>
            </div>

            {/* Photo grid for pecuária section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {GALLERY.slice(12, 16).map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-terra-noite/20 group-hover:bg-terra-noite/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nosso dia a dia no campo (Galeria) ──────────────────────────── */}
        <section className="bg-barro">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center mb-16">
              <div className="w-8 h-px bg-verde-pasto mx-auto mb-6" />
              <h2 className="font-heading text-3xl sm:text-4xl text-marfim mb-4">
                O campo move a nossa história
              </h2>
              <p className="text-cinza-terra max-w-xl mx-auto">
                Imagens reais do nosso trabalho diário, mostrando o ritmo da fazenda, os cuidados com os animais e o ciclo produtivo que sustenta todo o Grupo.
              </p>
            </div>

            {/* CSS masonry via columns */}
            <div
              style={{
                columns: "2",
                columnGap: "0.75rem",
              }}
              className="sm:[column-count:3] lg:[column-count:4]"
            >
              {GALLERY.map((img) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden mb-3 group"
                  style={{ breakInside: "avoid" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-terra-noite/0 group-hover:bg-terra-noite/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fale Conosco ─────────────────────────────────────────────────── */}
        <section className="bg-terra-noite">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
            <div className="w-8 h-px bg-verde-pasto mx-auto mb-8" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-marfim mb-4">
              Ficou com dúvidas?
            </h2>
            <p className="text-cinza-terra mb-10 max-w-lg mx-auto">
              Entre em contato com nossa equipe. Estamos prontos para responder suas perguntas.
            </p>
            <a
              href="https://wa.me/5561999010093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-verde-pasto text-terra-noite text-sm font-medium tracking-wide hover:bg-verde-pasto/85 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-barro border-t border-verde-pasto/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo + about */}
            <div className="lg:col-span-2">
              <Image
                src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
                alt="DH Agropecuária"
                width={200}
                height={80}
                className="h-14 w-auto object-contain mb-4"
              />
              <p className="text-cinza-terra text-sm leading-relaxed max-w-xs">
                Pecuária de corte Angus e Nelore, agricultura de soja e milho e genética bovina certificada.
              </p>
            </div>

            {/* Nav */}
            <nav aria-label="Rodapé">
              <p className="text-xs text-verde-pasto tracking-widest uppercase mb-4">Navegação</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Quem Somos", href: "#quem-somos" },
                  { label: "Pecuária e Agricultura", href: "#pecuaria-agricultura" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-cinza-terra text-sm hover:text-marfim transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Redes */}
            <div>
              <p className="text-xs text-verde-pasto tracking-widest uppercase mb-4">Nossas Redes</p>
              <div className="flex flex-col gap-3">
                <a href="https://www.instagram.com/grupodhagropecuaria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-marfim transition-colors">
                  <IconInstagram /> Instagram
                </a>
                <a href="https://www.linkedin.com/company/grupo-dh-agropecuaria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-marfim transition-colors">
                  <IconLinkedIn /> LinkedIn
                </a>
                <a href="https://www.youtube.com/@grupodhagropecuaria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-marfim transition-colors">
                  <IconYouTube /> YouTube
                </a>
                <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-marfim transition-colors">
                  <IconWhatsApp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Certificações — usando dourado-selo com destaque */}
          <div className="border-t border-verde-pasto/15 pt-12">
            <p className="text-xs tracking-widest uppercase mb-6 text-center" style={{ color: "#b6904a" }}>
              Certificações
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex flex-col items-center gap-3">
                <div
                  className="relative w-24 h-24 p-2 border"
                  style={{ borderColor: "rgba(182,144,74,0.35)", backgroundColor: "rgba(182,144,74,0.05)" }}
                >
                  <Image
                    src="https://dhagropecuaria.com/wp-content/uploads/2026/01/2897A_MARCA-ANGUS-GOLD-alt01-AF-01-e1768959271147.png"
                    alt="Selo Angus Gold"
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <span className="text-xs" style={{ color: "#b6904a" }}>Angus Gold</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div
                  className="relative w-24 h-24 p-2 border"
                  style={{ borderColor: "rgba(182,144,74,0.35)", backgroundColor: "rgba(182,144,74,0.05)" }}
                >
                  <Image
                    src="https://dhagropecuaria.com/wp-content/uploads/2026/01/logo-sustentabilidade.png"
                    alt="Selo Sustentabilidade Angus"
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <span className="text-xs" style={{ color: "#b6904a" }}>Sustentabilidade</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-verde-pasto/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cinza-terra/60">
              © {new Date().getFullYear()} Grupo DH Agropecuária. Todos os direitos reservados.
            </p>
            <a
              href="https://www.dhuboi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cinza-terra/60 hover:text-cinza-terra transition-colors"
            >
              Conheça a Dhuboi →
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
