import { HeroCard } from "./components/HeroCard";
import { StatsCard } from "./components/StatsCard";
import { StackCard } from "./components/StackCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { EducationCard } from "./components/EducationCard";
import { FooterCard } from "./components/FooterCard";

function App() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <header className="mb-10 flex items-center justify-between">
        <a
          href="/"
          className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
        >
          matheusdutra.dev
        </a>
        <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
          v0.1 · 2026
        </span>
      </header>

      <div className="grid grid-cols-12 auto-rows-min gap-4">
        <HeroCard />
        <StatsCard />
        <StackCard />
        <ProjectsCard />
        <ExperienceCard />
        <EducationCard />
        <FooterCard />
      </div>
    </main>
  );
}

export default App;
