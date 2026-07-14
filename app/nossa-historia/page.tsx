import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Nossa História — Grupo DH Agropecuária",
  description:
    "Conheça a história de coragem e trabalho que deu origem ao Grupo DH Agropecuária, referência em pecuária de corte no Oeste Baiano.",
};

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

function TopoDivider() {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none" aria-hidden>
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 opacity-20">
        <path d="M0 30 Q150 10 300 30 T600 30 T900 30 T1200 30" stroke="#D4AF37" strokeWidth="0.8" />
        <path d="M0 38 Q150 18 300 38 T600 38 T900 38 T1200 38" stroke="#D4AF37" strokeWidth="0.6" />
        <path d="M0 46 Q150 26 300 46 T600 46 T900 46 T1200 46" stroke="#D4AF37" strokeWidth="0.5" />
        <path d="M0 22 Q150 2 300 22 T600 22 T900 22 T1200 22" stroke="#D4AF37" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

const chapters = [
  {
    label: "O Começo",
    heading: "Nascida da coragem de pai e filho",
    body: "Há mais de uma década, o Grupo DH Agropecuária tem se destacado como um líder no mercado, mas a origem de nossa empresa é ainda mais inspiradora. Nasceu da coragem empreendedora do pai e da inabalável vontade de trabalhar do filho.",
  },
  {
    label: "O Sonho",
    heading: "Um legado construído em família",
    body: "Movidos por um sonho compartilhado, pai e filho uniram forças para criar um negócio que pudesse deixar um legado na agropecuária. Com uma visão audaciosa e determinação inabalável, eles enfrentaram desafios e obstáculos para construir a base sólida do Grupo DH.",
  },
  {
    label: "Os Valores",
    heading: "Transparência e eficiência como pilares",
    body: "Desde o início, acreditamos nos valores da transparência e eficiência como pilares fundamentais de nossos processos produtivos. Com dedicação incansável, buscamos sempre a excelência em cada etapa, resultando em índices de produtividade excepcionais e reconhecimento no mercado.",
  },
  {
    label: "Responsabilidade",
    heading: "Sustentabilidade e impacto social",
    body: "A história de sucesso do Grupo DH Agropecuária é marcada pela responsabilidade social e ambiental. Nosso manejo sustentável garante o bem-estar animal e a preservação do meio ambiente em todas as nossas fazendas autossuficientes. Contribuímos ativamente para o desenvolvimento das comunidades onde atuamos, fortalecendo laços e deixando um impacto positivo.",
  },
  {
    label: "Hoje",
    heading: "Referência no Oeste Baiano",
    body: "Com orgulho, confinamos 5.000 cabeças de gado por ano, atendendo grandes clientes que reconhecem a qualidade e o sabor excepcionais de nossos cortes nobres. Nosso compromisso com a excelência nos consolidou como uma referência na Pecuária do Oeste Baiano e nos impulsiona a continuar inovando e superando expectativas.",
  },
];

export default function NossaHistoriaPage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <Image
            src={`${BASE}/22062022-DJI_0027-scaled.jpg`}
            alt="Vista aérea das fazendas do Grupo DH"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-terra-noite/60 via-terra-noite/30 to-terra-noite/90" />

          <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-8 lg:px-16 pb-20 max-w-7xl mx-auto">
            <Link
              href="/#quem-somos"
              className="inline-flex items-center gap-2 text-xs text-cinza-terra hover:text-marfim transition-colors mb-8 tracking-widest uppercase"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Voltar
            </Link>
            <div className="w-8 h-px bg-dourado-selo mb-6" />
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight max-w-2xl">
              Nossa História
            </h1>
          </div>
        </section>

        {/* ── Intro stat ───────────────────────────────────────────────────── */}
        <section className="bg-barro">
          <TopoDivider />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid sm:grid-cols-3 gap-px bg-dourado-selo/10">
              {[
                { value: "+10", label: "anos de história" },
                { value: "5.000", label: "cabeças confinadas/ano" },
                { value: "100%", label: "fazendas autossuficientes" },
              ].map((stat) => (
                <div key={stat.label} className="bg-barro px-8 py-10 text-center">
                  <p className="font-mono text-3xl sm:text-4xl text-dourado-selo mb-2">{stat.value}</p>
                  <p className="text-cinza-terra text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Chapters ─────────────────────────────────────────────────────── */}
        <section className="bg-terra-noite">
          <TopoDivider />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="relative">
              {/* vertical line */}
              <div className="hidden lg:block absolute left-[5.5rem] top-0 bottom-0 w-px bg-dourado-selo/20" aria-hidden />

              <div className="flex flex-col gap-20 lg:gap-24">
                {chapters.map((chapter, i) => (
                  <div key={i} className="lg:flex lg:gap-16 items-start group">
                    {/* label + number */}
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 mb-6 lg:mb-0 lg:w-36 shrink-0">
                      <span className="font-mono text-xs text-cinza-terra/60 tracking-widest uppercase lg:text-right">
                        {chapter.label}
                      </span>
                      <span
                        className="relative flex items-center justify-center w-8 h-8 rounded-full border border-dourado-selo/40 bg-terra-noite font-mono text-xs text-dourado-selo z-10 group-hover:border-dourado-selo transition-colors"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      <div className="w-6 h-px bg-dourado-selo mb-5" />
                      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-marfim mb-5 leading-snug">
                        {chapter.heading}
                      </h2>
                      <p className="text-cinza-terra leading-relaxed text-base sm:text-lg">
                        {chapter.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing quote ────────────────────────────────────────────────── */}
        <section className="bg-barro overflow-hidden">
          <TopoDivider />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
            <svg
              viewBox="0 0 60 40"
              fill="none"
              className="w-12 h-8 mx-auto mb-8 text-dourado-selo opacity-40"
              aria-hidden
            >
              <path d="M0 40V24C0 10.745 8.582 3.007 25.745 1L27 8.255C19.418 9.582 15 13.5 15 20H26V40H0zm34 0V24C34 10.745 42.582 3.007 59.745 1L61 8.255C53.418 9.582 49 13.5 49 20H60V40H34z" fill="currentColor" />
            </svg>
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-marfim leading-snug mb-10">
              Hoje, o Grupo DH Agropecuária é muito mais do que uma empresa. É um testemunho da coragem de empreender do pai e da vontade incansável de trabalhar do filho.
            </blockquote>
            <p className="text-cinza-terra mb-12">
              Junte-se a nós nessa jornada de sucesso, onde o trabalho em família e a determinação constroem um legado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5561999010093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-dourado-selo text-terra-noite text-sm font-medium tracking-wide hover:bg-dourado-selo/85 transition-colors"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/"
                className="inline-block px-8 py-3 border border-dourado-selo text-marfim text-sm tracking-widest uppercase hover:bg-dourado-selo/20 transition-colors"
              >
                ← Voltar para o início
              </Link>
            </div>
          </div>
        </section>

        {/* ── Gallery strip ─────────────────────────────────────────────────── */}
        <section className="bg-terra-noite py-4">
          <div className="flex gap-1 overflow-hidden">
            {[
              `${BASE}/RSR3143.jpg`,
              `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`,
              `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.17-5.jpeg`,
              `${BASE}/WhatsApp-Image-2025-12-03-at-10.02.37.jpeg`,
              `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.18.jpeg`,
            ].map((src, i) => (
              <div key={i} className="relative flex-1 min-w-0 aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer minimal ──────────────────────────────────────────────────── */}
      <footer className="bg-barro border-t border-dourado-selo/15 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
            alt="DH Agropecuária"
            width={200}
            height={80}
            className="h-10 w-auto object-contain"
          />
          <p className="text-xs text-cinza-terra/60">
            © {new Date().getFullYear()} Grupo DH Agropecuária. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs text-cinza-terra hover:text-marfim transition-colors">
              Voltar ao site →
            </Link>
            <a href="https://wa.me/5561996782146" target="_blank" rel="noopener noreferrer"
              className="text-xs text-cinza-terra/40 hover:text-dourado-selo transition-colors">
              Desenvolvido por Erick Alencar
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
