import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-foreground py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-4xl">
          Ready to upgrade your everyday?
        </h2>
        <p className="max-w-xl text-lg text-background/70">
          Join thousands of customers who&apos;ve made the switch. Free
          shipping over $50, 30-day returns, no questions asked.
        </p>
        <a
          href="#products"
          className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Shop the collection
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
