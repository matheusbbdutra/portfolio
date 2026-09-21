import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function HeroCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-8 row-span-2 flex flex-col justify-between gap-8 p-8 md:p-10">
      <div className="flex items-center gap-3">
        <div
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-semibold text-black"
          aria-hidden="true"
        >
          {profile.shortName}
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
          {profile.role} · {profile.location.split(",")[0]}
        </span>
      </div>

      <div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--color-fg)] leading-[1.05]">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-fg-muted)]">
          {profile.summary}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={profile.social.email}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Entrar em contato
          <span aria-hidden>→</span>
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[var(--color-fg)] transition hover:border-white/40"
        >
          GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[var(--color-fg)] transition hover:border-white/40"
        >
          LinkedIn
        </a>
      </div>
    </BentoCard>
  );
}
