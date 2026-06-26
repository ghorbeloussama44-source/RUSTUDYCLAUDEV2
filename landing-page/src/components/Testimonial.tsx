import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="testimonial" className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
      <div className="flex justify-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={20} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="sr-only">Rated 5 out of 5 stars</p>

      <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
        &ldquo;I&apos;ve replaced almost everything I use daily with Aura. The
        quality is obvious the moment you pick it up.&rdquo;
      </blockquote>

      <figcaption className="mt-6 text-sm text-secondary">
        <span className="font-medium text-foreground">Maya Chen</span> — verified customer
      </figcaption>
    </section>
  );
}
