import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { BentoCard } from "./BentoCard";

export function ProjectsCard() {
  const realProjects = projects.filter((p) => p.id !== "placeholder");

  return (
    <BentoCard className="col-span-12 flex flex-col gap-6 p-8 md:p-10">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
          Projetos em destaque
        </div>
        <span className="text-xs text-[var(--color-fg-subtle)]">
          {realProjects.length} open source
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {realProjects.map((project) => {
          const Icon = project.icon;
          const href = project.url ?? project.repo;
          const isExternal = !!href;
          const Wrapper = isExternal ? "a" : "div";
          const wrapperProps = isExternal
            ? {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <Wrapper
              key={project.id}
              {...(wrapperProps as Record<string, string>)}
              className="group/card relative flex flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-6 transition hover:border-white/25 hover:bg-black/60"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-[var(--color-fg)]">
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                </div>
                <ExternalLink
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--color-fg-subtle)] transition group-hover/card:text-[var(--color-fg)]"
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {project.description}
                </p>
              </div>
              {project.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-[var(--color-fg-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </BentoCard>
  );
}
