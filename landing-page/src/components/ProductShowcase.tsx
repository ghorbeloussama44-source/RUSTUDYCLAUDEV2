import { Check } from "lucide-react";

const PRODUCTS = [
  {
    name: "The Everyday Tote",
    price: "$78",
    description:
      "A roomy, water-resistant tote built from recycled canvas — sized for a laptop, a notebook, and the rest of your day.",
    features: ["Water-resistant canvas", "Padded laptop sleeve", "Lifetime stitching guarantee"],
    reverse: false,
  },
  {
    name: "The Insulated Bottle",
    price: "$34",
    description:
      "Double-walled stainless steel that keeps drinks cold for 24 hours or hot for 12 — no sweat, no leaks.",
    features: ["24h cold / 12h hot", "Leak-proof lid", "BPA-free, recyclable steel"],
    reverse: true,
  },
];

function ProductVisual({ accentOnly }: { accentOnly?: boolean }) {
  return (
    <div
      className="relative aspect-[4/3] w-full rounded-2xl bg-muted md:aspect-square"
      role="img"
      aria-label="Studio photo of the product on a neutral background"
    >
      <div className="absolute inset-6 rounded-xl border border-border/60" />
      <div
        className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl ${
          accentOnly ? "border-2 border-accent" : "bg-accent/15"
        }`}
      />
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Best sellers
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Two staples our customers reach for every single day.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                product.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProductVisual accentOnly={product.reverse} />
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-lg leading-relaxed text-secondary">{product.description}</p>
                <ul className="flex flex-col gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                      <Check size={16} className="shrink-0 text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-xl font-semibold text-foreground">{product.price}</span>
                  <a
                    href="#top"
                    className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-200 ease-out hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
