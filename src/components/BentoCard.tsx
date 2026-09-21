import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | "section";
  href?: string;
};

export function BentoCard({
  children,
  className = "",
  as = "div",
  href,
  ...rest
}: Props) {
  const Component = as as "div";
  return (
    <Component
      {...(href ? { href } : {})}
      {...rest}
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)] p-6",
        "transition-colors hover:bg-[var(--color-surface-hover)]",
        href ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}
