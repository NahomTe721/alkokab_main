import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const LEGAL = ["Privacy Policy", "Terms of Use", "Cookie Notice", "Modern Slavery Statement"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-surface-strong">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Alkokab Tech Solutions logo"
                width={214}
                height={220}
                loading="lazy"
                className="h-12 w-auto"
              />
              <span className="leading-none">
                <span className="block font-display text-[15px] font-extrabold tracking-tight text-primary">
                  ALKOKAB
                </span>
                <span className="eyebrow block text-[9px] text-accent-deep">Tech Solutions</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              A Dubai-headquartered partner delivering end-to-end solutions across technology,
              trade, finance and operations — supporting governments, institutions and development
              partners across GCC and African markets.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-border bg-card text-primary transition-colors duration-500 hover:border-accent hover:bg-accent-soft"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-accent-deep">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-[13.5px] text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <span>
                  Office 1204, Business Central Towers
                  <br />
                  Dubai Internet City, Dubai, UAE
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-deep" />
                <a href="tel:+97140000000" className="hover:text-primary">
                  +971 4 000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-deep" />
                <a href="mailto:info@alkokabtech.ae" className="hover:text-primary">
                  info@alkokabtech.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-6 lg:px-10">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Alkokab Tech Solutions LLC. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {LEGAL.map((l) => (
              <li key={l}>
                <a
                  href="#contact"
                  className="text-[12px] text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
