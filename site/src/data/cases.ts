// Copy dos cases da HOME, espelha materiais/03-cases/case-XX/copy-site-*.md
// Ordem = ordem de exibição na galeria. `cover` = arquivo em /public/covers/.
// `mailSubject`/`mailBody` são texto puro (o componente faz o encode do Gmail compose).

export interface CaseItem {
  slug: string;
  title: string;
  desc: string[];        // 2 estrofes
  tags: string[];
  invite: string;
  mailSubject: string;
  mailBody: string;
  cover: string;         // caminho em /public/covers/
}

export const cases: CaseItem[] = [
  {
    slug: 'acordo-de-precos',
    title: 'Automação da jornada de compras que gerou R$ 5 milhões de economia',
    desc: [
      'No dia a dia da obra, cada solicitação de material precisa virar pedido rápido para o canteiro não parar. No Sienge (ERP de construtoras), isso acontecia pedido a pedido, em alto volume.',
      'Como owner, conduzi do discovery à entrega, negociando os trade-offs direto com clientes estratégicos. O Acordo de Preços passou a gerar pedidos a partir de preços pré-acordados, em um dia no lugar de cinco. O próximo passo é usar IA para casar insumos por similaridade e abrir o uso a toda a base.'
    ],
    tags: ['Starian', 'SaaS B2B', 'Owner', 'Automação', 'IA aplicada'],
    invite: 'Quer entender os detalhes desse projeto e como estou atuando nele hoje?',
    mailSubject: 'Portfólio: case Acordo de Preços',
    mailBody: 'Oi, Michael! Vi o case do Acordo de Preços no seu portfólio e queria entender os detalhes e como você está atuando nele hoje.',
    cover: '/covers/acordo.html'
  },
  {
    slug: 'contrato-rapido',
    title: '+160% de adesão a partir de uma descoberta nos dados',
    desc: [
      'No Sienge, a tela Contrato Rápido tinha baixo acesso, e a pergunta era direta: tem valor, vale seguir investindo?',
      'Antes de abrir pesquisa, fui aos dados. No Mixpanel, da base que mais se beneficiaria, só 5% tinham aberto a tela uma vez. Era problema de descoberta, não de valor. Com ações simples de engajamento, a adesão subiu 160% e superou a meta, sustentada o ano todo.'
    ],
    tags: ['Starian', 'Dados', 'Discovery'],
    invite: 'Quer o detalhe das decisões por trás disso?',
    mailSubject: 'Portfólio: case Contrato Rápido',
    mailBody: 'Oi, Michael! Vi o case do Contrato Rápido e queria saber mais sobre as decisões por trás do resultado.',
    cover: '/covers/contrato-rapido.html'
  },
  {
    slug: 'ds-componentes-ia',
    title: 'Design System para IA: o padrão que os times precisavam antes de lançar',
    desc: [
      'No Sienge, vários produtos estavam prestes a lançar funcionalidades de IA em 2025. O problema era não ter padrão nenhum, nem visual nem de boas práticas, para como a IA deveria aparecer nas telas. Cada time seguiria um caminho diferente.',
      'Participei do grupo de designers responsável por criar essa base. Meu foco foi a governança. Estudei o Carbon Design System da IBM, mapeei limitações e riscos, e trouxe os princípios que precisavam guiar os componentes, como sinalizar a atuação da IA com precisão, célula a célula, não com um aviso genérico na tela.'
    ],
    tags: ['Sienge', 'Design System', 'IA aplicada', 'Governança'],
    invite: 'Esse tipo de trabalho não aparece em screenshot. Se quiser entender o raciocínio por trás, me chama.',
    mailSubject: 'Portfólio: Design System de componentes de IA',
    mailBody: 'Oi, Michael! Vi o case do DS de componentes de IA no seu portfólio e queria entender melhor o raciocínio por trás das decisões.',
    cover: '/covers/ds-componentes-ia.html'
  },
  {
    slug: 'framework-ia',
    title: 'Um framework de priorização de IA que destravou produto e tech',
    desc: [
      'Com a IA no centro da estratégia, produto e tech travavam na mesma pergunta: por onde começar? Faltava um critério comum.',
      'Criei uma matriz de Valor versus Adoção, com os critérios virados em perguntas diretas: simples para qualquer um usar, firme para sustentar a decisão. Destravou os times com uma linguagem comum e virou referência interna.'
    ],
    tags: ['Starian', 'IA aplicada', 'Estratégia'],
    invite: 'Tem muita decisão por trás. Se ficou curioso, vamos conversar.',
    mailSubject: 'Portfólio: framework de priorização de IA',
    mailBody: 'Oi, Michael! Vi o case do framework de priorização de IA e queria trocar uma ideia sobre ele.',
    cover: '/covers/framework-ia.html'
  },
  {
    slug: 'agente-autorizacoes',
    title: 'Agente de IA para fluxos de autorização, ainda não posso contar mais sobre',
    desc: [
      'Estou trabalhando num projeto que ainda não posso divulgar. Posso adiantar que é na construção civil, num gargalo real da jornada de compras de obras, e que a solução passa por um agente de IA.',
      'Conduzi a hipótese do zero, da pesquisa interna ao protótipo validado com stakeholders. O projeto está em desenvolvimento e, por ora, fica aqui só como registro de que tem coisa boa no forno.'
    ],
    tags: ['Sienge', 'IA aplicada', 'Em andamento', 'Confidencial'],
    invite: 'Se o tema te interessa e você não pode esperar, me manda uma mensagem. O que posso contar numa conversa é mais do que o que cabe aqui.',
    mailSubject: 'Portfólio: projeto confidencial de IA',
    mailBody: 'Oi, Michael! Vi que você tem um projeto de IA em andamento que não pode divulgar. Queria entender o que puder sobre o trabalho.',
    cover: '/covers/agente.html'
  },
  {
    slug: 'editor-prensa',
    title: 'Editor de texto da Prensa: tirando o gargalo de 4 dias da publicação',
    desc: [
      'A Prensa conecta creators de conteúdo a empresas que apostam em marketing de conteúdo. Os creators não tinham como publicar sozinhos: todo artigo passava pelo time interno, que recebia, diagramava fora do padrão e publicava, em até quatro dias.',
      'Entreguei um editor onde o creator escreve, diagrama dentro do padrão e publica na hora. Isso eliminou o gargalo de quatro dias e o teto diário de publicações. A ferramenta está no ar e em uso diário pelos creators da plataforma.'
    ],
    tags: ['Prensa', 'Editor', 'Conteúdo'],
    invite: 'Mostrei só a ponta. O raciocínio e as escolhas difíceis rendem uma boa conversa, me chama que eu conto o resto.',
    mailSubject: 'Portfólio: editor de texto da Prensa',
    mailBody: 'Oi, Michael! Vi o case do editor de texto da Prensa e queria entender o raciocínio e as escolhas por trás dele.',
    cover: '/covers/prensa.html'
  }
];
