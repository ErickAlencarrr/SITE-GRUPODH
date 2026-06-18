import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-terra-noite flex flex-col items-center justify-center px-4 text-center">
      <div className="w-8 h-px bg-verde-pasto mx-auto mb-8" />
      <h1 className="font-heading text-4xl sm:text-5xl text-marfim mb-4">Blog</h1>
      <p className="text-cinza-terra max-w-md mb-10">
        Em breve, conteúdos sobre pecuária, agricultura e as novidades do Grupo DH Agropecuária.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 border border-verde-pasto text-marfim text-sm tracking-widest uppercase hover:bg-verde-pasto/20 transition-colors"
      >
        ← Voltar para o início
      </Link>
    </div>
  );
}
