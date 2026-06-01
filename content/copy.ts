export const site = {
  name: "GMC Granja Multi Core",
  shortName: "GMC",
  description:
    "Plataforma de gestão inteligente para granjas avícolas. Controle produção, incubação, vacinação e financeiro em um só painel.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gmc-granja.com.br",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#precos", label: "Preços" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  kicker: "VISÃO CENTRALIZADA DA SUA GRANJA.",
  headline: "Controle tudo em um só painel.",
  subheadline:
    "Transforme dados de produção em decisões estratégicas. Reduza desperdícios e impulsione a rentabilidade com o GMC.",
  ctaPrimary: "Solicitar Demonstração",
  ctaSecondary: "Testar Grátis",
};

export const painCards = [
  {
    title: "Controle Manual Lento",
    description:
      "Chega de planilhas complexas e registros manuais demorados.",
    icon: "gauge",
  },
  {
    title: "Falta de Visibilidade Financeira",
    description:
      "Perda de lucros por falta de controle claro de fluxo de caixa.",
    icon: "wallet",
  },
  {
    title: "Risco de Vacinação Falha",
    description:
      "Esquecimentos e falta de histórico geram perdas no plantel.",
    icon: "syringe",
  },
] as const;

export const features = [
  {
    title: "Gestão de Ovos",
    description: "Controle completo da produção e estoque de ovos.",
    items: ["Produção diária", "Classificação por lote", "Controle de estoque"],
    icon: "egg",
  },
  {
    title: "Gestão de Pintinhos",
    description: "Acompanhe o crescimento do plantel com precisão.",
    items: ["Registro por lote", "Curva de crescimento", "Acompanhamento sanitário"],
    icon: "chick",
  },
  {
    title: "Incubadoras",
    description: "Monitore cada ciclo de incubação em tempo real.",
    items: ["Controle operacional", "Temperatura e umidade", "Alertas automáticos"],
    icon: "incubator",
  },
  {
    title: "Vacinação",
    description: "Nunca perca um prazo de vacinação novamente.",
    items: ["Histórico completo", "Calendário integrado", "Alertas por lote"],
    icon: "vaccine",
  },
  {
    title: "Financeiro",
    description: "Visão clara da saúde financeira da sua granja.",
    items: ["Receitas e despesas", "Lucros e prejuízos", "Fluxo de caixa"],
    icon: "finance",
  },
  {
    title: "Dashboards",
    description: "Indicadores que importam para a tomada de decisão.",
    items: ["Gráficos interativos", "KPIs operacionais", "Relatórios exportáveis"],
    icon: "dashboard",
  },
] as const;

export const benefits = [
  {
    title: "Mais controle operacional",
    description:
      "Centralize produção, incubação e vacinação em um único painel, sem depender de planilhas dispersas.",
  },
  {
    title: "Menos retrabalho",
    description:
      "Automatize registros repetitivos e libere sua equipe para focar no que realmente importa na granja.",
  },
  {
    title: "Decisões baseadas em dados",
    description:
      "Gráficos e indicadores em tempo real para antecipar problemas e agir antes que virem prejuízo.",
  },
  {
    title: "Melhor acompanhamento financeiro",
    description:
      "Saiba exatamente onde está indo cada real — receitas, despesas e margem por período.",
  },
  {
    title: "Gestão centralizada",
    description:
      "Do posto de ovos à incubação: toda a operação visível para gestores e produtores.",
  },
] as const;

export const pricing = {
  title: "Planos sob medida para sua granja",
  description:
    "Cada operação avícola é única. Converse com nossa equipe para conhecer o plano ideal — sem compromisso na demonstração.",
  cta: "Solicitar proposta na demonstração",
};

export const showcase = {
  title: "Um sistema real, pronto para a sua granja",
  description:
    "Dashboards, tabelas e métricas pensados para o dia a dia do produtor avícola — não apenas promessas em slides.",
};

export const finalCta = {
  headline: "Veja como o GMC pode transformar a gestão da sua granja.",
  subheadline:
    "Demonstração sem compromisso. Nossa equipe mostra o sistema aplicado à realidade da sua operação.",
  cta: "Quero Testar o Sistema",
  formTitle: "Solicite sua demonstração",
};
