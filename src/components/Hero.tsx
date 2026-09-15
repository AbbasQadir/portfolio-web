import Image from "next/image";
import { site } from "@/lib/site";

const facts = [
  { label: "Degree", value: "BSc (Hons) Computer Science, Aston" },
  { label: "Shipped", value: "Client sites live in production" },
  { label: "Focus", value: "Full-stack web · applied ML" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28"
    >
      {/* Soft accent wash behind the headline. Purely decorative, so it is
          hidden from assistive tech and cannot intercept pointer events. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* No scroll-reveal here: this is the first thing a visitor on
              mobile data needs to read, so it paints immediately. */}
          <div>
            <p className="animate-in inline-flex max-w-full items-center gap-2.5 text-sm font-medium text-ink-soft bg-surface border border-line rounded-full pl-3 pr-4 py-1.5">
              <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="min-w-0">
                Open to graduate developer roles · {site.location}
              </span>
            </p>

            <h1 className="animate-in animate-in-delay-1 mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-bold text-ink">
              I build software
              <br />
              that actually{" "}
              <span className="whitespace-nowrap">
                <span className="relative inline-block text-accent">
                  ships
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute left-0 -bottom-[0.12em] w-full h-2.5 text-accent/35"
                  >
                    <path
                      d="M2 9C46 3 154 3 198 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </span>
            </h1>

            <p className="animate-in animate-in-delay-2 mt-7 text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
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

            <dl className="animate-in animate-in-delay-3 mt-12 grid sm:grid-cols-3 gap-x-6 gap-y-5 border-t border-line pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink leading-snug">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-in animate-in-delay-2 order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/30"
              />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-[2rem] overflow-hidden bg-line">
                <Image
                  src="/portrait.jpg"
                  alt="Abbas Qadir"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 352px"
                  className="object-cover"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
