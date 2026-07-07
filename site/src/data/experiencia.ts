// Resumo de experiências (coluna direita da hero), ano · empresa · cargo
export interface Experiencia {
  periodo: string;
  empresa: string;
  cargo: string;
}

export const experiencia: Experiencia[] = [
  { periodo: '2023 →', empresa: 'Starian', cargo: 'Product Designer · Sienge (ERP SaaS B2B)' },
  { periodo: '2021,23', empresa: 'Prensa', cargo: 'Principal Product Designer' },
  { periodo: '2015,21', empresa: 'Design Gráfico', cargo: 'Ilustração · Branding · Comunicação · Marketing' }
];

// Palavra rotativa da hero (herda o estilo da frase)
export const heroRotativa = [
  'AI Product Designer',
  'ladino no RPG',
  'Cafeolatra',
  'amante de ficção'
];

export const heroFrase = 'Prazer ter você aqui! Sou Michael';
