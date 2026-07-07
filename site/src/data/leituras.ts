// "O que ando lendo", FORA do MVP (rail removido da home), mas preservado para uso futuro.
// Fonte: materiais/04-conteudo-site/leituras.md. Placeholders a substituir pelos reais.
export interface Leitura {
  autor: string;      // "autor" = meu; "fonte" = leitura externa
  titulo: string;
  data: string;
  link?: string;
  destaque?: boolean;
}

export const leituras: Leitura[] = [
  { autor: 'Michael Farias', titulo: 'Como priorizar hipóteses de IA sem virar especialista', data: 'Jun 2026', destaque: true },
  { autor: 'Michael Farias', titulo: 'Fui aos dados antes da pesquisa: o caso Contrato Rápido', data: 'Mai 2026' },
  { autor: '[fonte]', titulo: '[Artigo ou notícia que me interessa]', data: 'Abr 2026', destaque: true },
  { autor: '[fonte]', titulo: '[Outra leitura]', data: 'Mar 2026' }
];
