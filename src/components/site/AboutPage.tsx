import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

type AboutId =
  | "overview"
  | "company-overview"
  | "our-presence"
  | "careers"
  | "technology-transformation"
  | "logistics"
  | "sourcing"
  | "supply-chain-finance";

type AboutRoute =
  | "/about/overview"
  | "/about/company-overview"
  | "/about/our-presence"
  | "/about/careers"
  | "/about/technology-transformation"
  | "/about/logistics"
  | "/about/sourcing"
  | "/about/supply-chain-finance";

type AboutPage = {
  id: AboutId;
  path: AboutRoute;
  title: string;
  kicker: string;
  description: string;
  image: string;
  sections: {
    heading: string;
    intro?: string;
    points?: { label: string; items: string[] };
    steps?: { label: string; items: string[] };
  }[];
};

const PAGES: AboutPage[] = [
  {
    id: "overview",
    path: "/about/overview",
    title: "About Alkokab Tech",
    kicker: "Connecting Expertise, Resources & Execution",
    description:
      "Headquartered in Dubai and connected to markets across Africa, Alkokab Tech integrates technology, sourcing, trade, logistics, finance, and operational capabilities to support organizations with complex business and project requirements.",
    image: hero1,
    sections: [
      {
        heading: "Our Experience",
        intro:
          "We support sourcing and procurement, supplier coordination, technology requirements, import and export activities, logistics, and project execution. Through our network of local and international partners, we facilitate the acquisition, movement, implementation, and delivery of products and services across multiple markets.",
      },
      {
        heading: "Where We Operate",
        points: {
          label: "",
          items: [
            "Dubai — Business & Coordination Hub: Managing international relationships, sourcing activities, partnerships, and regional operations.",
            "Africa — Market Access & Project Support: Connecting international resources with opportunities across African markets through reliable sourcing, logistics, technology, and operational coordination.",
          ],
        },
      },
    ],
  },
  {
    id: "technology-transformation",
    path: "/about/technology-transformation",
    title: "Technology Transformation",
    kicker: "Modernizing Operations Through Technology",
    description:
      "We support organizations in adopting new technologies, upgrading systems, and improving digital processes. Our approach covers the full transformation journey—from assessment and opportunity identification to implementation and long-term optimization.",
    image: hero2,
    sections: [
      {
        heading: "Key Areas of Support",
        points: {
          label: "",
          items: [
            "Digital Transformation",
            "System Modernization",
            "Process Automation",
            "Technology Integration",
            "Data & Digital Solutions",
            "Technology Infrastructure",
          ],
        },
      },
    ],
  },
  {
    id: "logistics",
    path: "/about/logistics",
    title: "Logistics",
    kicker: "Efficient Movement Across Borders & Markets",
    description:
      "Alkokab Tech simplifies complex supply chain requirements across the GCC, Africa, and international markets. We coordinate transportation partners, customs support, storage facilities, and delivery services to ensure dependable movement of goods.",
    image: hero3,
    sections: [
      {
        heading: "Capabilities",
        points: {
          label: "",
          items: [
            "International Shipping",
            "Import & Export Support",
            "Distribution & Delivery",
            "Cargo Monitoring",
          ],
        },
      },
      {
        heading: "Shipment Process",
        steps: {
          label: "",
          items: [
            "Shipment Planning",
            "Shipping & Border Processing",
            "Final Delivery",
          ],
        },
      },
    ],
  },
  {
    id: "sourcing",
    path: "/about/sourcing",
    title: "Sourcing",
    kicker: "Connecting You to Dependable Supply Sources",
    description:
      "We help businesses secure the products, equipment, and materials they require through trusted supply channels.",
    image: hero4,
    sections: [
      {
        heading: "Capabilities",
        points: {
          label: "",
          items: [
            "Supplier Research",
            "Supplier Verification",
            "Product & Material Procurement",
            "Price & Terms Negotiation",
            "Product Quality & Compliance",
            "Market & Cost Analysis",
          ],
        },
      },
      {
        heading: "Process",
        steps: {
          label: "",
          items: [
            "Requirement Assessment",
            "Market & Supplier Search",
            "Evaluation & Commercial Discussion",
            "Verification & Procurement",
          ],
        },
      },
    ],
  },
  {
    id: "supply-chain-finance",
    path: "/about/supply-chain-finance",
    title: "Supply Chain Finance",
    kicker: "Financing That Sustains Supply Chain Continuity",
    description:
      "We provide financial solutions that support procurement, supplier payments, and operational stability.",
    image: hero5,
    sections: [
      {
        heading: "Solutions",
        points: {
          label: "",
          items: [
            "Working Capital Support",
            "Invoice Financing",
            "Supplier Funding",
            "Structured Payment Solutions",
          ],
        },
      },
      {
        heading: "Operational Models",
        points: {
          label: "",
          items: [
            "Invoice Financing",
            "Early Payment Programs",
            "Supplier Capital Support",
            "Supply Chain Funding",
          ],
        },
      },
    ],
  },
  {
    id: "company-overview",
    path: "/about/company-overview",
    title: "Overview",
    kicker: "Company Overview",
    description:
      "Alkokab Tech Solutions is a Dubai-headquartered business solutions provider delivering integrated services across technology, trade, finance, and operations.",
    image: hero2,
    sections: [
      {
        heading: "Who We Are",
        intro:
          "We combine technical, commercial, and operational capabilities to support organizations with complex business and project requirements. Our multidisciplinary approach ensures every engagement is managed with clarity, precision, and accountability.",
      },
      {
        heading: "What We Do",
        points: {
          label: "",
          items: [
            "Technology solutions and digital transformation",
            "Sourcing and procurement",
            "Import and export activities",
            "Supply chain support and logistics",
            "Financing solutions",
            "Consulting and business support",
            "Marketing and communication",
          ],
        },
      },
      {
        heading: "Our Mission",
        intro:
          "To simplify complex requirements, connect the right expertise, and deliver solutions that generate measurable value for our clients and partners.",
      },
    ],
  },
  {
    id: "our-presence",
    path: "/about/our-presence",
    title: "Our Presence",
    kicker: "Operating Across Regions",
    description:
      "Headquartered in Dubai with strong access across African markets, Alkokab Tech connects clients with suppliers, partners, and opportunities across regional and global ecosystems.",
    image: hero3,
    sections: [
      {
        heading: "Dubai — Business & Coordination Hub",
        intro:
          "Managing international relationships, sourcing activities, partnerships, and regional operations from our headquarters in Dubai Internet City.",
      },
      {
        heading: "Africa — Market Access & Project Support",
        intro:
          "Connecting international resources with opportunities across African markets through reliable sourcing, logistics, technology, and operational coordination.",
        points: {
          label: "",
          items: [
            "East Africa — strong presence and active engagement",
            "West Africa — growing market participation",
            "Central Africa — project-based delivery",
            "North Africa — trade and sourcing connections",
          ],
        },
      },
      {
        heading: "Global Reach",
        intro:
          "Through international partnerships and a coordinated delivery network, we support multi-country projects that span GCC, African, and global markets.",
      },
    ],
  },
  {
    id: "careers",
    path: "/about/careers",
    title: "Careers",
    kicker: "Join Our Team",
    description:
      "We are always looking for talented people who thrive on execution — professionals across technology, trade, logistics, and finance who want to turn complex initiatives into delivered projects.",
    image: hero4,
    sections: [
      {
        heading: "Why Alkokab Tech",
        points: {
          label: "",
          items: [
            "Work on large-scale projects that make a measurable difference",
            "Multidisciplinary roles across technology, trade, sourcing, and logistics",
            "A collaborative environment built around delivery and follow-through",
            "Opportunities across GCC and African markets",
          ],
        },
      },
      {
        heading: "Areas of Opportunity",
        points: {
          label: "",
          items: [
            "Technology & Digital Transformation",
            "Sourcing & Procurement",
            "Logistics & Supply Chain",
            "Finance & Commercial Operations",
            "Consulting & Business Development",
            "Marketing & Communications",
          ],
        },
      },
      {
        heading: "How to Apply",
        intro:
          "Send your CV and a brief cover letter to careers@alkokabtech.ae. We review applications on a rolling basis and will reach out to suitable candidates for an interview.",
      },
    ],
  },
];

const OTHER_ABOUTS = [
  { id: "overview" as AboutId, path: "/about/overview" as AboutRoute, kicker: "Company Overview", title: "About Alkokab Tech" },
  { id: "company-overview" as AboutId, path: "/about/company-overview" as AboutRoute, kicker: "Overview", title: "Overview" },
  { id: "our-presence" as AboutId, path: "/about/our-presence" as AboutRoute, kicker: "Regions", title: "Our Presence" },
  { id: "careers" as AboutId, path: "/about/careers" as AboutRoute, kicker: "Careers", title: "Careers" },
];

function AboutHero({ page }: { page: AboutPage }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary pt-20">
      <motion.img
        key={page.id}
        src={page.image}
        alt={page.title}
        width={1920}
        height={1088}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 1.1, ease: EASE }, scale: { duration: 2, ease: EASE } }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-accent">
            {page.kicker}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl lg:text-[4.2rem]">
            {page.title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {page.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-foreground transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-primary-foreground/70 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors duration-500 hover:border-gold hover:text-accent"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutContent({ page }: { page: AboutPage }) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative"
          >
            <img
              src={page.image}
              alt={page.title}
              width={1920}
              height={1088}
              loading="lazy"
              className="relative h-[380px] w-full object-cover shadow-lift lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="eyebrow text-accent">{page.kicker}</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-primary-foreground sm:text-3xl">
                {page.title}
              </h3>
            </div>
          </motion.div>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="bg-card p-8 transition-colors duration-500 hover:bg-accent-soft"
              >
                <h3 className="font-display text-lg font-bold text-primary">{section.heading}</h3>
                {section.intro && (
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                    {section.intro}
                  </p>
                )}
                {section.points && (
                  <ul className="mt-4 space-y-2.5">
                    {section.points.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.7} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="mt-4 space-y-3">
                    {section.steps.items.map((item, i) => (
                      <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-accent-soft text-[11px] font-bold text-accent-deep">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OtherAbouts({ current }: { current: AboutPage }) {
  const others = OTHER_ABOUTS.filter((a) => a.id !== current.id);
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="text-center">
          <span className="eyebrow text-accent-deep">Explore More</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-[2.4rem]">
            Other Pages
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {others.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="group bg-card p-7 transition-colors duration-500 hover:bg-accent-soft"
            >
              <Link to={a.path} className="block">
                <span className="eyebrow text-accent">{a.kicker}</span>
                <h3 className="mt-2 font-display text-xl font-extrabold text-primary">
                  {a.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-deep">
                  View Page
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPageComponent({ id }: { id: AboutId }) {
  const page = PAGES.find((p) => p.id === id) ?? PAGES[0]!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero page={page} />
        <AboutContent page={page} />
        <OtherAbouts current={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
