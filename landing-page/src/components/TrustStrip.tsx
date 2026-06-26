import { Truck, RotateCcw, ShieldCheck, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free shipping over $50" },
  { icon: RotateCcw, label: "30-day free returns" },
  { icon: ShieldCheck, label: "2-year warranty" },
  { icon: Leaf, label: "Responsibly sourced" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-muted/50" aria-label="Why shop with us">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon size={20} className="shrink-0 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-secondary">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
