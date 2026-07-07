// Config global do site: identidade, nav, contato. Espelha materiais/04-conteudo-site/contato.md
export const site = {
  nome: 'Michael Farias',
  descritor: 'Product Designer',
  nav: [
    { label: 'Trabalhos', href: '/#trabalho' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Currículo', href: '/cv/Michael-Farias-CV.pdf' }
  ],
  contato: {
    email: 'michaelgfarias@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mikegomesfarias/',
    curriculoPdf: '/cv/Michael-Farias-CV.pdf' // pendente
  }
};

// Helper para montar o link do Gmail compose pré-preenchido
export function gmailCompose(subject: string, body: string, to = site.contato.email): string {
  const p = new URLSearchParams({ view: 'cm', fs: '1', to, su: subject, body });
  return `https://mail.google.com/mail/?${p.toString()}`;
}
