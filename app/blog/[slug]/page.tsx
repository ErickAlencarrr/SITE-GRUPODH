import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { POSTS } from "../page";

const BASE = "https://dhagropecuaria.com/wp-content/uploads";

const CONTENT: Record<string, { body: string[]; extraImages?: string[] }> = {
  "grupo-dh-agropecuaria-producao-sustentavel-angus-certificado": {
    body: [
      "O Grupo DH Agropecuária nasceu da união entre tradição familiar, conhecimento técnico e visão estratégica.",
      "Ao longo dos anos, estruturamos um modelo produtivo sólido, baseado em pecuária de corte, agricultura integrada, genética bovina de excelência e manejo sustentável. Cada decisão é orientada por eficiência, qualidade e responsabilidade.",
      "Somos a origem dos animais Angus que abastecem a Dhuboi, marca especializada em cortes premium certificados. Essa integração vertical fortalece toda a cadeia produtiva e garante consistência do campo à mesa.",
      "Mais do que produzir, assumimos um compromisso com o país, com o alimento e com as pessoas que confiam no que entregamos.",
      "Nosso propósito é produzir alimentos de qualidade, do campo à mesa, de forma sustentável, fortalecendo a agropecuária brasileira. Esse propósito orienta cada processo, cada investimento e cada evolução da empresa.",
      "A visão é expandir a produção de alimentos de qualidade com sustentabilidade, consolidando o Grupo DH como referência nacional em pecuária de corte e agricultura integrada.",
      "Nossa história é marcada pela responsabilidade social e ambiental. O manejo sustentável garante o bem-estar animal e a preservação do meio ambiente em todas as nossas fazendas.",
    ],
    extraImages: [
      `${BASE}/2026/01/22062022-DJI_0027-scaled.jpg`,
      `${BASE}/2026/01/RSR3143.jpg`,
    ],
  },
  "tendencias-do-agronegocio-para-os-proximos-anos": {
    body: [
      "O agro está em constante evolução. Tecnologias, novas formas de gestão e práticas mais eficientes vêm transformando o setor. Neste post, apresentamos as principais tendências do agronegócio, como digitalização do campo, uso de dados, inovação nos insumos e maior foco em sustentabilidade.",
      "A digitalização do campo tem sido uma das maiores forças de mudança. Sensores, drones e sistemas de monitoramento em tempo real permitem que produtores tomem decisões baseadas em dados concretos, reduzindo perdas e aumentando a produtividade.",
      "O uso de dados e inteligência artificial também vem ganhando espaço. Plataformas de gestão rural integram informações de solo, clima, nutrição animal e produtividade para otimizar cada etapa do ciclo produtivo.",
      "Na pecuária, a rastreabilidade individual dos animais deixou de ser diferencial e passou a ser exigência do mercado. Consumidores e mercados internacionais demandam transparência sobre origem, manejo e bem-estar animal.",
      "A sustentabilidade deixou de ser pauta secundária. Selos, certificações e práticas de manejo responsável são cada vez mais valorizados pela cadeia produtiva e pelos consumidores finais.",
    ],
  },
  "a-importancia-da-gestao-eficiente-no-agronegocio": {
    body: [
      "O agronegócio moderno exige mais do que força de trabalho: exige estratégia. Uma boa gestão rural permite controle de custos, melhor planejamento de safras, aumento da produtividade e tomadas de decisão mais seguras.",
      "Neste artigo, mostramos como organização financeira, uso de dados e planejamento impactam diretamente os resultados no campo.",
      "O controle financeiro é a base. Produtores que acompanham indicadores como custo por arroba, custo por hectare e margem de contribuição por atividade conseguem identificar gargalos e oportunidades com muito mais precisão.",
      "O planejamento de safras e o calendário de confinamento são ferramentas poderosas. Saber quando comprar insumos, quando vender e como alocar recursos entre as diferentes frentes — pecuária, lavoura e genética — é o que diferencia operações eficientes das demais.",
      "No Grupo DH Agropecuária, a gestão por dados é um dos pilares da operação. Todas as decisões são embasadas em indicadores reais, permitindo ajustes rápidos e resultados consistentes ao longo dos ciclos produtivos.",
    ],
  },
  "pecuaria-sustentavel-produzir-mais-respeitando-o-meio-ambiente": {
    body: [
      "Sustentabilidade e produtividade podem caminhar juntas. A adoção de práticas responsáveis na pecuária contribui para a preservação ambiental, melhora o bem-estar animal e fortalece a imagem do produtor no mercado.",
      "Neste artigo, abordamos como o manejo consciente gera benefícios econômicos e ambientais a longo prazo.",
      "A integração lavoura-pecuária-floresta (ILPF) é um dos sistemas mais eficientes para conciliar produção e conservação. Ela recupera pastagens degradadas, sequestra carbono e diversifica a renda do produtor.",
      "O bem-estar animal também está diretamente ligado à produtividade. Animais com bom manejo, alimentação equilibrada e estresse reduzido apresentam melhores índices de ganho de peso e qualidade de carcaça.",
      "O Grupo DH Agropecuária carrega o Selo Angus de Sustentabilidade, reconhecimento do nosso compromisso com práticas produtivas responsáveis. Acreditamos que o futuro do agro é construído com respeito ao meio ambiente e às comunidades onde atuamos.",
    ],
    extraImages: [
      `${BASE}/2026/01/WhatsApp-Image-2025-11-03-at-15.41.17-5.jpeg`,
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog DH Agropecuária`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = CONTENT[slug];
  const otherPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />

      {/* hero */}
      <section className="pt-[88px] relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority
          className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-noite via-terra-noite/50 to-terra-noite/20" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-16 max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-dourado-selo text-[10px] tracking-widest uppercase hover:text-marfim transition-colors mb-8">
            ← Blog
          </Link>
          <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-4">
            {post.tag} · {post.date}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-marfim leading-tight max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* conteúdo */}
      <section className="bg-terra-noite">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
          <div className="space-y-6 text-cinza-terra text-lg leading-relaxed">
            {content?.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {content?.extraImages && (
            <div className="mt-12 grid sm:grid-cols-2 gap-3">
              {content.extraImages.map((src, i) => (
                <div key={i} className="relative aspect-video overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-dourado-selo/10">
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-dourado-selo text-xs font-black tracking-[0.18em] uppercase hover:text-marfim transition-colors">
              ← Todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* outros posts */}
      {otherPosts.length > 0 && (
        <section className="bg-barro border-t border-dourado-selo/10 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-10">
              Continue lendo
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dourado-selo/10">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group bg-barro block hover:bg-terra-noite transition-colors">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={p.image} alt={p.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-2">{p.tag}</p>
                    <h3 className="font-heading text-lg text-marfim leading-snug mb-4">{p.title}</h3>
                    <span className="text-dourado-selo text-xs font-black tracking-[0.18em] uppercase group-hover:text-marfim transition-colors">
                      Ler →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-terra-noite border-t border-dourado-selo/10 py-8">
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
