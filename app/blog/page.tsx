import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Blog — Grupo DH Agropecuária",
  description: "Artigos, novidades e conteúdo sobre pecuária, agricultura e agronegócio do Grupo DH Agropecuária.",
};

const BASE = "https://dhagropecuaria.com/wp-content/uploads";

export const POSTS = [
  {
    slug: "grupo-dh-agropecuaria-producao-sustentavel-angus-certificado",
    title: "Conheça o Grupo DH Agropecuária",
    date: "20 de fevereiro de 2026",
    tag: "Institucional",
    excerpt: "Nascida da união entre tradição familiar, conhecimento técnico e visão estratégica, a DH Agropecuária é referência em pecuária de corte, agricultura integrada e genética bovina no Oeste Baiano.",
    image: `${BASE}/2026/02/7091fcbf-4f73-48cb-b1ea-f714f0762a82.jpg`,
  },
  {
    slug: "tendencias-do-agronegocio-para-os-proximos-anos",
    title: "Tendências do agronegócio para os próximos anos",
    date: "21 de janeiro de 2026",
    tag: "Agronegócio",
    excerpt: "O agro está em constante evolução. Tecnologias, novas formas de gestão e práticas mais eficientes vêm transformando o setor — digitalização do campo, uso de dados e maior foco em sustentabilidade.",
    image: `${BASE}/2026/01/22062022-DJI_0027-scaled.jpg`,
  },
  {
    slug: "a-importancia-da-gestao-eficiente-no-agronegocio",
    title: "A importância da gestão eficiente no agronegócio",
    date: "21 de janeiro de 2026",
    tag: "Gestão",
    excerpt: "O agronegócio moderno exige mais do que força de trabalho: exige estratégia. Organização financeira, uso de dados e planejamento impactam diretamente os resultados no campo.",
    image: `${BASE}/2026/01/WhatsApp-Image-2025-11-03-at-15.41.17-2.jpeg`,
  },
  {
    slug: "pecuaria-sustentavel-produzir-mais-respeitando-o-meio-ambiente",
    title: "Pecuária sustentável: produzir mais respeitando o meio ambiente",
    date: "21 de janeiro de 2026",
    tag: "Sustentabilidade",
    excerpt: "Sustentabilidade e produtividade podem caminhar juntas. A adoção de práticas responsáveis na pecuária contribui para a preservação ambiental, melhora o bem-estar animal e fortalece a imagem do produtor.",
    image: `${BASE}/2026/01/WhatsApp-Image-2025-11-03-at-15.51.15-2.jpeg`,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <Header />

      {/* hero */}
      <section className="pt-[88px] bg-terra-noite">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-6">
            <span className="w-5 h-px bg-dourado-selo" />
            Blog
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl text-marfim leading-none mb-4">
            Do campo ao conhecimento.
          </h1>
          <p className="text-cinza-terra text-lg max-w-xl leading-relaxed">
            Artigos sobre pecuária, agricultura, gestão e sustentabilidade do Grupo DH.
          </p>
        </div>
      </section>

      {/* destaque */}
      <section className="bg-barro border-t border-dourado-selo/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <Link href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-0 border border-dourado-selo/15 hover:border-dourado-selo/40 transition-colors overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
              <Image src={featured.image} alt={featured.title} fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-terra-noite/30" />
            </div>
            <div className="bg-terra-noite p-8 lg:p-12 flex flex-col justify-center">
              <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-4">
                {featured.tag} · {featured.date}
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl text-marfim leading-snug mb-6">
                {featured.title}
              </h2>
              <p className="text-cinza-terra leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-dourado-selo text-xs font-black tracking-[0.18em] uppercase group-hover:text-marfim transition-colors">
                Ler artigo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* grade demais posts */}
      <section className="bg-terra-noite border-t border-dourado-selo/10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dourado-selo/10">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group bg-barro block hover:bg-terra-noite transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.image} alt={post.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-terra-noite/30" />
                </div>
                <div className="p-6 lg:p-8">
                  <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-3">
                    {post.tag} · {post.date}
                  </p>
                  <h2 className="font-heading text-xl text-marfim leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-cinza-terra text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <span className="text-dourado-selo text-xs font-black tracking-[0.18em] uppercase group-hover:text-marfim transition-colors">
                    Ler artigo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-barro border-t border-dourado-selo/10 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
            alt="DH Agropecuária" width={120} height={48}
            className="h-10 w-auto object-contain"
          />
          <Link href="/" className="text-xs text-cinza-terra hover:text-marfim transition-colors">
            ← Voltar ao site
          </Link>
        </div>
      </footer>
    </>
  );
}
