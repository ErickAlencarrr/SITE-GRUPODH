# Redesign DH Agropecuária — Brief para implementação (Next.js)

Projeto novo e separado do projeto DHUBOI (domínio diferente: dhagropecuaria.com). Pode reaproveitar a mesma stack e os mesmos tokens de tipografia do projeto DHUBOI (não precisa copiar componente por componente, mas a filosofia de design tokens / motion / hairlines é a mesma).

## 0. Ativos reais — quase tudo já existe, não precisa de placeholder
O site atual (https://dhagropecuaria.com/) já tem bastante foto real de fazenda. Reaproveitar direto via `next/image` com `remotePatterns` pra `dhagropecuaria.com`:

- Logo: `https://dhagropecuaria.com/wp-content/uploads/2026/01/cropped-LOGO-VERSAO-PNG-2.png`
- Ícones dos 6 pilares: `quality.png`, `planting.png`, `cow.png`, `monitor-1.png`, `validation.png`, `badge-1.png` (mesmo path base `/wp-content/uploads/2026/01/`)
- Selo Angus Gold (compartilhado com a Dhuboi): `https://dhagropecuaria.com/wp-content/uploads/2026/01/2897A_MARCA-ANGUS-GOLD-alt01-AF-01-e1768959271147.png`
- Selo Sustentabilidade (compartilhado com a Dhuboi): `https://dhagropecuaria.com/wp-content/uploads/2026/01/logo-sustentabilidade.png`
- Galeria real "Nosso dia a dia no campo" (15 fotos, usar todas no grid/masonry da seção de galeria):
  `IMG_6950.JPG.jpeg`, `WhatsApp-Image-2025-12-03-at-10.02.37.jpeg`, `WhatsApp-Image-2025-12-03-at-09.58.17.jpeg`, `WhatsApp-Image-2025-11-03-at-15.51.18-2.jpeg`, `WhatsApp-Image-2025-11-03-at-15.51.18-1.jpeg`, `WhatsApp-Image-2025-11-03-at-15.51.17.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.17-5.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.17.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.18.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.14-1.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.14-2.jpeg`, `WhatsApp-Image-2025-11-03-at-15.41.12.jpeg`, `Sem-titulo-174-scaled.jpg`, `21062022-C0003T01.jpg`, `RSR3143.jpg`, `22062022-DJI_0027-scaled.jpg` (a maioria em `/wp-content/uploads/2026/01/`, a `IMG_6950` em `/2026/05/` — confirme o path exato fazendo fetch da home atual se necessário).

Se quiser baixar essas imagens pro `public/` do projeto novo em vez de hotlinkar do domínio antigo, também vale — fica a critério, contanto que apareçam corretas.

## 1. Contexto
DH Agropecuária é a empresa-mãe/fazenda própria do grupo: pecuária de corte (Angus e Nelore), agricultura (soja e milho) e genética bovina certificada. É quem fornece os animais Angus que abastecem a Dhuboi (marca de varejo premium, já redesenhada). Público: mais institucional/B2B — parceiros, investidores, e quem quer entender a origem/procedência por trás da Dhuboi. Site atual é uma landing page única em WordPress/Elementor, com bom conteúdo real mas execução visual datada.

## 2. Direção de design — relacionada à Dhuboi, mas com identidade própria

**Por quê uma paleta diferente da Dhuboi**: a Dhuboi é a marca de varejo de luxo (carne premium pro consumidor final); a DH Agropecuária é a operação agrícola/pecuária por trás dela — institucional, técnica, ligada à terra. Usar a mesma paleta preto+dourado faria parecer a mesma marca, quando são duas coisas diferentes do mesmo grupo. A conexão visual entre as duas fica por conta da tipografia (mesma família) e do dourado aparecendo só nos momentos de certificação (que são literalmente selos compartilhados entre as duas marcas).

**Cores**:
| token | hex | uso |
|---|---|---|
| `terra-noite` | `#0E0C09` | fundo base (preto quente, mesmo registro da Dhuboi) |
| `barro` | `#1B160F` | superfícies/cards |
| `verde-pasto` | `#7C8A5C` | accent principal — verde-oliva/sálvia, evoca pasto e lavoura |
| `dourado-selo` | `#B6904A` | **reservado só para o contexto de certificação** (selos Angus Gold/Sustentabilidade) — não usar em botões/CTAs genéricos |
| `marfim` | `#F4EFE6` | texto principal sobre fundo escuro |
| `cinza-terra` | `#A8A092` | texto secundário |

**Tipografia**: mesma da Dhuboi — Fraunces (display), Inter (corpo), IBM Plex Mono (dados/specs, ex: números de hectares, cabeças de gado, etc., se aparecerem).

**Motivo de assinatura**: ao contrário do selo gravado da Dhuboi, aqui o protagonista é a fotografia real documental (já existe em quantidade — drone, fazenda, rotina). Usar um motivo de linha fina topográfica/curvas de nível (referência a terreno/parcelas de terra, conversando com as fotos aéreas de drone) como elemento decorativo discreto em divisores e fundos, em vez de ícones genéricos.

**Layout/Motion**: mesmo espírito editorial full-bleed da Dhuboi — hairlines finas (agora em `verde-pasto` em vez de dourado, exceto nos momentos de certificação), scroll-reveal sutil, hover discreto, header transparente sobre hero que ganha fundo sólido + blur ao rolar.

## 3. Estrutura — manter como página única com âncoras (como já é hoje)

```
Início | Quem Somos (#quem-somos) | Pecuária e Agricultura (#pecuaria-agricultura) | Blog     [Fale Conosco →]
```
"Blog" pode ficar como rota placeholder por enquanto (fora do escopo desta etapa). Ícones sociais (Instagram, LinkedIn, YouTube) no header e footer, com os links reais (ver seção 5).

## 4. Seções da Home (conteúdo real — usar literalmente)

**Hero (carrossel de 3 slides, mesmo padrão de hero full-bleed da Dhuboi)**:
1. "Somos a origem dos animais Angus que abastecem a Dhuboi. Marca responsável por levar cortes premium certificados para restaurantes, chefs e apaixonados por gastronomia." — CTA "Conheça a Dhuboi" → `https://www.dhuboi.com.br/`
2. "Fique por dentro. Dos últimos conteúdos e novidades no nosso Instagram." — CTA → Instagram (link na seção 5)
3. "Produzir com excelência é nossa tradição. O Grupo DH Agropecuária transforma herança familiar em um modelo produtivo moderno, sustentável e de alta performance em pecuária de corte, agricultura e genética bovina certificada." — CTA "Sobre nós" → `#quem-somos`

**Quem Somos** (`#quem-somos`):
- Título: "Com raízes no campo e visão voltada ao amanhã"
- Texto: "O Grupo DH Agropecuária é a combinação de tradição, técnica e responsabilidade. Atuamos com pecuária de corte Angus e Nelore, agricultura de soja e milho e genética bovina, sempre guiados por um modelo integrado e sustentável. Nosso compromisso é produzir com excelência, respeitar a terra e garantir que cada etapa da nossa cadeia reforce a qualidade que chega até a mesa dos consumidores."
- CTA "Saiba mais sobre o Grupo DH" → WhatsApp `https://wa.me/5561998147870` (texto pré-preenchido: "Olá! Eu vim pelo site e gostaria de saber mais sobre a DH Agropecuária.")
- Foto real: `IMG_6950.JPG.jpeg` (ver seção 0)

**Pilares do Grupo DH** (grid de 6 cards — ícone + título + descrição):
1. Certificação de Excelência Angus — "Trabalhamos com protocolos rigorosos que asseguram a qualidade do nosso rebanho Angus, reconhecido nacionalmente."
2. Sistema Integrado Completo — "Integração lavoura-pecuária que garante eficiência, sustentabilidade e equilíbrio no uso da terra."
3. Genética Certificada (CEIP) — "Seleção criteriosa de reprodutores e sêmen, priorizando desempenho, fertilidade e qualidade de carcaça."
4. Gestão por Dados — "Processos monitorados com métricas, indicadores e tomada de decisão baseada em informação."
5. Sustentabilidade e Bem-estar Animal — "Carregamos o Selo Angus de Sustentabilidade, reconhecimento que reforça nosso compromisso com práticas produtivas."
6. Rastreabilidade e Consistência — "Do nascimento ao abate, cada etapa segue padrões que asseguram segurança alimentar e previsibilidade nos resultados."

**Da fazenda à experiência gastronômica** (a ponte com a Dhuboi — pode usar `dourado-selo` aqui, é o momento de conectar as duas marcas):
- Título: "Da nossa fazenda para a experiência gastronômica de alto padrão"
- Texto: "Os animais Angus das fazendas do Grupo DH abastecem a Dhuboi, marca de cortes premium Angus certificados. Esse vínculo garante uma cadeia totalmente integrada."
- CTA "Falar no WhatsApp" → `https://wa.me/5561998147870`
- Faixa de 6 destaques curtos (pode usar ícones distintos pra cada, não repetir o mesmo ícone genérico que o site atual usa por engano): Animais criados com padrão técnico · Manejo responsável · Genética selecionada · Nutrição equilibrada · Rastreabilidade · Padronização de carcaças
- Fechamento: "É essa consistência que permite à Dhuboi oferecer cortes reconhecidos por chefs. Restaurantes e apreciadores de alta gastronomia, além de abastecer a Boutique Dhuboi, em Formosa-GO, com produtos que representam exclusividade e sabor." CTA "Conheça a Dhuboi" → `https://www.dhuboi.com.br/`

**Pecuária e Agricultura** (`#pecuaria-agricultura`):
- CTA de entrada "Veja como produzimos" → WhatsApp `https://wa.me/5561998147870`
- Título: "Produtividade com responsabilidade"
- Texto: "Nosso modelo de pecuária de ciclo completo é integrado à produção de grãos. A soja e o milho cultivados nas fazendas sustentam o sistema, reforçam a sustentabilidade e aumentam a eficiência produtiva. Do campo ao confinamento, cada etapa é conduzida com cuidado e planejamento, garantindo qualidade e previsibilidade."

**Nosso dia a dia no campo** (galeria):
- Título: "O campo move a nossa história"
- Texto: "Imagens reais do nosso trabalho diário, mostrando o ritmo da fazenda, os cuidados com os animais e o ciclo produtivo que sustenta todo o Grupo."
- Grid/masonry com as 15 fotos reais listadas na seção 0. Pode usar um leve efeito de zoom/parallax no hover, consistente com o motion já estabelecido.

**Fale Conosco (fechamento)**:
- "Ficou com dúvidas?" — CTA "Falar no WhatsApp" → `https://wa.me/5561999010093` (esse é o número do header/footer, diferente do usado em Quem Somos/Pecuária — manter assim, não unificar)

## 5. Footer
- Logo + nav (mesmos itens do header)
- "Nossas Redes": Instagram (`https://www.instagram.com/grupodhagropecuaria/`), LinkedIn (`https://www.linkedin.com/company/grupo-dh-agropecuaria/`), YouTube (`https://www.youtube.com/@grupodhagropecuaria`), WhatsApp (`https://wa.me/5561999010093`)
- Os 2 selos de certificação (Angus Gold + Sustentabilidade, ver seção 0) — esse é o lugar pra usar `dourado-selo` com destaque, como uma mini seção "Certificações", reaproveitando o mesmo espírito do componente de certificações que já existe no projeto Dhuboi (se quiser manter visual consistente entre os dois sites).
- Manter footer compacto/discreto, no mesmo padrão que ajustamos no footer da Dhuboi (não voltar a fazer um footer gigante).

## 6. Critérios de aceite
- Responsivo mobile-first.
- `npm run build` limpo, sem erro.
- Nenhuma cor fora dos tokens definidos na seção 2.
- Os 3 números de WhatsApp diferentes preservados cada um no seu contexto original (não substituir um pelo outro).
- Galeria de fotos reais carregando corretamente via `next/image` com `remotePatterns` configurado pra `dhagropecuaria.com`.
