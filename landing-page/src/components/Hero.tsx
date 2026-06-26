import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32"
    >
      <div className="flex flex-col items-start gap-6 text-left">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-secondary">
          New season, new essentials
        </span>
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Everyday essentials, <span className="text-accent">made better.</span>
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-secondary">
          Thoughtfully designed pieces built from quality materials. No
          gimmicks, no markup — just things that last.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-200 ease-out hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Shop the collection
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#benefits"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Why Aura
          </a>
        </div>
      </div>

      <div
        className="relative aspect-square w-full rounded-2xl bg-muted"
        role="img"
        aria-label="Minimalist studio photo of an Aura product on a neutral background"
      >
        <div className="absolute inset-8 rounded-xl border border-border/60" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent" />
      </div>
    </section>
  );
}
