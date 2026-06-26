import { Mail, MessageCircle, Share2 } from "lucide-react";

const SOCIALS = [
  { icon: Mail, label: "Email", href: "mailto:hello@aura.example" },
  { icon: MessageCircle, label: "Community", href: "#top" },
  { icon: Share2, label: "Share", href: "#top" },
];

const COLUMNS = [
  {
    title: "Shop",
    links: ["Best sellers", "New arrivals", "Gift cards"],
  },
  {
    title: "Support",
    links: ["Shipping & returns", "FAQ", "Contact us"],
  },
  {
    title: "Company",
    links: ["About", "Sustainability", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Aura</span>
            <p className="mt-3 max-w-xs text-sm text-secondary">
              Everyday essentials, made better.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-secondary transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-secondary transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
