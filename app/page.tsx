import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";

const BASE = "https://dhagropecuaria.com/wp-content/uploads/2026/01";

const PILLARS = [
  { n: "01", icon: `${BASE}/quality.png`,   title: "Certificação de Excelência Angus",    desc: "Protocolos rigorosos que asseguram a qualidade do nosso rebanho Angus, reconhecido nacionalmente." },
  { n: "02", icon: `${BASE}/planting.png`,  title: "Sistema Integrado Completo",          desc: "Integração lavoura-pecuária que garante eficiência, sustentabilidade e equilíbrio no uso da terra." },
  { n: "03", icon: `${BASE}/cow.png`,       title: "Genética Certificada (CEIP)",         desc: "Seleção criteriosa de reprodutores e sêmen, priorizando desempenho, fertilidade e qualidade de carcaça." },
  { n: "04", icon: `${BASE}/monitor-1.png`, title: "Gestão por Dados",                    desc: "Processos monitorados com métricas, indicadores e tomada de decisão baseada em informação." },
  { n: "05", icon: `${BASE}/validation.png`,title: "Sustentabilidade e Bem-estar Animal", desc: "Carregamos o Selo Angus de Sustentabilidade, reconhecimento do nosso compromisso com práticas produtivas." },
  { n: "06", icon: `${BASE}/badge-1.png`,   title: "Rastreabilidade e Consistência",      desc: "Do nascimento ao abate, cada etapa segue padrões que asseguram segurança alimentar e previsibilidade." },
];

const GALLERY = [
  { src: "https://dhagropecuaria.com/wp-content/uploads/2026/05/IMG_6950.JPG.jpeg", alt: "Campo DH" },
  { src: `${BASE}/WhatsApp-Image-2025-12-03-at-10.02.37.jpeg`, alt: "Fazenda" },
  { src: `${BASE}/WhatsApp-Image-2025-12-03-at-09.58.17.jpeg`, alt: "Campo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`, alt: "Rebanho" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.18-1.jpeg`, alt: "Animais" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.51.17.jpeg`, alt: "Fazenda DH" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.17-5.jpeg`, alt: "Rebanho" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.17.jpeg`, alt: "Operação" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.18.jpeg`, alt: "Campo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.14-1.jpeg`, alt: "Ciclo produtivo" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.14-2.jpeg`, alt: "Pecuária" },
  { src: `${BASE}/WhatsApp-Image-2025-11-03-at-15.41.12.jpeg`, alt: "Animais" },
  { src: `${BASE}/Sem-titulo-174-scaled.jpg`, alt: "DH Agropecuária" },
  { src: `${BASE}/21062022-C0003T01.jpg`, alt: "Campo aberto" },
  { src: `${BASE}/RSR3143.jpg`, alt: "Produção DH" },
  { src: `${BASE}/22062022-DJI_0027-scaled.jpg`, alt: "Vista aérea" },
];

/* dourado-selo como label de seção — acento, não fundo */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-6">
      <span className="w-5 h-px bg-dourado-selo" />
      {children}
    </p>
  );
}

/* botão primário escuro */
function Btn({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex items-center gap-3 px-8 py-4 bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/85 transition-colors";
  const arrow = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}{arrow}</a>;
  return <Link href={href} className={cls}>{children}{arrow}</Link>;
}

/* botão outline */
function BtnOutline({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex items-center gap-3 px-8 py-4 border border-dourado-selo text-marfim text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo hover:text-terra-noite transition-colors";
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="inicio">
          <HeroCarousel />
        </section>

        {/* ── STATS — barro, números em dourado-selo ───────────────────────── */}
        <section className="bg-barro border-b border-dourado-selo/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-dourado-selo/10">
              {[
                { value: "+10", label: "Anos de história" },
                { value: "5.000", label: "Cabeças/ano" },
                { value: "3", label: "Frentes integradas" },
                { value: "100%", label: "Rastreável" },
              ].map((s) => (
                <div key={s.label} className="py-10 lg:py-14 text-center">
                  <p className="font-mono text-4xl lg:text-5xl font-black text-dourado-selo leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-cinza-terra text-xs tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUEM SOMOS — terra-noite, split foto/texto ──────────────────── */}
        <section id="quem-somos" className="bg-terra-noite">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[640px]">

              {/* foto */}
              <div className="relative min-h-[400px] lg:min-h-full overflow-hidden order-2 lg:order-1">
                <Image
                  src="https://dhagropecuaria.com/wp-content/uploads/2026/05/IMG_6950.JPG.jpeg"
                  alt="Campo do Grupo DH"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                {/* listra verde na borda direita da foto */}
                <div className="absolute inset-y-0 right-0 w-1 bg-dourado-selo" />
              </div>

              {/* texto */}
              <div className="px-8 sm:px-12 lg:px-20 py-20 lg:py-28 flex flex-col justify-center order-1 lg:order-2">
                <Tag>Quem Somos</Tag>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight mb-8">
                  Com raízes<br />no campo e visão<br />voltada ao amanhã
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-4 max-w-md">
                  O Grupo DH Agropecuária é a combinação de tradição, técnica e responsabilidade. Atuamos com pecuária de corte Angus e Nelore, agricultura de soja e milho e genética bovina, sempre guiados por um modelo integrado e sustentável.
                </p>
                <p className="text-cinza-terra leading-relaxed mb-10 max-w-md">
                  Nosso compromisso é produzir com excelência, respeitar a terra e garantir que cada etapa da nossa cadeia reforce a qualidade que chega até a mesa dos consumidores.
                </p>
                <Btn href="/nossa-historia">Nossa História</Btn>
              </div>

            </div>
          </div>
        </section>

        {/* ── PILARES — barro, grid numerado ──────────────────────────────── */}
        <section className="bg-barro">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <Tag>Nossos Pilares</Tag>
                <h2 className="font-heading text-4xl sm:text-5xl text-marfim leading-tight">
                  O que nos move<br />e nos diferencia
                </h2>
              </div>
              <p className="text-cinza-terra text-sm max-w-xs leading-relaxed">
                Seis compromissos que sustentam cada decisão no Grupo DH.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.n}
                  className="relative p-8 lg:p-10 border border-dourado-selo/10 hover:border-dourado-selo/35 hover:bg-terra-noite transition-all duration-300 overflow-hidden group">
                  <span className="absolute -bottom-2 -right-1 font-mono text-8xl font-black text-dourado-selo/6 select-none leading-none">
                    {p.n}
                  </span>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs font-black text-dourado-selo">{p.n}</span>
                    <span className="flex-1 h-px bg-dourado-selo/20" />
                    <div className="relative w-7 h-7 shrink-0 opacity-60">
                      <Image src={p.icon} alt="" fill className="object-contain" sizes="28px" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl text-marfim mb-3 leading-snug">{p.title}</h3>
                  <p className="text-cinza-terra text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DA FAZENDA — terra-noite, acento dourado ────────────────────── */}
        <section className="bg-terra-noite relative overflow-hidden">
          <div className="absolute inset-0 opacity-8">
            <Image src={`${BASE}/21062022-C0003T01.jpg`} alt="" fill className="object-cover" sizes="100vw" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              <div>
                <Tag>Cadeia Integrada</Tag>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight mb-8">
                  Da fazenda à<br />mesa do chef.
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-5 max-w-md">
                  Os animais Angus das fazendas do Grupo DH abastecem a Dhuboi, marca de cortes premium Angus certificados. Esse vínculo garante uma cadeia totalmente integrada.
                </p>
                <p className="text-cinza-terra leading-relaxed mb-10 max-w-md">
                  É essa consistência que permite à Dhuboi oferecer cortes reconhecidos por chefs e apreciadores de alta gastronomia, além de abastecer a Boutique Dhuboi em Formosa-GO.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 text-xs font-black tracking-[0.2em] uppercase transition-colors"
                    style={{ backgroundColor: "#D4AF37", color: "#0e0c09" }}>
                    Falar no WhatsApp
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a href="https://www.dhuboi.com.br/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 border text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/10 transition-colors"
                    style={{ borderColor: "#D4AF37", color: "#f4efe6" }}>
                    Conheça a Dhuboi
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {/* atributos */}
                <div className="grid grid-cols-2 gap-2">
                  {["Padrão técnico", "Manejo responsável", "Genética selecionada", "Nutrição equilibrada", "Rastreabilidade", "Padronização de carcaças"].map((t) => (
                    <div key={t} className="px-4 py-3 border border-cinza-terra/15 text-xs text-cinza-terra font-medium hover:border-dourado-selo/40 hover:text-marfim transition-colors">
                      {t}
                    </div>
                  ))}
                </div>

                {/* selos */}
                <div>
                  <p className="text-xs font-black tracking-[0.2em] uppercase mb-4" style={{ color: "#D4AF37" }}>Certificações</p>
                  <div className="flex gap-5">
                    {[
                      { src: `${BASE}/2897A_MARCA-ANGUS-GOLD-alt01-AF-01-e1768959271147.png`, alt: "Angus Gold" },
                      { src: `${BASE}/logo-sustentabilidade.png`, alt: "Sustentabilidade" },
                    ].map((s) => (
                      <div key={s.alt} className="relative w-16 h-16 border p-1" style={{ borderColor: "rgba(212,175,55,0.35)" }}>
                        <Image src={s.src} alt={s.alt} fill className="object-contain p-1" sizes="64px" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PECUÁRIA — barro, fotos + texto ─────────────────────────────── */}
        <section id="pecuaria-agricultura" className="bg-barro">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[560px]">

              {/* grade 2×2 fotos */}
              <div className="grid grid-cols-2">
                {GALLERY.slice(12, 16).map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden group">
                    <Image src={img.src} alt={img.alt} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:1024px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-terra-noite/30 group-hover:bg-dourado-selo/15 transition-colors" />
                  </div>
                ))}
              </div>

              {/* texto */}
              <div className="px-8 sm:px-12 lg:px-20 py-20 lg:py-28 flex flex-col justify-center border-l border-dourado-selo/10">
                <Tag>Pecuária & Agricultura</Tag>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight mb-8">
                  Produtividade<br />com<br />responsabilidade
                </h2>
                <p className="text-cinza-terra leading-relaxed mb-4 max-w-md">
                  Nosso modelo de pecuária de ciclo completo é integrado à produção de grãos. A soja e o milho cultivados nas fazendas sustentam o sistema, reforçam a sustentabilidade e aumentam a eficiência produtiva.
                </p>
                <p className="text-cinza-terra leading-relaxed mb-10 max-w-md">
                  Do campo ao confinamento, cada etapa é conduzida com cuidado e planejamento.
                </p>
                <BtnOutline href="https://wa.me/5561999010093" external>Veja como produzimos</BtnOutline>
              </div>

            </div>
          </div>
        </section>

        {/* ── GALERIA — terra-noite ────────────────────────────────────────── */}
        <section className="bg-terra-noite pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <Tag>Nosso dia a dia</Tag>
                <h2 className="font-heading text-4xl sm:text-5xl text-marfim leading-tight">
                  O campo move<br />a nossa história
                </h2>
              </div>
              <p className="text-cinza-terra text-sm max-w-xs leading-relaxed">
                Imagens reais do trabalho diário e o ciclo produtivo do Grupo.
              </p>
            </div>
          </div>

          <div style={{ columns: "2", columnGap: "3px" }}
            className="sm:[column-count:3] lg:[column-count:4] px-6 sm:px-10 lg:px-20 pb-4">
            {GALLERY.map((img) => (
              <div key={img.src} className="relative overflow-hidden mb-1 group" style={{ breakInside: "avoid" }}>
                <Image src={img.src} alt={img.alt} width={600} height={450}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-dourado-selo/0 group-hover:bg-dourado-selo/15 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* ── FALE CONOSCO — barro escuro, acento verde ───────────────────── */}
        <section className="bg-barro border-t border-dourado-selo/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Tag>Fale Conosco</Tag>
                <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-marfim leading-none mb-6">
                  Ficou com<br />dúvidas?
                </h2>
                <p className="text-cinza-terra text-lg leading-relaxed max-w-md">
                  Nossa equipe responde sobre pecuária, genética, parcerias e muito mais.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <a href="https://wa.me/5561999010093" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/85 transition-colors">
                  Falar no WhatsApp
                </a>
                <a href="https://www.instagram.com/grupodhagropecuaria/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-dourado-selo text-marfim text-xs font-black tracking-[0.2em] uppercase hover:bg-dourado-selo/10 transition-colors">
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-terra-noite border-t border-dourado-selo/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div className="lg:col-span-2">
              <Image
                src="https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png"
                alt="DH Agropecuária" width={140} height={56}
                className="h-14 w-auto object-contain mb-6"
              />
              <p className="text-cinza-terra text-sm leading-relaxed max-w-xs">
                Pecuária de corte Angus e Nelore, agricultura de soja e milho, e genética bovina certificada.
              </p>
            </div>

            <nav aria-label="Rodapé">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-5">Navegação</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Início", href: "#inicio" },
                  { label: "Quem Somos", href: "#quem-somos" },
                  { label: "Nossa História", href: "/nossa-historia" },
                  { label: "Pecuária e Agricultura", href: "#pecuaria-agricultura" },
                  { label: "Blog", href: "/blog" },
                  { label: "Trabalhe Conosco", href: "/vagas" },
                  { label: "Canal de Denúncia", href: "/canal-de-denuncia" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-cinza-terra text-sm hover:text-dourado-selo transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-5">Redes</p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/grupodhagropecuaria/" },
                  { label: "LinkedIn",  href: "https://www.linkedin.com/company/grupo-dh-agropecuaria/" },
                  { label: "YouTube",   href: "https://www.youtube.com/@grupodhagropecuaria" },
                  { label: "WhatsApp",  href: "https://wa.me/5561999010093" },
                ].map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-cinza-terra text-sm hover:text-dourado-selo transition-colors">
                    {s.label} ↗
                  </a>
                ))}
              </div>
              <p className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: "#D4AF37" }}>
                Certificações
              </p>
              <div className="flex gap-4">
                {[
                  { src: `${BASE}/2897A_MARCA-ANGUS-GOLD-alt01-AF-01-e1768959271147.png`, alt: "Angus Gold" },
                  { src: `${BASE}/logo-sustentabilidade.png`, alt: "Sustentabilidade" },
                ].map((s) => (
                  <div key={s.alt} className="relative w-12 h-12 border p-1" style={{ borderColor: "rgba(212,175,55,0.35)" }}>
                    <Image src={s.src} alt={s.alt} fill className="object-contain p-0.5" sizes="48px" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="border-t border-dourado-selo/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cinza-terra/40">
              © {new Date().getFullYear()} Grupo DH Agropecuária. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.dhuboi.com.br/" target="_blank" rel="noopener noreferrer"
                className="text-xs text-cinza-terra/40 hover:text-cinza-terra transition-colors">
                Conheça a Dhuboi →
              </a>
              <a href="https://wa.me/5561996782146" target="_blank" rel="noopener noreferrer"
                className="text-xs text-cinza-terra/40 hover:text-dourado-selo transition-colors">
                Desenvolvido por Erick Alencar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
