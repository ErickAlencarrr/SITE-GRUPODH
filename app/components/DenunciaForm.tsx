"use client";

import { useState } from "react";

const TIPOS = [
  "Assédio moral ou sexual",
  "Fraude ou desvio de recursos",
  "Conflito de interesses",
  "Discriminação",
  "Corrupção ou suborno",
  "Violação de normas de segurança",
  "Dano ao meio ambiente",
  "Descumprimento de leis ou regulamentos",
  "Outros",
];

const VINCULOS = [
  "Colaborador(a) da empresa",
  "Fornecedor(a) / parceiro(a)",
  "Cliente",
  "Ex-colaborador(a)",
  "Terceiro(a) / visitante",
  "Prefiro não informar",
];

interface FormData {
  anonima: string;
  nome: string;
  email: string;
  telefone: string;
  vinculo: string;
  tipo: string;
  outroTipo: string;
  dataFato: string;
  local: string;
  envolvidos: string;
  descricao: string;
  testemunhas: string;
  evidencias: string;
  tentouResolver: string;
  comoTentou: string;
  contatoRetorno: string;
}

const empty: FormData = {
  anonima: "", nome: "", email: "", telefone: "", vinculo: "",
  tipo: "", outroTipo: "", dataFato: "", local: "", envolvidos: "",
  descricao: "", testemunhas: "", evidencias: "", tentouResolver: "",
  comoTentou: "", contatoRetorno: "",
};

export default function DenunciaForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const set = (k: keyof FormData, v: string) => setForm((f) => ({ ...f, [k]: v }));

  function validate() {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.anonima) e.anonima = "Selecione uma opção.";
    if (form.anonima === "nao") {
      if (!form.nome.trim()) e.nome = "Nome é obrigatório para denúncia identificada.";
      if (!form.email.trim()) e.email = "E-mail é obrigatório para denúncia identificada.";
    }
    if (!form.vinculo) e.vinculo = "Informe seu vínculo com a empresa.";
    if (!form.tipo) e.tipo = "Selecione o tipo de irregularidade.";
    if (form.tipo === "Outros" && !form.outroTipo.trim()) e.outroTipo = "Descreva o tipo.";
    if (!form.local.trim()) e.local = "Informe o local ou área relacionada.";
    if (!form.envolvidos.trim()) e.envolvidos = "Informe as pessoas ou setores envolvidos.";
    if (!form.descricao.trim()) e.descricao = "Descreva os fatos.";
    if (!form.tentouResolver) e.tentouResolver = "Selecione uma opção.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      const url = process.env.NEXT_PUBLIC_DENUNCIA_WEBHOOK_URL;
      if (!url) {
        setServerError("Sistema de envio ainda não configurado. Entre em contato com o RH ou diretoria diretamente.");
        return;
      }
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        setServerError("Erro ao registrar a denúncia. Tente novamente.");
        return;
      }
      setSuccess(true);
      setForm(empty);
    } catch {
      setServerError("Falha na conexão. Tente novamente mais tarde.");
    } finally {
      setSubmitting(false);
    }
  }

  const input = "w-full bg-terra-noite border border-dourado-selo/20 focus:border-dourado-selo/60 outline-none px-4 py-3 text-marfim text-sm placeholder:text-cinza-terra/40 transition-colors font-sans appearance-none";
  const lbl = "block text-dourado-selo text-[10px] tracking-widest uppercase mb-1.5 font-mono font-bold";
  const err = "mt-1 text-[11px] text-red-400";
  const radioBtn = (active: boolean) =>
    `flex-1 text-center px-4 py-3 border text-sm cursor-pointer transition-colors ${
      active
        ? "border-dourado-selo bg-dourado-selo/10 text-marfim"
        : "border-dourado-selo/20 text-cinza-terra hover:border-dourado-selo/50"
    }`;

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-px bg-dourado-selo/40 mx-auto mb-6" />
        <p className="font-heading text-2xl text-marfim mb-3">Denúncia registrada.</p>
        <p className="text-cinza-terra text-sm max-w-md mx-auto leading-relaxed">
          Sua denúncia foi recebida com segurança. Todas as informações são tratadas com
          total confidencialidade. Obrigado por contribuir com a integridade do Grupo DH.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">

      <div>
        <p className={lbl}>1. Como deseja fazer a denúncia? *</p>
        <div className="flex gap-0">
          <button type="button" onClick={() => set("anonima", "sim")} className={radioBtn(form.anonima === "sim")}>Anônima</button>
          <button type="button" onClick={() => set("anonima", "nao")} className={radioBtn(form.anonima === "nao")}>Identificada</button>
        </div>
        {form.anonima === "sim" && (
          <p className="mt-2 text-[11px] text-cinza-terra/60">
            Sua identidade não será registrada. Você não poderá acompanhar o andamento da denúncia.
          </p>
        )}
        {errors.anonima && <p className={err}>{errors.anonima}</p>}
      </div>

      {form.anonima === "nao" && (
        <div className="flex flex-col gap-5 border-l-2 border-dourado-selo/20 pl-6">
          <p className={lbl}>2. Seus dados de contato</p>
          <div>
            <label className={lbl}>Nome completo *</label>
            <input className={input} placeholder="Seu nome" value={form.nome} onChange={(e) => set("nome", e.target.value)} />
            {errors.nome && <p className={err}>{errors.nome}</p>}
          </div>
          <div>
            <label className={lbl}>E-mail *</label>
            <input type="email" className={input} placeholder="seu@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
            {errors.email && <p className={err}>{errors.email}</p>}
          </div>
          <div>
            <label className={lbl}>Telefone <span className="normal-case text-cinza-terra/50">(opcional)</span></label>
            <input type="tel" className={input} placeholder="(61) 99999-9999" value={form.telefone} onChange={(e) => set("telefone", e.target.value)} />
          </div>
        </div>
      )}

      <div>
        <label className={lbl}>3. Qual é o seu vínculo com a empresa? *</label>
        <select className={input} value={form.vinculo} onChange={(e) => set("vinculo", e.target.value)}>
          <option value="" disabled>Selecione</option>
          {VINCULOS.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
        {errors.vinculo && <p className={err}>{errors.vinculo}</p>}
      </div>

      <div>
        <label className={lbl}>4. Qual tipo de irregularidade deseja reportar? *</label>
        <select className={input} value={form.tipo} onChange={(e) => set("tipo", e.target.value)}>
          <option value="" disabled>Selecione</option>
          {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.tipo && <p className={err}>{errors.tipo}</p>}
        {form.tipo === "Outros" && (
          <input className={`${input} mt-2`} placeholder="Descreva o tipo de irregularidade" value={form.outroTipo} onChange={(e) => set("outroTipo", e.target.value)} />
        )}
        {errors.outroTipo && <p className={err}>{errors.outroTipo}</p>}
      </div>

      <div>
        <label className={lbl}>5. Quando ocorreu (aproximadamente)?</label>
        <input type="date" className={`${input} [color-scheme:dark]`} value={form.dataFato} onChange={(e) => set("dataFato", e.target.value)} />
      </div>

      <div>
        <label className={lbl}>6. Local ou área onde ocorreu *</label>
        <input className={input} placeholder="Ex: Fazenda Santa Rita, setor administrativo..." value={form.local} onChange={(e) => set("local", e.target.value)} />
        {errors.local && <p className={err}>{errors.local}</p>}
      </div>

      <div>
        <label className={lbl}>7. Quem está envolvido? *</label>
        <textarea rows={3} className={`${input} resize-none`} placeholder="Nome(s) ou cargo(s) das pessoas envolvidas." value={form.envolvidos} onChange={(e) => set("envolvidos", e.target.value)} />
        {errors.envolvidos && <p className={err}>{errors.envolvidos}</p>}
      </div>

      <div>
        <label className={lbl}>8. Descreva os fatos em detalhes *</label>
        <textarea rows={6} className={`${input} resize-none`} placeholder="Relate o que aconteceu, como e com qual frequência." value={form.descricao} onChange={(e) => set("descricao", e.target.value)} />
        {errors.descricao && <p className={err}>{errors.descricao}</p>}
      </div>

      <div>
        <label className={lbl}>9. Há testemunhas?</label>
        <textarea rows={2} className={`${input} resize-none`} placeholder="Nome(s) ou cargo(s) de possíveis testemunhas (opcional)." value={form.testemunhas} onChange={(e) => set("testemunhas", e.target.value)} />
      </div>

      <div>
        <label className={lbl}>10. Possui evidências?</label>
        <textarea rows={2} className={`${input} resize-none`} placeholder="Descreva se há documentos, e-mails, fotos ou outras provas." value={form.evidencias} onChange={(e) => set("evidencias", e.target.value)} />
      </div>

      <div>
        <p className={lbl}>11. Já tentou resolver internamente? *</p>
        <div className="flex gap-0">
          <button type="button" onClick={() => set("tentouResolver", "sim")} className={radioBtn(form.tentouResolver === "sim")}>Sim</button>
          <button type="button" onClick={() => set("tentouResolver", "nao")} className={radioBtn(form.tentouResolver === "nao")}>Não</button>
        </div>
        {errors.tentouResolver && <p className={err}>{errors.tentouResolver}</p>}
        {form.tentouResolver === "sim" && (
          <textarea rows={2} className={`${input} resize-none mt-2`} placeholder="Como tentou e qual foi o resultado?" value={form.comoTentou} onChange={(e) => set("comoTentou", e.target.value)} />
        )}
      </div>

      {form.anonima === "nao" && (
        <div>
          <label className={lbl}>12. Como prefere receber retorno?</label>
          <input className={input} placeholder="E-mail, telefone, ou sem preferência..." value={form.contatoRetorno} onChange={(e) => set("contatoRetorno", e.target.value)} />
        </div>
      )}

      <p className="text-[11px] text-cinza-terra/50 leading-relaxed border-t border-dourado-selo/10 pt-4">
        Todas as informações são tratadas com total confidencialidade. Retaliações a denunciantes de boa-fé são proibidas e passíveis de sanção disciplinar.
      </p>

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
        {submitting ? "Registrando..." : "Registrar denúncia"}
      </button>
    </form>
  );
}
