import { ReactNode } from "react";
import GradientBackground from "@/components/ui/GradientBackground";

type LegalHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
};

export function LegalHero({ eyebrow, title, description, lastUpdated }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GradientBackground variant="soft" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="mb-5 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-rose-700">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-plum-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-plum-400">
          {description}
        </p>
        <p className="mt-4 text-sm font-medium text-plum-400">
          Last updated: {lastUpdated}
        </p>
      </div>
    </section>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 border-b border-rose-100 py-10 last:border-none">
      <h2 className="font-display text-2xl font-bold tracking-tight text-plum-900 sm:text-[1.7rem]">
        {title}
      </h2>
      <div className="prose-legal mt-4 space-y-4 text-[15px] leading-relaxed text-plum-600">
        {children}
      </div>
    </div>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="glass rounded-4xl px-7 py-2 shadow-glass sm:px-12">{children}</div>
      </div>
    </section>
  );
}
