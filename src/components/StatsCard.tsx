import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function StatsCard() {
  return (
    <BentoCard className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col justify-between gap-4 sm:gap-6">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        Trajetória
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-fg)]">
            5
          </span>
          <span className="text-sm text-[var(--color-fg-subtle)]">anos</span>
        </div>
        <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
          {profile.stats.yearsLabel} — do suporte técnico ao backend pleno.
        </p>
      </div>
    </BentoCard>
  );
}
