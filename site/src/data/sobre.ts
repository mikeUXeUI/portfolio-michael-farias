// Página Sobre, espelha preview-sobre.html: cartão de bio + mosaico de 5 fotos.
// Reconciliado 02/07: removidos os tiles/emojis do bento antigo e a seção "Onde estou agora".
// Fotos em /public/fotos/ (copiadas de materiais/05-assets-gerais/fotos/).

export interface SobreSecao { label: string; texto: string } // texto pode conter <b>
export interface SobreFoto { src: string; alt: string; caption: string; big?: boolean }

export const sobre = {
  hint: 'quem é o Michael fora das telas',
  lead: 'Sou Product Designer, mas antes disso fui designer gráfico por 6 anos. O que me move não é entregar a peça bonita e seguir: é acompanhar o resultado, medir e responder.',
  secoes: [
    { label: 'De onde venho', texto: 'Seis anos de <b>design gráfico</b>: ilustração, branding, comunicação e marketing. Esse olho de designer gráfico continua comigo em tudo que faço hoje.' },
    { label: 'O que faço hoje', texto: 'Hoje sou <b>Principal Product Designer</b> das jornadas de Engenharia, Compras, Contratos e Medições no Sienge. Há 4 anos em <b>produto</b>, na fronteira de <b>UX, dados e IA</b>. End-to-end, do discovery ao handoff, lado a lado com produto e engenharia. Mixpanel no processo e governança de IA quando ninguém ainda tinha o mapa.' },
    { label: 'Filosofia de atuação', texto: 'Trabalho <b>lado a lado com o PM</b> pra absorver a regra de negócio e idear junto; aprofundar no domínio é do meu perfil. E ando colado no <b>time técnico</b> o tempo todo, buscando validação de viabilidade cedo. Isso vai além de destravar o produto: mantém o time alinhado e vestindo a camisa. Trazer a engenharia desde a ideação evita aquele atrito de refinar algo que os devs rejeitam por não terem participado, quando poderiam ter levantado pontos antes.' },
    { label: 'O que me faz curioso', texto: 'Acredito que design é profissão que precisa <b>acompanhar a mudança</b>. Por isso ando cedo no que é novo, IA inclusive, e gosto de entender a prática real, mais cinza que o preto-no-branco da teoria.' }
  ] as SobreSecao[],
  cta: 'Se chegou até aqui, é bem provável que a gente tenha papo.',
  fotos: [
    { src: '/fotos/01-cafe-retrato.jpg', alt: 'Michael tomando café num café', caption: 'Caféolatra assumido', big: true },
    { src: '/fotos/02-boxe.png', alt: 'Treino de boxe ao ar livre', caption: 'Boxe pra esvaziar a cabeça' },
    { src: '/fotos/03-quadrinhos.png', alt: 'Quadrinhos e livros de ficção científica', caption: 'Ficção & terror cósmico' },
    { src: '/fotos/04-cafe-gocoffee.png', alt: 'Café e pão de queijo numa bandeja', caption: 'Combustível do dia' },
    { src: '/fotos/05-rede-lagoa.png', alt: 'Rede sobre a água numa lagoa', caption: 'Recarregar na água' }
  ] as SobreFoto[]
};
