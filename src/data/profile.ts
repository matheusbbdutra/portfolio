export const profile = {
  name: "Matheus Dutra",
  shortName: "MD",
  role: "Backend Engineer",
  location: "João Pessoa, Paraíba, Brasil",
  email: "matheusbbdutra@gmail.com",
  summary:
    "Atuo no desenvolvimento de sistemas críticos voltados para órgãos públicos, com integrações à Redesim e Receita Federal. Hoje trabalho como Backend Engineer utilizando principalmente PHP, Symfony, PostgreSQL, APIs REST e Docker — também atuo na liderança técnica dentro da squad, apoiando decisões arquiteturais, sustentação em produção e evolução contínua dos sistemas.",
  bio:
    "Minha trajetória começou no suporte técnico, o que me deu forte entendimento de regras de negócio, fluxos críticos e resolução de problemas reais — uma base que acelerou minha evolução técnica e mudou completamente minha visão sobre software.",
  social: {
    github: "https://github.com/matheusbbdutra",
    linkedin: "https://www.linkedin.com/in/matheusbdutra",
    email: "mailto:matheusbbdutra@gmail.com",
  },
  stats: {
    yearsOfExperience: 5,
    yearsLabel: "5 anos 2 meses na Vox Tecnologia",
    role: "Backend Engineer Pleno",
    seniority: "Tech Lead de squad",
  },
  stack: [
    "TypeScript",
    "PHP",
    "Symfony",
    "Go",
    "PostgreSQL",
    "Doctrine",
    "Docker",
    "APIs REST",
  ],
  experience: [
    {
      company: "Vox Tecnologia",
      role: "Desenvolvedor Back-End Pleno",
      period: "mai/2025 — atual",
      duration: "1 ano 5 meses",
      highlights: [
        "Sistemas críticos com integrações à Redesim e Receita Federal.",
        "Liderança técnica dentro da squad, decisões arquiteturais.",
        "Referência interna em produtividade e estabilidade em sustentação.",
      ],
    },
    {
      company: "Vox Tecnologia",
      role: "Desenvolvedor Back-End Júnior",
      period: "dez/2022 — mai/2025",
      duration: "2 anos 6 meses",
      highlights: [
        "Manutenção e evolução de sistemas corporativos (PHP, Symfony, PostgreSQL).",
        "Maior volume de resolução de chamados e menor taxa de reabertura.",
      ],
    },
    {
      company: "Vox Tecnologia",
      role: "Analista de Suporte Técnico",
      period: "ago/2021 — dez/2022",
      duration: "1 ano 5 meses",
      highlights: [
        "Suporte de sistemas públicos (Redesim, fluxos fiscais).",
        "Desenvolvi protótipo interno de BI para a equipe.",
      ],
    },
  ],
  education: {
    institution: "UNINTER Centro Universitário Internacional",
    course: "CST em Análise e Desenvolvimento de Sistemas",
    period: "mai/2022 — jan/2025",
  },
} as const;

export type Profile = typeof profile;
