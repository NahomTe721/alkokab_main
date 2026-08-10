import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
const mark = "/logo.png";

const EASE = [0.16, 1, 0.3, 1] as const;

type NavItem = { label: string; to?: string; items: string[] };

const NAV: NavItem[] = [
  {
    label: "About Us",
    items: ["Overview", "Management Team", "Board of Directors", "Our Presence", "Careers"],
  },
  {
    label: "Services",
    to: "/services",
    items: [],
  },
  {
    label: "Solutions",
    items: ["Enterprise AI", "Cyber Security", "Data Centre", "Digital Printing", "Solar Energy"],
  },
  {
    label: "Brands",
    items: ["Global Vendors", "Distribution Portfolio", "Become a Partner"],
  },
  {
    label: "Contact Us",
    items: ["Dubai Headquarters", "Sales Enquiry", "Partner Desk", "Support"],
  },
];

const LINK_MAP: Record<string, string> = {
  // About Us
  "Overview": "/#about",
  "Management Team": "/#about",
  "Board of Directors": "/#about",
  "Our Presence": "/#contact",
  "Careers": "/#contact",
  
  // Solutions
  "Enterprise AI": "/services",
  "Cyber Security": "/services",
  "Data Centre": "/#apart",
  "Digital Printing": "/services",
  "Solar Energy": "/services",
  
  // Brands
  "Global Vendors": "/#apart",
  "Distribution Portfolio": "/services",
  "Become a Partner": "/#contact",
  
  // Contact Us
  "Dubai Headquarters": "/#contact",
  "Sales Enquiry": "/#contact",
  "Partner Desk": "/#contact",
  "Support": "/#contact",
};

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith("/#")) {
      const hash = target.substring(1); // e.g., "#about"
      if (window.location.pathname === "/") {
        e.preventDefault();
        setMobile(false);
        setOpen(null);
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      }
    } else if (target.startsWith("#")) {
      e.preventDefault();
      setMobile(false);
      setOpen(null);
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", target);
      }
    } else {
      // Normal routing navigation, just close drawer
      setMobile(false);
      setOpen(null);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={mark}
            alt="Alkokab Tech Solutions logo"
            width={214}
            height={220}
            className="h-12 w-auto lg:h-14"
          />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-extrabold tracking-tight text-primary">
              ALKOKAB
            </span>
            <span className="eyebrow block text-[9px] text-accent-deep">Tech Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center lg:flex">
          {NAV.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                onMouseEnter={() => setOpen(null)}
                className="px-4 py-7 text-[13.5px] font-semibold text-primary transition-colors duration-300 hover:text-accent-deep"
                activeProps={{ className: "text-accent-deep" }}
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label} onMouseEnter={() => setOpen(item.label)} className="relative">
                <button
                  className={`flex items-center gap-1.5 px-4 py-7 text-[13.5px] font-semibold transition-colors duration-300 ${
                    open === item.label ? "text-accent-deep" : "text-primary hover:text-accent-deep"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      open === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.34, ease: EASE }}
                      className="absolute left-0 top-full w-64 origin-top overflow-hidden rounded-sm border border-border bg-card shadow-lift"
                    >
                      <span className="block h-[3px] w-full bg-gold" />
                      <ul className="p-2">
                        {item.items.map((sub) => {
                          const href = LINK_MAP[sub] || "/#top";
                          return (
                            <li key={sub}>
                              <a
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className="block rounded-sm px-3 py-2.5 text-[13px] font-medium text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:bg-surface hover:text-primary"
                              >
                                {sub}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group inline-flex items-center gap-2 bg-primary px-5 py-3 text-[12.5px] font-bold text-primary-foreground transition-colors duration-300 hover:bg-primary-light"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            +971 4 000 0000
          </a>
        </div>

        <button
          className="text-primary lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <ul className="max-h-[70vh] overflow-y-auto px-5 py-3">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-border py-3 last:border-0">
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setMobile(false)}
                      className="font-display text-sm font-bold text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <p className="font-display text-sm font-bold text-primary">{item.label}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                        {item.items.map((sub) => {
                          const href = LINK_MAP[sub] || "/#top";
                          return (
                            <a
                              key={sub}
                              href={href}
                              onClick={(e) => handleNavClick(e, href)}
                              className="text-[12.5px] text-muted-foreground transition-colors hover:text-primary"
                            >
                              {sub}
                            </a>
                          );
                        })}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
