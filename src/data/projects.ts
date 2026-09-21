import type { LucideIcon } from "lucide-react";
import { Sparkles, Database, Repeat, Boxes } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  url?: string; // link externo (site/demo) — opcional
  repo?: string; // link do repositório — opcional
};

export const projects: Project[] = [
  {
    // Card 1 — destaque. Site público no ar, produto completo.
    // Você confirmou a infra (Workers + D1 + KV). Frontend é React
    // em estudo — descrevi sem inflar domínio.
    id: "universelist",
    title: "universelist.app.br",
    description:
      "Hub cultural cross-media com IA, no ar desde 2025. Unifica 5 rastreadores (Letterboxd, Backloggd, Goodreads/Skoob, MyAnimeList/AniList, Last.fm/Discogs) numa única plataforma. Catálogo de Filmes, Séries, Animes, Mangás, Manhwas, Livros, Jogos, Músicas e HQs. Oráculo IA faz recomendações transmídia cruzando gostos entre mídias diferentes. Feed de comunidade em tempo real. LGPD compliant. Backend 100% em Cloudflare Workers com D1 (SQLite nativo) e KV para cache. Construído com auxílio de IA enquanto aprendia React.",
    stack: [
      "Cloudflare Workers",
      "D1",
      "KV",
      "React",
      "TVmaze",
      "TheTVDB",
      "Kitsu",
    ],
    icon: Sparkles,
    url: "https://universelist.app.br/",
  },
  {
    id: "wisp-db",
    title: "wisp-db",
    description:
      "Cliente SQL desktop nativo (Wails + Go + React/Monaco). Suporta PostgreSQL, SQLite, MySQL 8+ e MariaDB. Multi-tab isolado, streaming real com cursor, autocomplete de SQL, grid com copy as CSV/INSERT/Markdown. ~160MB RAM idle — DBeaver-level productivity sem JVM/Electron. ADRs documentam decisões de arquitetura.",
    stack: ["Go", "Wails", "React", "TypeScript", "Monaco Editor", "SQL"],
    icon: Database,
    repo: "https://github.com/matheusbbdutra/wisp-db",
  },
  {
    id: "agent-sync",
    title: "agent-sync",
    description:
      "CLI em Go que versiona, mantém e sincroniza Global Rules, Skills, Agents e Tools entre 5 CLIs (Claude Code, Codex, Gemini CLI, OpenCode, Cursor). Inclui 51 skills (12 authored em PT-BR), 12 agents especializados e ferramentas Go de baixo-token (ast-outline, trace-strip, db-guardian). Documentação bilíngue e ADRs.",
    stack: ["Go", "Claude Code", "MCP", "Cursor", "OpenCode", "Codex"],
    icon: Repeat,
    repo: "https://github.com/matheusbbdutra/agent-sync",
  },
];

export const supportProjectIcons = {
  sparkles: Sparkles,
  db: Database,
  sync: Repeat,
  box: Boxes,
};
