import Image from "next/image";
import { site, education, experience } from "@/lib/site";

type Entry = {
  period: string;
  title: string;
  org: string;
  note?: string;
};

const Timeline = ({ heading, entries }: { heading: string; entries: readonly Entry[] }) => (
  <div className="stagger">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
      {heading}
    </h3>
    <ol className="mt-5 space-y-6">
      {entries.map((e) => (
        <li key={e.title} className="relative pl-6 border-l-2 border-line">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent"
          />
          <p className="text-xs font-medium text-muted tabular-nums">{e.period}</p>
          <p className="mt-0.5 font-semibold text-ink">{e.title}</p>
          <p className="text-sm text-ink-soft">{e.org}</p>
          {e.note && (
            <p className="mt-2 text-sm text-muted leading-relaxed">{e.note}</p>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="reveal lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] max-w-sm rounded-[1.75rem] overflow-hidden bg-line">
              <Image
                src="/about.jpg"
                alt="A laptop on a café table showing browser developer tools open in responsive-design mode while building a site"
                fill
                sizes="(max-width: 1024px) 88vw, 384px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <header className="reveal">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
                About
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink">
                Graduate developer, already shipping
              </h2>
            </header>

            <div className="reveal mt-7 space-y-5 text-lg text-muted leading-relaxed">
              <p>
                I&apos;m a Computer Science graduate from Aston University,
                based in {site.location.replace(", UK", "")}. Alongside the
                degree I started{" "}
                <a
                  href="https://aqsites.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink font-medium link-underline"
                >
                  AQ Sites
                </a>
                , a small web studio — which means I&apos;ve spent two years
                doing the parts of the job that coursework doesn&apos;t cover:
                scoping work with real clients, making design calls, deploying
                to production, and then supporting what I shipped.
              </p>
              <p>
                On the engineering side I work mostly in TypeScript and React
                with Next.js, and in Python for anything data-shaped. My final
                year project was a full machine learning pipeline — benchmarking
                a neural network against gradient boosting on 51,000 telecom
                records, handling class imbalance without leaking across
                validation folds, and using SHAP to explain what the model had
                actually learned.
              </p>
              <p>
                I&apos;m looking for a graduate or junior developer role where I
                can keep building things that go in front of people.
              </p>
            </div>

            <div className="reveal mt-12 grid sm:grid-cols-2 gap-10">
              <Timeline heading="Education" entries={education} />
              <Timeline heading="Experience" entries={experience} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
