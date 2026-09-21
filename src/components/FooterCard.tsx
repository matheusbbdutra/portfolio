import { profile } from "../data/profile";
import { BentoCard } from "./BentoCard";

export function FooterCard() {
  return (
    <BentoCard className="col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
          Disponível para
        </p>
        <p className="mt-1 text-sm text-[var(--color-fg)]">
          Backend Engineer Pleno · Tech Lead de squad · Projetos com Go/PHP
        </p>
      </div>
      <a
        href={profile.social.email}
        className="font-mono text-sm text-[var(--color-fg-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
      >
        {profile.email}
      </a>
    </BentoCard>
  );
}
