# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é

Portfólio de product designer (Michael Farias), site estático em **Astro** publicado na Vercel: https://portfolio-michael-farias.vercel.app. Idioma do conteúdo e da comunicação: **português**. Leia também o `README.md` para o guia completo do projeto.

## Comandos

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # gera site/dist
npm run preview
```

Não há testes nem linter configurados.

## Regra de ouro: materiais/ → site/

`materiais/` é a **fonte de verdade de todo conteúdo** (copy, covers, perfil, design system, currículo). O `site/` apenas consome. Sempre editar em `materiais/` primeiro e depois sincronizar para o `site/`. Mapa completo fonte → destino na seção 2 do `README.md`. Os principais:

- Copy dos cases: `materiais/03-cases/case-XX/copy-site-*.md` → `site/src/data/cases.ts`
- Covers standalone: `materiais/03-cases/case-XX/assets/cover-*.html` → `site/public/covers/*.html`
- Design system: `materiais/05-assets-gerais/identidade-visual/design-system.md` → `site/src/styles/tokens.css`

## Arquitetura do site

- Astro estático puro, sem integrações. Duas páginas: `site/src/pages/index.astro` (home) e `sobre.astro`.
- **Conteúdo separado da apresentação:** todo texto vive em `site/src/data/*.ts` (cases, experiencia, perfil, sobre, site, leituras); os componentes em `site/src/components/` só renderizam.
- `site/src/layouts/Base.astro` é o shell: estilos globais, tokens, tema light/dark, View Transitions (header de vidro persistente).
- **Design system:** documentado em `materiais/05-assets-gerais/identidade-visual/design-system.md` (v3.0). O código-fonte do DS é `tokens.css` + o `<style>` de cada componente. Mudanças visuais devem manter o doc e o código em sincronia.
- **Covers dos cases:** HTMLs standalone em `site/public/covers/`, servidos via iframe dentro do `CaseItem`; cada um tem visual e animação próprios.
- Contato: sem página dedicada; modal (`ContatoModal.astro`) que copia o e-mail, aberto pelo CTA de cada case e pelo footer.

## Escrita (obrigatório em qualquer copy ou doc)

**Não usar travessões.** Trocar por vírgula, ponto e vírgula, dois-pontos ou parênteses.

## Deploy

Hospedado na **Vercel**, com **deploy automático a cada push** para `main` (repo GitHub `mikeUXeUI/portfolio-michael-farias`, público). Na Vercel o **Root Directory** do projeto é `site` (o Astro é detectado sozinho, sem adaptador, por ser estático). Para publicar, basta `git push`; não há passo manual.

O repositório versiona **só o site** (`site/` + docs). O `materiais/` (fonte de verdade do conteúdo) fica fora do Git, com backup no Drive; a regra de ouro `materiais/ → site/` continua valendo localmente.

Nota histórica: o site já esteve no Netlify (`michaelfarias.netlify.app`) via deploy estático manual, abandonado na migração para a Vercel. As menções a Netlify e aos gotchas do mount Cowork no `README.md` referem-se a esse período.
