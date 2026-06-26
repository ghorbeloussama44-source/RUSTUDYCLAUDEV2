import { Gem, Wallet, Sparkles } from "lucide-react";

const BENEFITS = [
  {
    icon: Gem,
    title: "Built to last",
    description:
      "Premium materials and reinforced stitching, tested to outlast everyday use.",
  },
  {
    icon: Wallet,
    title: "Fair, transparent pricing",
    description:
      "We sell directly to you, so you pay for quality — not retail markup.",
  },
  {
    icon: Sparkles,
    title: "Designed with care",
    description:
      "Every detail is considered, from the stitch line to the packaging it ships in.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why people choose Aura
        </h2>
        <p className="mt-4 text-lg text-secondary">
          We obsess over the details so you don&apos;t have to think twice.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {BENEFITS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-start gap-4 rounded-2xl border border-border p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
              <Icon size={22} className="text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-secondary">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
