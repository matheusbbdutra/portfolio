import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function StackCard() {
  return (
    <BentoCard className="col-span-12 md:col-span-4 flex flex-col justify-between gap-6">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
        Stack principal
      </div>
      <div className="flex flex-wrap gap-2">
        {profile.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-[var(--color-fg)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
