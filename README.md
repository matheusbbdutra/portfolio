# Portfolio — Matheus Dutra

Site portfólio pessoal (bento grid minimalista, preto e branco).

**Stack:** Vite 8 · React 19 · TypeScript · Tailwind CSS v4 · Lucide React
**Deploy:** Cloudflare Pages (build estático)

---

## Comandos

```bash
npm install        # instala dependências
npm run dev        # dev server em http://localhost:5173
npm run build      # gera dist/ pronto pra deploy
npm run preview    # serve dist/ localmente pra checar o build
npm run lint       # oxlint
```

---

## Estrutura

```
src/
├── components/        # cada card do bento é um componente
│   ├── BentoCard.tsx  # wrapper base usado por todos
│   ├── HeroCard.tsx
│   ├── StatsCard.tsx
│   ├── StackCard.tsx
│   ├── ProjectsCard.tsx
│   ├── ExperienceCard.tsx
│   ├── EducationCard.tsx
│   └── FooterCard.tsx
└── data/
    ├── profile.ts     # dados pessoais (extraídos do currículo)
    └── projects.ts    # lista de projetos em destaque
```

**Pra atualizar conteúdo (nome, cargo, projetos, experiência):**
mexa apenas nos arquivos em `src/data/`. O layout consome via `.map()` —
não precisa tocar em nenhum componente.

---

## Pendências conhecidas

- ~~**Quais projetos destacar**~~ — resolvido. São 3 projetos open-source /
  público: `universelist.app.br` (site no ar), `wisp-db` e `agent-sync`.
  Edite `src/data/projects.ts` se quiser mudar.
- ~~**Domínio `mdutra.dev.br`**~~ — resolvido. Domínio já está no Cloudflare,
  é só plugar via **Custom domains** no Pages (passo 3 do deploy acima).
- **Sem foto pessoal** — o hero usa um avatar de iniciais. Quando tiver
  foto, substitua o `<div>` com iniciais no `HeroCard.tsx` por um
  `<img>`. Tamanho sugerido: 80x80px, formato `.webp`.

---

## Deploy no Cloudflare Pages

> Domínio `mdutra.dev.br` já está no Cloudflare, então é só plugar.

### Setup único

1. **Suba o repo pro GitHub:**
   ```bash
   cd ~/Projects/portfolio
   git init
   git add .
   git commit -m "feat: portfolio inicial (bento grid)"
   gh repo create portfolio --public --source=. --remote=origin --push
   ```
   Se preferir privado: `gh repo create portfolio --private --source=. --remote=origin --push`.

2. **Conecte no Cloudflare Pages:**
   - Acesse https://dash.cloudflare.com/ → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
   - Selecione o repo `matheusbbdutra/portfolio`
   - **Build settings:**
     - Framework preset: **Vite**
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Node version: `24` (o `engines.node` no `package.json` exige `>=24`)
   - Clique em **Save and Deploy**
   - Primeira vez: recebe subdomínio `portfolio-xxx.pages.dev`

3. **Plugue o domínio `mdutra.dev.br`:**
   - No projeto Pages → **Custom domains** → **Set up a custom domain**
   - Digite `mdutra.dev.br` → Cloudflare configura DNS automático
   - (Opcional) adicione também `www.mdutra.dev.br` como redirect para `mdutra.dev.br`

4. **Pronto.** Próximos `git push` na `main` disparam deploy automático.

---

## Próximos passos opcionais (NÃO fazer agora)

- Adicionar foto pessoal no `HeroCard.tsx`
- Adicionar Open Graph image real (`og:image`) — gere um PNG 1200x630 do hero
- Adicionar screenshot dos projetos nos cards (se quiser mostrar preview visual)
- Considerar um blog (`src/content/`) se quiser adicionar produção de conteúdo
