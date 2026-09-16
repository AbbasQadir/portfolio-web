import Image from "next/image";
import { site } from "@/lib/site";

const facts = [
  { label: "Degree", value: "BSc (Hons) Computer Science — Aston University" },
  { label: "Experience", value: "Two years freelance, client sites in production" },
  { label: "Stack", value: "TypeScript · React · Next.js · Python" },
];

const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Decorative texture only — hidden from assistive tech, and it cannot
          intercept pointer events. */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Both columns start on the same line, so the composition has a
            shared top edge instead of the photo floating. */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-start">
          {/* No scroll-reveal here: this is the first thing a visitor on
              mobile data needs to read, so it paints immediately. */}
          <div className="max-w-2xl">
            <p className="animate-in inline-flex max-w-full items-center gap-2.5 text-sm font-medium text-ink-soft bg-surface border border-line rounded-full pl-3 pr-4 py-1.5">
              <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="min-w-0">
                Open to graduate developer roles · {site.location}
              </span>
            </p>

            <h1 className="animate-in animate-in-delay-1 mt-7 text-[2.5rem] leading-[1.04] sm:text-[3.5rem] lg:text-[3.75rem] font-bold text-ink">
              I build software
              <br />
              that actually{" "}
              <span className="text-accent">ships.</span>
            </h1>

            <p className="animate-in animate-in-delay-2 mt-7 text-lg sm:text-xl text-muted leading-relaxed max-w-lg">
              Computer Science graduate running a web studio that puts real
              client sites into production — and taking machine learning
              projects from raw data through to results you can actually
              interpret.
            </p>

            <div className="animate-in animate-in-delay-3 mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-ink text-white font-semibold hover:bg-accent-strong transition-colors duration-200"
              >
                See my work
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </a>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-full bg-surface text-ink font-semibold border border-line hover:border-accent hover:text-accent-strong transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Text first in the DOM, so on a phone the headline and CTA sit
              above the fold and the photo follows rather than displacing them. */}
          <div className="animate-in animate-in-delay-2 justify-self-center lg:justify-self-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-ink opacity-100"
              />
              <div className="relative w-56 sm:w-72 lg:w-[20rem] aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-line">
                <Image
                  src="/portrait.jpg"
                  alt="Abbas Qadir"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width rail so the facts read as a footer to the whole hero
            rather than as a third thing inside the left column. */}
        <dl className="animate-in animate-in-delay-3 mt-14 md:mt-20 grid sm:grid-cols-3 gap-x-8 gap-y-6 border-t border-line pt-8">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                {f.label}
              </dt>
              <dd className="mt-2 text-[0.95rem] font-medium text-ink leading-snug">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
