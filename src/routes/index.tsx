import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Malta VAT EXO Number Compliance — Independent VAT System Audits",
      },
      {
        name: "description",
        content:
          "Independent VAT system audits and the compliance certificate Maltese businesses need to apply for an EXO number with the VAT Department.",
      },
      {
        property: "og:title",
        content:
          "Malta VAT EXO Number Compliance — Independent VAT System Audits",
      },
      {
        property: "og:description",
        content:
          "The VAT compliance certificate your business needs for an EXO number — audited and issued independently in Malta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
      {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-64 -left-20 size-64 rounded-full bg-ink/10 blur-3xl"
        />

        <Header />

        <Hero />
        <CertificateCard />
        <Process />
        <About />
        <Services />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[440px] items-center justify-between px-5 py-4 md:max-w-3xl">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-md bg-ink ring-1 ring-black/5">
            <span className="font-mono text-[11px] font-medium tracking-tight text-white">
              M·V
            </span>
          </div>
          <div className="text-left leading-none">
            <p className="text-sm font-extrabold tracking-tight">
              Malta VAT EXO
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-soft">
              Number Compliance
            </p>
          </div>
        </a>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white ring-1 ring-black/5 transition-colors duration-200 hover:bg-brand"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[440px] px-5 pt-8 pb-6 md:max-w-3xl">
      <SectionLabel>(a) Independent VAT system auditor</SectionLabel>
      <h1 className="mt-4 animate-[rise_0.5s_cubic-bezier(0.32,0.72,0,1)_both] text-[2.1rem] leading-[1.02] font-extrabold tracking-tight text-balance md:text-5xl">
        The certificate that unlocks your{" "}
        <span className="text-brand">EXO number</span>.
      </h1>
      <p className="mt-4 max-w-[34ch] animate-[rise_0.5s_cubic-bezier(0.32,0.72,0,1)_0.12s_both] text-[15px] leading-relaxed text-pretty text-ink-soft md:max-w-[52ch] md:text-lg">
        I audit your VAT system and issue the compliance certificate the
        Maltese VAT Department requires to grant your business an EXO (exempt)
        number.
      </p>
      <div className="mt-6 flex animate-[rise_0.5s_cubic-bezier(0.32,0.72,0,1)_0.18s_both] flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="#contact"
          className="sheen relative overflow-hidden rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-black/5 transition-colors duration-200 hover:bg-brand"
        >
          Request a certificate
        </a>
        <a
          href="#process"
          className="rounded-full border border-line px-4 py-3 text-center text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink"
        >
          How it works
        </a>
      </div>
    </section>
  );
}

function CertificateCard() {
  return (
    <section className="mx-auto max-w-[440px] px-5 pb-10 md:max-w-3xl">
      <div className="glass relative overflow-hidden rounded-2xl p-5 ring-1 ring-black/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-brand/10 blur-2xl"
        />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
              VAT Compliance Certificate
            </p>
            <p className="mt-1 text-lg font-bold tracking-tight">
              System audit — passed
            </p>
          </div>
          <div className="grid size-12 shrink-0 animate-[stamp_0.6s_cubic-bezier(0.32,0.72,0,1)_0.4s_both] place-items-center rounded-md border-2 border-brand text-brand">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.1em]">
              Verified
            </span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-soft">
              Ref
            </p>
            <p className="mt-1 font-mono text-xs font-medium">MT-EXO-2049</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-soft">
              Directive
            </p>
            <p className="mt-1 font-mono text-xs font-medium">EU 2006/112</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-ink-soft">
              Status
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-brand">
              Issued
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-paper-2 px-4 py-3 ring-1 ring-black/5">
        <div className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-white">
          <span className="font-mono text-[9px]">M</span>
        </div>
        <p className="text-[13px] leading-snug text-ink-soft">
          Independent practice · One auditor, start to certificate · Valletta,
          Malta
        </p>
      </div>
    </section>
  );
}

const processSteps = [
  {
    title: "Enquiry & scoping",
    body: "We call, map your VAT system and confirm the EXO requirements that apply to your business.",
  },
  {
    title: "System audit",
    body: "I review your processes against EU VAT directives and Maltese VAT rules, then document the findings.",
  },
  {
    title: "Certificate & submission",
    body: "The signed compliance certificate is issued and filed with the VAT Department for your EXO number.",
  },
];

function Process() {
  return (
    <section id="process" className="border-y border-line bg-paper-2/60">
      <div className="mx-auto max-w-[440px] px-5 py-10 md:max-w-3xl">
        <SectionLabel>(b) How it works</SectionLabel>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-balance">
          Three steps to your EXO number
        </h2>
        <div className="mt-6 space-y-3">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-xl bg-white/70 p-4 ring-1 ring-black/5"
            >
              <span className="font-mono text-sm font-medium text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight">{step.title}</p>
                <p className="mt-1 text-[13px] leading-snug text-ink-soft">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-[440px] px-5 py-10 md:max-w-3xl">
      <SectionLabel>(c) The auditor</SectionLabel>
      <div className="mt-4 flex items-center gap-4">
        <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-ink ring-1 ring-black/5">
          <span className="font-mono text-lg font-medium text-white">BS</span>
        </div>
        <div>
          <p className="text-base font-bold tracking-tight">Bjorn Scicluna</p>
          <p className="mt-1 text-[13px] leading-snug text-ink-soft">
            Independent VAT system auditor based in Malta. A one-person
            practice, so you deal directly with the auditor who signs your
            certificate.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "VAT system audits",
    body: "End-to-end review of how your business captures, reconciles and reports VAT.",
  },
  {
    title: "EXO compliance certificates",
    body: "The independent certificate required to apply for an EXO number with the VAT Department.",
  },
  {
    title: "Ongoing compliance support",
    body: "Quarterly checks and a direct line to your auditor between filings.",
  },
];

function Services() {
  return (
    <section className="mx-auto max-w-[440px] px-5 pb-10 md:max-w-3xl">
      <SectionLabel>(d) Services</SectionLabel>
      <div className="mt-4 space-y-2.5">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl bg-white/70 p-4 ring-1 ring-black/5"
          >
            <p className="text-sm font-bold tracking-tight">{service.title}</p>
            <p className="mt-1 text-[13px] leading-snug text-ink-soft">
              {service.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// TODO: replace with the real business email before publishing.
const CONTACT_EMAIL = "enquiries@example.com.mt";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`EXO enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-[440px] px-5 pb-12 md:max-w-3xl">
      <div className="glass relative overflow-hidden rounded-2xl p-6 ring-1 ring-black/5">
        <SectionLabel>(e) Enquiry</SectionLabel>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-balance">
          Start your certificate
        </h2>
        <p className="mt-2 text-[13px] leading-snug text-ink-soft">
          Tell me a little about your business and I'll respond within one
          working day.
        </p>
        <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="enquiry-name"
              className="font-mono text-[10px] uppercase tracking-wider text-ink-soft"
            >
              Name
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-line bg-white/80 px-3 py-3 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label
              htmlFor="enquiry-email"
              className="font-mono text-[10px] uppercase tracking-wider text-ink-soft"
            >
              Email
            </label>
            <input
              id="enquiry-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.mt"
              className="mt-1 w-full rounded-lg border border-line bg-white/80 px-3 py-3 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label
              htmlFor="enquiry-message"
              className="font-mono text-[10px] uppercase tracking-wider text-ink-soft"
            >
              How can I help?
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="We're applying for an EXO number…"
              className="mt-1 w-full resize-none rounded-lg border border-line bg-white/80 px-3 py-3 text-sm outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-black/5 transition-colors duration-200 hover:bg-brand"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-[440px] px-5 py-8 md:max-w-3xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold tracking-tight">
            Malta VAT EXO Number Compliance
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            Valletta, Malta
          </p>
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
          Independent auditor · EU VAT directives 2006/112
        </p>
        <p className="mt-2 text-[11px] text-white/40">
          © {new Date().getFullYear()} Malta VAT EXO Number Compliance. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
