import { Linkedin, Mail, MapPin } from "lucide-react";

const LEGAL = ["Privacy Policy", "Terms of Use", "Cookie Notice", "Modern Slavery Statement"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-surface-strong">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left — About */}
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
              trade, finance and operations — supporting governments, institutions and African markets.
            </p>
          </div>

          {/* Center — Contact icons */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-[13px] font-semibold text-muted-foreground">To contact us, use these options</h3>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/alkokab-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glow-gold flex h-12 w-12 items-center justify-center border border-border bg-card text-primary transition-colors duration-500 hover:border-accent hover:bg-accent-soft"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/971505312998"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="glow-gold flex h-12 w-12 items-center justify-center border border-border bg-card text-primary transition-colors duration-500 hover:border-accent hover:bg-accent-soft"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&su=&to=yusra.ali%40alkokabtech.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="glow-gold flex h-12 w-12 items-center justify-center border border-border bg-card text-primary transition-colors duration-500 hover:border-accent hover:bg-accent-soft"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right — Address */}
          <div>
            <h3 className="eyebrow text-accent-deep">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-[13.5px] text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                <span className="text-[14.5px] leading-relaxed">
                  Amber Gem Tower, Mezzanine Floor
                  <br />
                  Sheikh Khalifa Street
                  <br />
                  Ajman, United Arab Emirates
                </span>
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
