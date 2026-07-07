# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é

Portfólio de product designer (Michael Farias), site estático em **Astro** publicado no Netlify: https://michaelfarias.netlify.app. Idioma do conteúdo e da comunicação: **português**. Leia também o `README.md` (guia completo do projeto) e o `GO-LIVE.md` (deploy) antes de mudanças grandes ou publicação.

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

O build-from-source do Netlify **falha** (erro pendente de investigação); não migrar para deploy automático via Git antes de resolver. O método que funciona é buildar localmente e subir o `dist/` como deploy estático; passo a passo, site_id e gotchas no `GO-LIVE.md`. Antes de publicar, validar o CSS gerado em `dist/_astro/*.css` (um `.astro` truncado no `<style>` builda sem erro, só descarta regras).

Nota: as seções sobre corrupção de arquivos (NULL bytes, Read com cache) no README/GO-LIVE valem para o mount do Cowork, **não** para o Claude Code em ambiente local.
