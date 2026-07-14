"use client";

import { useState, useRef } from "react";

export default function CandidaturaForm({ vagaId, vagaTitulo }: { vagaId: number; vagaTitulo: string }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function validate() {
    const e: Record<string, string> = {};
    if (!nome.trim()) e.nome = "Nome é obrigatório.";
    if (!email.trim()) e.email = "E-mail é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "E-mail inválido.";
    if (!arquivo) e.curriculo = "Anexe seu currículo.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("nome", nome);
      fd.append("email", email);
      fd.append("telefone", telefone);
      fd.append("vagaId", String(vagaId));
      fd.append("curriculo", arquivo!);

      const endpoint = process.env.NEXT_PUBLIC_CURRICULOS_WEBHOOK_URL;
      if (!endpoint) {
        setServerError("Serviço de candidaturas não configurado.");
        return;
      }
      const res = await fetch(endpoint, { method: "POST", body: fd });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error ?? "Erro ao enviar candidatura. Tente novamente.");
        return;
      }
      setSuccess(true);
    } catch {
      setServerError("Falha na conexão. Tente novamente mais tarde.");
    } finally {
      setSubmitting(false);
    }
  }

  const input = "w-full bg-terra-noite border border-dourado-selo/20 focus:border-dourado-selo/60 outline-none px-4 py-3 text-marfim text-sm placeholder:text-cinza-terra/40 transition-colors font-sans";
  const lbl = "block text-dourado-selo text-[10px] tracking-widest uppercase mb-1.5 font-mono font-bold";
  const errTxt = "mt-1 text-[11px] text-red-400";

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-px bg-dourado-selo/40 mx-auto mb-6" />
        <p className="font-heading text-2xl text-marfim mb-2">Candidatura enviada.</p>
        <p className="text-cinza-terra text-sm">
          Recebemos seu currículo para a vaga <strong className="text-marfim">{vagaTitulo}</strong>.
          Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label className={lbl}>Nome completo *</label>
        <input className={input} placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        {errors.nome && <p className={errTxt}>{errors.nome}</p>}
      </div>
      <div>
        <label className={lbl}>E-mail *</label>
        <input type="email" className={input} placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className={errTxt}>{errors.email}</p>}
      </div>
      <div>
        <label className={lbl}>Telefone <span className="normal-case text-cinza-terra/50">(opcional)</span></label>
        <input type="tel" className={input} placeholder="(61) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </div>
      <div>
        <label className={lbl}>Currículo (PDF) *</label>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full border border-dashed border-dourado-selo/30 hover:border-dourado-selo/60 bg-terra-noite px-4 py-4 text-left transition-colors"
        >
          <span className="text-sm text-cinza-terra/60">
            {arquivo ? arquivo.name : "Clique para selecionar o arquivo…"}
          </span>
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
        />
        {errors.curriculo && <p className={errTxt}>{errors.curriculo}</p>}
      </div>

      {serverError && (
        <p className="text-sm text-red-400 border border-red-400/30 bg-red-400/5 px-4 py-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-dourado-selo text-terra-noite font-black text-xs tracking-[0.18em] uppercase hover:bg-dourado-selo/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar candidatura"}
      </button>
    </form>
  );
}
