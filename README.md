# Portfólio Michael Farias, guia do projeto

**Atualizado:** 05/07/2026. **Status: NO AR.** https://michaelfarias.netlify.app
Portfólio de product designer (SaaS/B2B, dados e IA). Objetivo: conseguir vagas. Público: recrutadores, hiring managers e líderes de design. Tom: minimalista e direto, com personalidade dosada.

> ✍️ **Regra de escrita (qualquer output, copy ou doc):** não usar travessões. Trocar por vírgula, ponto e vírgula, dois-pontos ou parênteses.

---

## 1. Stack e estrutura

O site é um projeto **Astro estático** (sem integrações). O que está no ar é o conteúdo de `site/`.

```
Portifólio Product Designer/
├── site/                     ← O SITE (Astro). É o que vai pro ar.
│   ├── src/
│   │   ├── pages/            index.astro (home), sobre.astro
│   │   ├── components/       Nav, Hero, Trabalho, CaseItem, Diferenciais, ContatoModal, Footer
│   │   ├── layouts/Base.astro  shell + estilos globais + tokens
│   │   ├── styles/tokens.css   design tokens (cor/tipografia/layout/raio/easing)
│   │   └── data/            cases.ts, experiencia.ts, sobre.ts, perfil.ts, site.ts, leituras.ts
│   ├── public/covers/       as 6 covers standalone (+ imagens/), servidas via iframe
│   ├── public/fotos/        fotos do Sobre
│   ├── public/cv/           Michael-Farias-CV.pdf
│   └── netlify.toml, astro.config.mjs, package.json
├── materiais/               ← FONTE DE VERDADE do conteúdo (copy, covers, perfil, DS, currículos)
├── preview-case-acordo.html ← referência visual da página de case (fast-follow, ainda não portada pro Astro)
├── GO-LIVE.md               ← método de deploy + gotchas do ambiente (LER antes de publicar)
└── README.md
```

---

## 2. Regra de ouro (materiais → site)

A fonte de verdade de TODO conteúdo é `materiais/`. O `site/` consome. Editar em `materiais/` primeiro, depois sincronizar para o `site/`.

| Conteúdo | Fonte (editar aqui) | Destino no site |
|---|---|---|
| Copy dos cases | `materiais/03-cases/case-XX/copy-site-*.md` | `site/src/data/cases.ts` |
| Copy do site (hero, sobre, contato) | `materiais/04-conteudo-site/` | `site/src/data/*.ts` |
| Ferramentas e diferenciais | `materiais/04-conteudo-site/ferramentas-diferenciais.md` + `06-perfil/perfil-persona.md` | `site/src/data/perfil.ts` |
| Covers (HTML standalone) | `materiais/03-cases/case-XX/assets/cover-*.html` | `site/public/covers/*.html` |
| Design system e tokens | `materiais/05-assets-gerais/identidade-visual/design-system.md` | `site/src/styles/tokens.css` |
| Currículo PDF | `materiais/07-curriculo/` | `site/public/cv/` |
| Fotos do Sobre | `materiais/05-assets-gerais/fotos/` | `site/public/fotos/` |

---

## 3. Rodar, buildar, publicar

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # gera site/dist
```

**Deploy:** hoje é publicado no Netlify por **deploy estático do `dist/` já buildado** (o build-from-source do Netlify falha na instalação de dependências). O passo a passo exato, o site_id e os gotchas estão no **`GO-LIVE.md`**. Não migrar para deploy automático via Git antes de resolver aquele erro de build do Netlify.

---

## 4. Design system

Documentado, enxuto e fiel ao que está no ar, em **`materiais/05-assets-gerais/identidade-visual/design-system.md` (v3.0)**: tokens (cor light/dark, tipografia, layout, raio, easing), fundações globais, primitivos e componentes (Nav glass, Hero, galeria/CaseItem, cover, tags, CTA card + botão contorno, Ferramentas, Sobre, Footer, Modal, cursor-tag) e comportamentos (tema, View Transitions, toast/copiar, flash da cover, autoplay mobile das covers, hambúrguer). O código-fonte do DS é `tokens.css` + o `<style>` de cada componente.

---

## 5. Decisões-chave (estado atual)

- **Layout e tipografia:** conteúdo com largura fixa (`--container-max` 1250px) centralizado; header fixo de vidro persistente via View Transitions. **Tipografia:** Manrope no corpo/UI e títulos, **Bricolage Grotesque** no H1 do hero, JetBrains Mono nos rótulos; mínimo 14px. Acento único **azul** (`--int`): grifo azul (marca-texto) atrás da palavra rotativa do hero e tiquinho nos eyebrows (motivo `//` aposentado).
- **Home:** hero (frase + palavra rotativa de 4 termos + experiências), galeria de 6 cases em coluna central (cover 50% / texto 50%, empilha <=900px), seção Ferramentas e diferenciais (tags, sem título), footer.
- **Cases (ordem):** Acordo de Preços, Contrato Rápido, Design System para IA, Framework de priorização de IA, Agente de IA (confidencial), Editor de texto da Prensa. O CTA de cada case é um cardzinho com botão contorno que abre o modal de contato.
- **Covers:** uma standalone por case (iframe, 100% do card), visual próprio, animação no hover; no mobile animam em loop ao entrar na tela; sem menu de salvar imagem no toque.
- **Sobre:** cartão de bio (De onde venho, O que faço hoje, Filosofia de atuação, O que me faz curioso) + mosaico de 5 fotos.
- **Contato:** sem seção dedicada; o convite de cada case abre um modal com campo de e-mail que copia + LinkedIn. Footer também copia o e-mail.
- **Idioma:** PT. EN e chatbot ficam para fase 2.

---

## 6. Gotchas do ambiente (importante para quem continuar aqui)

Este mount (Cowork) corrompe arquivos em algumas gravações. Sintomas e defesa:
- **Truncamento e NULL bytes:** a ferramenta de escrita às vezes trunca ou injeta nulls. Reescrever o arquivo inteiro via shell (`cat > /tmp/x && rm -f arq && cp /tmp/x arq`) e sempre reconferir por bash (`wc -l`, `tr -cd '\000' | wc -c`, presença de `</style>`/`</html>`).
- **Read pode mostrar cache:** a leitura pode exibir uma versão antiga enquanto o disco tem outra. Validar integridade por bash, nunca só pelo Read.
- **Build engole CSS truncado sem erro:** se um `.astro` truncar no `<style>`, o `astro build` não falha, só descarta as regras após o corte. Antes de publicar, conferir o CSS gerado em `dist/_astro/*.css`, não só o HTML.

No Claude Code (ambiente de arquivo local normal), esses gotchas não se aplicam.

---

## 7. Pendências
- **Deploy pausado: repositório à frente da produção.** A passada de humanização da copy (05/07, os 6 ajustes cirúrgicos nos cases) e a limpeza de travessões em comentários estão no repo, mas ainda não foram publicadas (deploys pausados a pedido). Ao retomar, é só buildar e publicar (ver `GO-LIVE.md`). O que já está no ar: tipografia final, acento azul, nav sem caixa alta, tags editoriais, card CTA inset e a imagem OG.
- Resolver o erro de build-from-source do Netlify para habilitar deploy automático via Git.
- CV: o PDF está em `site/public/cv/`; conferir se é a versão final.
- Fast-follow: páginas de case completas (só há o preview do Acordo).
- Fase 2: versão em inglês e chatbot.

---

## 8. Migração para o Claude Code

O projeto já é uma pasta padrão; o Claude Code abre direto. Para continuar por lá:
1. Abrir a pasta do projeto no Claude Code.
2. `cd site && npm install` e `npm run dev` para desenvolver.
3. Versionar com Git (recomendado): `git init`, primeiro commit, criar repositório e `git push`. Aí dá pra fazer code review e, quando o build do Netlify for resolvido, deploy automático.
4. Regras que continuam valendo: conteúdo em `materiais/` primeiro; sem travessões; DS em `design-system.md` reflete o que está no ar.
