# Site (Astro), portfólio Michael Farias

Projeto Astro estático. No ar em https://michaelfarias.netlify.app

## Rodar
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build local
```

## Onde está o quê
- `src/pages/` : `index.astro` (home), `sobre.astro`.
- `src/components/` : Nav, Hero, Trabalho, CaseItem, Diferenciais, ContatoModal, Footer.
- `src/layouts/Base.astro` : shell HTML, estilos globais, tema (light/dark persistido), View Transitions.
- `src/styles/tokens.css` : design tokens.
- `src/data/*.ts` : conteúdo (cases, experiência, sobre, perfil, site, leituras).
- `public/covers/*.html` : covers standalone (embutidas via iframe).
- `public/fotos/`, `public/cv/`, `public/favicon.svg`.

## Regras
- Conteúdo se edita primeiro em `../materiais/`, depois sincroniza aqui (ver README da raiz).
- Sem travessões em nenhum texto.
- Design system documentado em `../materiais/05-assets-gerais/identidade-visual/design-system.md`.

## Deploy
Deploy estático do `dist/` (o build-from-source do Netlify falha na instalação). Ver `../GO-LIVE.md`.
