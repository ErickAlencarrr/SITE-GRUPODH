import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import DenunciaForm from "../components/DenunciaForm";

export const metadata: Metadata = {
  title: "Canal de Denúncia — Grupo DH Agropecuária",
  description:
    "Canal seguro e confidencial para relatar irregularidades, assédio, fraude ou descumprimento de normas no Grupo DH Agropecuária.",
};

export default function CanalDenunciaPage() {
  return (
    <>
      <Header />

      {/* hero */}
      <section className="pt-[88px] bg-terra-noite">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.2em] uppercase text-dourado-selo mb-6">
            <span className="w-5 h-px bg-dourado-selo" />
            Canal de Denúncia
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl text-marfim leading-none mb-6">
            Fale com segurança.
          </h1>
          <p className="text-cinza-terra text-lg leading-relaxed max-w-2xl">
            Este canal é destinado ao reporte confidencial de irregularidades, desvios éticos
            ou descumprimento de normas. Você pode se identificar ou manter o anonimato.
            Todas as denúncias são tratadas com sigilo e seriedade.
          </p>
        </div>
      </section>

      {/* garantias */}
      <section className="bg-barro border-t border-dourado-selo/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid sm:grid-cols-3 gap-px bg-dourado-selo/10">
            {[
              { title: "Confidencial", desc: "Sua identidade é protegida em todas as etapas do processo." },
              { title: "Sem retaliação", desc: "Denunciantes de boa-fé têm proteção garantida pela empresa." },
              { title: "Acompanhamento", desc: "Denúncias identificadas recebem retorno sobre o andamento." },
            ].map((item) => (
              <div key={item.title} className="bg-barro px-6 py-8">
                <p className="font-mono text-xs text-dourado-selo tracking-widest uppercase mb-3">{item.title}</p>
                <p className="text-cinza-terra text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* formulário */}
      <section className="bg-terra-noite border-t border-dourado-selo/10 py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="border border-dourado-selo/20 bg-barro p-8 lg:p-12">
            <DenunciaForm />
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
