export type Vaga = {
  id: number;
  titulo: string;
  descricao: string;
  empresa: string;
  local: string;
  cidade: string;
  dataCriacao: string;
};

export async function fetchVagas(): Promise<Vaga[]> {
  const base = process.env.NEXT_PUBLIC_VAGAS_API_BASE_URL ?? process.env.VAGAS_API_BASE_URL;
  if (!base) return [];
  try {
    const res = await fetch(
      `${base}/api/rh/vagas-abertas?empresa=DHAGROPECUARIA`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.vagas ?? [];
  } catch {
    return [];
  }
}

export function formatarData(dataCriacao: string): string {
  try {
    return new Date(dataCriacao).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dataCriacao;
  }
}
