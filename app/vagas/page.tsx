"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import CandidaturaForm from "../components/CandidaturaForm";
import { type Vaga, formatarData } from "@/lib/vagas-api";

function useVagas() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_VAGAS_API_BASE_URL;
    if (!base) { setLoading(false); return; }
    fetch(`${base}/api/rh/vagas-abertas?empresa=DHAGROPECUARIA`)
      .then((r) => r.ok ? r.json() : { vagas: [] })
      .then((data) => setVagas(data.vagas ?? []))
      .catch(() => setVagas([]))
      .finally(() => setLoading(false));
  }, []);
  return { vagas, loading };
}

function ListaVagas({ vagas, loading }: { vagas: Vaga[]; loading: boolean }) {
  return (
    <>
      {/* hero */}
      <section className="pt-[88px] bg-terra-noite">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-6">
            <span className="w-5 h-px bg-dourado-selo" />
            Trabalhe Conosco
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl text-marfim leading-none mb-6">
            Faça parte do time.
          </h1>
          <p className="text-cinza-terra text-lg max-w-xl leading-relaxed">
            Acreditamos que pessoas excepcionais constroem resultados excepcionais.
            Confira as vagas abertas e candidate-se.
          </p>
        </div>
      </section>

      {/* lista */}
      <section className="bg-barro border-t border-dourado-selo/10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-dourado-selo/30 border-t-dourado-selo rounded-full animate-spin" />
            </div>
          ) : vagas.length === 0 ? (
            <div className="border border-dourado-selo/20 bg-terra-noite p-12 text-center max-w-xl mx-auto">
              <div className="w-12 h-px bg-dourado-selo/40 mx-auto mb-6" />
              <p className="font-heading text-2xl text-marfim mb-3">Nenhuma vaga aberta no momento.</p>
              <p className="text-cinza-terra text-sm leading-relaxed">
                Acompanhe nossas redes sociais para ficar por dentro das próximas oportunidades.
              </p>
              <a
                href="https://www.instagram.com/grupodhagropecuaria/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-dourado-selo text-terra-noite text-xs font-black tracking-[0.18em] uppercase hover:bg-dourado-selo/85 transition-colors"
              >
                Ver Instagram ↗
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {vagas.map((vaga) => (
                <Link key={vaga.id} href={`/vagas?id=${vaga.id}`} className="group block">
                  <article className="border border-dourado-selo/15 group-hover:border-dourado-selo/50 bg-terra-noite transition-all duration-300 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-2">
                        {vaga.local} · {vaga.cidade}
                      </p>
                      <h2 className="font-heading text-xl lg:text-2xl text-marfim mb-2 leading-snug">
                        {vaga.titulo}
                      </h2>
                      <p className="text-cinza-terra text-sm leading-relaxed line-clamp-2">
                        {vaga.descricao.length > 120 ? vaga.descricao.slice(0, 120) + "..." : vaga.descricao}
                      </p>
                    </div>
                    <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
                      <p className="font-mono text-cinza-terra/50 text-[10px] tracking-widest uppercase">
                        Publicada em {formatarData(vaga.dataCriacao)}
                      </p>
                      <span className="text-dourado-selo text-sm group-hover:text-marfim transition-colors">
                        Ver vaga e candidatar-se →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function DetalheVaga({ vaga }: { vaga: Vaga }) {
  const paragrafos = vaga.descricao.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      <section className="pt-[88px] bg-terra-noite">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <Link href="/vagas" className="inline-flex items-center gap-2 font-mono text-dourado-selo text-[10px] tracking-widest uppercase hover:text-marfim transition-colors mb-8">
            ← Todas as vagas
          </Link>
          <p className="font-mono text-dourado-selo tracking-[0.2em] text-xs uppercase mb-4">
            {vaga.local} · {vaga.cidade}
          </p>
          <h1 className="font-heading text-4xl lg:text-5xl text-marfim mb-4 leading-snug">
            {vaga.titulo}
          </h1>
          <p className="text-cinza-terra text-sm">
            Publicada em {formatarData(vaga.dataCriacao)}
          </p>
        </div>
      </section>

      <section className="bg-barro border-t border-dourado-selo/10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div className="border border-dourado-selo/20 bg-terra-noite p-8 lg:p-10">
              <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-6">Sobre a vaga</p>
              <div className="text-cinza-terra text-sm leading-relaxed space-y-4">
                {paragrafos.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="border border-dourado-selo/20 bg-terra-noite p-8 lg:p-10">
              <p className="font-mono text-dourado-selo text-[10px] tracking-widest uppercase mb-2">Candidatar-se</p>
              <h2 className="font-heading text-xl text-marfim mb-6 leading-snug">{vaga.titulo}</h2>
              <CandidaturaForm vagaId={vaga.id} vagaTitulo={vaga.titulo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function VagasContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const { vagas, loading } = useVagas();

  if (idParam) {
    const vaga = vagas.find((v) => v.id === Number(idParam));
    if (loading) {
      return (
        <div className="min-h-screen bg-terra-noite flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-dourado-selo/30 border-t-dourado-selo rounded-full animate-spin" />
        </div>
      );
    }
    if (!vaga) {
      return (
        <div className="min-h-screen bg-terra-noite flex flex-col items-center justify-center gap-4">
          <p className="font-heading text-2xl text-marfim">Vaga não encontrada.</p>
          <Link href="/vagas" className="font-mono text-dourado-selo text-sm tracking-widest uppercase hover:text-marfim transition-colors">
            ← Ver todas as vagas
          </Link>
        </div>
      );
    }
    return <DetalheVaga vaga={vaga} />;
  }

  return <ListaVagas vagas={vagas} loading={loading} />;
}

export default function VagasPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen bg-terra-noite flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-dourado-selo/30 border-t-dourado-selo rounded-full animate-spin" />
        </div>
      }>
        <VagasContent />
      </Suspense>
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
