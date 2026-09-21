import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function ExperienceCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-7 flex flex-col gap-6">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        Experiência · {profile.experience[0].company}
      </div>

      <ol className="flex flex-col gap-6">
        {profile.experience.map((role, idx) => (
          <li key={`${role.role}-${idx}`} className="relative pl-6">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-2 w-2 rounded-full bg-white/60"
            />
            {idx < profile.experience.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[3px] top-4 h-[calc(100%+1rem)] w-px bg-white/10"
              />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-[var(--color-fg)]">
                {role.role}
              </h3>
              <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                {role.period}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
              {role.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm leading-relaxed text-[var(--color-fg-muted)]"
                >
                  · {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </BentoCard>
  );
}
