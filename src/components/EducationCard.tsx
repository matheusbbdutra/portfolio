import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function EducationCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-5 flex flex-col justify-between gap-6">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        Formação
      </div>
      <div>
        <h3 className="text-base font-semibold text-[var(--color-fg)]">
          {profile.education.course}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
          {profile.education.institution}
        </p>
        <p className="mt-2 font-mono text-xs text-[var(--color-fg-subtle)]">
          {profile.education.period}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-[var(--color-fg-muted)] border-t border-white/10 pt-4">
        {profile.bio}
      </p>
    </BentoCard>
  );
}
