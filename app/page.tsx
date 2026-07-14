import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

// ── shared icon components ───────────────────────────────────────────────────
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

// ── pilares ──────────────────────────────────────────────────────────────────
const PILLARS = [
  { n: "01", icon: `${BASE}/quality.png`, title: "Certificação de Excelência Angus", desc: "Protocolos rigorosos que asseguram a qualidade do nosso rebanho Angus, reconhecido nacionalmente." },
  { n: "02", icon: `${BASE}/planting.png`, title: "Sistema Integrado Completo", desc: "Integração lavoura-pecuária que garante eficiência, sustentabilidade e equilíbrio no uso da terra." },
  { n: "03", icon: `${BASE}/cow.png`, title: "Genética Certificada (CEIP)", desc: "Seleção criteriosa de reprodutores e sêmen, priorizando desempenho, fertilidade e qualidade de carcaça." },
  { n: "04", icon: `${BASE}/monitor-1.png`, title: "Gestão por Dados", desc: "Processos monitorados com métricas, indicadores e tomada de decisão baseada em informação." },
  { n: "05", icon: `${BASE}/validation.png`, title: "Sustentabilidade e Bem-estar Animal", desc: "Carregamos o Selo Angus de Sustentabilidade, reconhecimento do nosso compromisso com práticas produtivas." },
  { n: "06", icon: `${BASE}/badge-1.png`, title: "Rastreabilidade e Consistência", desc: "Do nascimento ao abate, cada etapa segue padrões que asseguram segurança alimentar e previsibilidade." },
];

// ── gallery ──────────────────────────────────────────────────────────────────
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

// ── section label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-block px-3 py-1 bg-verde-pasto/15 text-verde-pasto text-xs font-bold tracking-widest uppercase border-l-2 border-verde-pasto">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-[6.25rem]">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section id="inicio" className="-mt-[6.25rem]">
          <HeroCarousel />
        </section>

        {/* ── Stats strip — FUNDO CLARO, ruptura total com Dhuboi ─────────── */}
        <section className="bg-marfim">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-terra-noite/10">
              {[
                { value: "+10", label: "Anos de história" },
                { value: "5.000", label: "Cabeças confinadas/ano" },
                { value: "3", label: "Operações integradas" },
                { value: "100%", label: "Rastreabilidade" },
              ].map((s) => (
                <div key={s.label} className="px-6 lg:px-10 py-10 text-center">
                  <p className="font-mono text-3xl lg:text-4xl font-bold text-verde-pasto mb-1">{s.value}</p>
                  <p className="text-terra-noite/60 text-xs uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quem Somos ─────────────────────────────────────────────────── */}
        <section id="quem-somos" className="bg-terra-noite">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* foto ocupa coluna inteira */}
              <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
                <Image
                  src="https://dhagropecuaria.com/wp-content/uploads/2026/05/IMG_6950.JPG.jpeg"
                  alt="Campo do Grupo DH Agropecuária"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* verde overlay strip na direita da foto */}
                <div className="absolute inset-y-0 right-0 w-1 bg-verde-pasto" />
              </div>

              {/* conteúdo */}
              <div className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
                <SectionLabel>Quem Somos</SectionLabel>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-marfim leading-tight mb-6">
                  Com raízes no campo e visão voltada ao amanhã
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-4">
                  O Grupo DH Agropecuária é a combinação de tradição, técnica e responsabilidade. Atuamos com pecuária de corte Angus e Nelore, agricultura de soja e milho e genética bovina, sempre guiados por um modelo integrado e sustentável.
                </p>
                <p className="text-cinza-terra leading-relaxed mb-10">
                  Nosso compromisso é produzir com excelência, respeitar a terra e garantir que cada etapa da nossa cadeia reforce a qualidade que chega até a mesa dos consumidores.
                </p>
                <Link
                  href="/nossa-historia"
                  className="inline-flex items-center gap-3 self-start px-8 py-4 bg-verde-pasto text-terra-noite text-sm font-bold tracking-widest uppercase hover:bg-verde-pasto/85 transition-colors"
                >
                  Nossa História
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pilares — lista numerada, não grid ─────────────────────────── */}
        <section className="bg-barro">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <SectionLabel>Nossos Pilares</SectionLabel>
                <h2 className="font-heading text-3xl sm:text-4xl text-marfim">
                  O que nos move<br />e nos diferencia
                </h2>
              </div>
              <p className="text-cinza-terra max-w-sm lg:text-right text-sm leading-relaxed">
                Seis compromissos que sustentam cada decisão e cada animal criado nas fazendas do Grupo DH.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-verde-pasto/10">
              {PILLARS.map((p) => (
                <div key={p.n}
                  className="group relative p-8 border-b border-r border-verde-pasto/10 hover:bg-terra-noite transition-colors duration-300 overflow-hidden">
                  {/* número grande como watermark */}
                  <span className="absolute top-4 right-6 font-mono text-6xl font-bold text-verde-pasto/8 select-none">
                    {p.n}
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-verde-pasto font-bold">{p.n}</span>
                    <span className="h-px flex-1 bg-verde-pasto/20" />
                    <div className="relative w-8 h-8 shrink-0">
                      <Image src={p.icon} alt="" fill className="object-contain" sizes="32px" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-marfim mb-3 leading-snug pr-8">{p.title}</h3>
                  <p className="text-cinza-terra text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Da fazenda — faixa escura com dourado ──────────────────────── */}
        <section className="bg-terra-noite">
          <div className="max-w-7xl mx-auto">
            {/* imagem de fundo com conteúdo sobre */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Image src={`${BASE}/21062022-C0003T01.jpg`} alt="" fill className="object-cover" sizes="100vw" />
              </div>
              <div className="relative px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                      <SectionLabel>Cadeia Integrada</SectionLabel>
                      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
                        style={{ color: "#f4efe6" }}>
                        Da nossa fazenda para a experiência gastronômica de alto padrão
                      </h2>
                      <p className="leading-relaxed mb-8 text-cinza-terra">
                        Os animais Angus das fazendas do Grupo DH abastecem a Dhuboi, marca de cortes premium Angus certificados. Esse vínculo garante uma cadeia totalmente integrada.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {["Animais com padrão técnico", "Manejo responsável", "Genética selecionada", "Nutrição equilibrada", "Rastreabilidade", "Padronização de carcaças"].map((t) => (
                          <span key={t} className="px-3 py-1.5 text-xs font-medium border"
                            style={{ borderColor: "rgba(182,144,74,0.4)", color: "#b6904a" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors"
                          style={{ backgroundColor: "#b6904a", color: "#0e0c09" }}>
                          Falar no WhatsApp
                        </a>
                        <a href="https://www.dhuboi.com.br/" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 border text-sm font-bold tracking-widest uppercase hover:bg-dourado-selo/10 transition-colors"
                          style={{ borderColor: "#b6904a", color: "#f4efe6" }}>
                          Conheça a Dhuboi
                        </a>
                      </div>
                    </div>

                    {/* fechamento em destaque */}
                    <div className="border-l-2 pl-8 py-4" style={{ borderColor: "rgba(182,144,74,0.5)" }}>
                      <p className="font-heading text-xl text-marfim leading-relaxed mb-6">
                        "É essa consistência que permite à Dhuboi oferecer cortes reconhecidos por chefs."
                      </p>
                      <p className="text-cinza-terra leading-relaxed">
                        Restaurantes e apreciadores de alta gastronomia, além de abastecer a Boutique Dhuboi, em Formosa-GO, com produtos que representam exclusividade e sabor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pecuária e Agricultura — split com verde-pasto ──────────────── */}
        <section id="pecuaria-agricultura" className="bg-barro">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* texto */}
              <div className="px-8 lg:px-16 py-20 lg:py-28 flex flex-col justify-center border-r border-verde-pasto/15">
                <SectionLabel>Pecuária & Agricultura</SectionLabel>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-marfim leading-tight mb-6">
                  Produtividade com responsabilidade
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-4">
                  Nosso modelo de pecuária de ciclo completo é integrado à produção de grãos. A soja e o milho cultivados nas fazendas sustentam o sistema, reforçam a sustentabilidade e aumentam a eficiência produtiva.
                </p>
                <p className="text-cinza-terra leading-relaxed mb-10">
                  Do campo ao confinamento, cada etapa é conduzida com cuidado e planejamento, garantindo qualidade e previsibilidade.
                </p>
                <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 self-start px-8 py-4 border border-verde-pasto text-marfim text-sm font-bold tracking-widest uppercase hover:bg-verde-pasto hover:text-terra-noite transition-colors">
                  Veja como produzimos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              {/* grade de fotos 2×2 */}
              <div className="grid grid-cols-2">
                {GALLERY.slice(12, 16).map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden group">
                    <Image src={img.src} alt={img.alt} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-terra-noite/30 group-hover:bg-verde-pasto/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Galeria ─────────────────────────────────────────────────────── */}
        <section className="bg-terra-noite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <SectionLabel>Nosso dia a dia no campo</SectionLabel>
                <h2 className="font-heading text-3xl sm:text-4xl text-marfim">O campo move a nossa história</h2>
              </div>
              <p className="text-cinza-terra text-sm max-w-xs leading-relaxed">
                Imagens reais do trabalho diário, o ritmo da fazenda e o ciclo produtivo do Grupo.
              </p>
            </div>
          </div>

          {/* galeria full-width, sem padding lateral */}
          <div style={{ columns: "2", columnGap: "4px" }}
            className="sm:[column-count:3] lg:[column-count:4] px-4 sm:px-6 lg:px-8 pb-4">
            {GALLERY.map((img) => (
              <div key={img.src} className="relative overflow-hidden mb-1 group" style={{ breakInside: "avoid" }}>
                <Image src={img.src} alt={img.alt} width={600} height={450}
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-terra-noite/0 group-hover:bg-verde-pasto/15 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Fale Conosco — FUNDO VERDE-PASTO, completamente diferente ────── */}
        <section className="bg-verde-pasto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-terra-noite/15 text-terra-noite text-xs font-bold tracking-widest uppercase border-l-2 border-terra-noite mb-6">
                  Fale Conosco
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-terra-noite leading-tight mb-4">
                  Ficou com dúvidas?
                </h2>
                <p className="text-terra-noite/70 text-lg leading-relaxed">
                  Nossa equipe está pronta para responder sobre pecuária, genética, parcerias e muito mais.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-terra-noite text-marfim text-sm font-bold tracking-widest uppercase hover:bg-barro transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
                <a href="https://www.instagram.com/grupodhagropecuaria/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-terra-noite text-terra-noite text-sm font-bold tracking-widest uppercase hover:bg-terra-noite/10 transition-colors">
                  Ver Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-terra-noite border-t border-verde-pasto/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Image
                src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
                alt="DH Agropecuária"
                width={200}
                height={80}
                className="h-12 w-auto object-contain mb-5"
              />
              <p className="text-cinza-terra text-sm leading-relaxed max-w-xs">
                Pecuária de corte Angus e Nelore, agricultura de soja e milho, e genética bovina certificada.
              </p>
            </div>

            <nav aria-label="Rodapé">
              <p className="text-xs text-verde-pasto font-bold tracking-widest uppercase mb-5">Navegação</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Quem Somos", href: "#quem-somos" },
                  { label: "Nossa História", href: "/nossa-historia" },
                  { label: "Pecuária e Agricultura", href: "#pecuaria-agricultura" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-cinza-terra text-sm hover:text-verde-pasto transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs text-verde-pasto font-bold tracking-widest uppercase mb-5">Nossas Redes</p>
              <div className="flex flex-col gap-3 mb-8">
                <a href="https://www.instagram.com/grupodhagropecuaria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-verde-pasto transition-colors">
                  <IconInstagram /> Instagram
                </a>
                <a href="https://www.linkedin.com/company/grupo-dh-agropecuaria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-verde-pasto transition-colors">
                  <IconLinkedIn /> LinkedIn
                </a>
                <a href="https://www.youtube.com/@grupodhagropecuaria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-verde-pasto transition-colors">
                  <IconYouTube /> YouTube
                </a>
                <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cinza-terra text-sm hover:text-verde-pasto transition-colors">
                  <IconWhatsApp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div className="border-t border-verde-pasto/10 pt-10 pb-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-6 text-center" style={{ color: "#b6904a" }}>
              Certificações
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
              {[
                { src: "https://dhagropecuaria.com/wp-content/uploads/2026/01/2897A_MARCA-ANGUS-GOLD-alt01-AF-01-e1768959271147.png", alt: "Angus Gold", label: "Angus Gold" },
                { src: "https://dhagropecuaria.com/wp-content/uploads/2026/01/logo-sustentabilidade.png", alt: "Sustentabilidade Angus", label: "Sustentabilidade" },
              ].map((seal) => (
                <div key={seal.label} className="flex flex-col items-center gap-3">
                  <div className="relative w-20 h-20 p-1.5 border" style={{ borderColor: "rgba(182,144,74,0.4)" }}>
                    <Image src={seal.src} alt={seal.alt} fill className="object-contain p-1" sizes="80px" />
                  </div>
                  <span className="text-xs font-medium" style={{ color: "#b6904a" }}>{seal.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-verde-pasto/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cinza-terra/50">
              © {new Date().getFullYear()} Grupo DH Agropecuária. Todos os direitos reservados.
            </p>
            <a href="https://www.dhuboi.com.br/" target="_blank" rel="noopener noreferrer"
              className="text-xs text-cinza-terra/50 hover:text-cinza-terra transition-colors">
              Conheça a Dhuboi →
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
