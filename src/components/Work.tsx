import Image from "next/image";
import { projects, type Project } from "@/lib/site";

const ExternalIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

/** Horizontal bars for work that has numbers instead of a screenshot. */
const Results = ({ results }: { results: NonNullable<Project["results"]> }) => {
  const max = Math.max(...results.rows.map((r) => r.score));

  return (
    <figure className="h-full flex flex-col justify-between gap-8 bg-ink rounded-2xl p-6 sm:p-8">
      <p className="text-sm font-medium text-white/70 leading-relaxed">
        {results.dataset}
      </p>
      <figcaption className="order-last text-xs text-white/40 leading-relaxed">
        {results.caption}
      </figcaption>
      <ul className="space-y-4 flex-1 flex flex-col justify-center">
        {results.rows.map((row, i) => (
          <li key={row.name}>
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span
                className={`text-sm truncate ${
                  i === 0 ? "text-white font-semibold" : "text-white/60"
                }`}
              >
                {row.name}
              </span>
              <span
                className={`text-sm font-mono tabular-nums ${
                  i === 0 ? "text-accent font-semibold" : "text-white/50"
                }`}
              >
                {row.score.toFixed(3)}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  i === 0 ? "bg-accent" : "bg-white/25"
                }`}
                style={{ width: `${(row.score / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
};

const Card = ({ project, index }: { project: Project; index: number }) => {
  const flip = index % 2 === 1;
  const href = project.links.find((l) => l.primary)?.href;

  return (
    <article className="reveal bg-surface border border-line rounded-[1.75rem] overflow-hidden">
      <div
        className={`grid lg:grid-cols-2 ${
          flip ? "lg:[&>*:first-child]:order-last" : ""
        }`}
      >
        {/* Visual */}
        <div className="bg-ground p-4 sm:p-6 lg:p-8 flex">
          {project.image ? (
            href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in a new tab`}
                className="zoom block w-full self-center relative aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-line"
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </a>
            ) : null
          ) : project.results ? (
            <Results results={project.results} />
          ) : null}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-9 lg:p-11 flex flex-col justify-center">
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="text-accent-strong">{project.kind}</span>
            <span aria-hidden="true" className="text-line">
              /
            </span>
            <span>{project.year}</span>
          </p>

          <h3 className="mt-3 text-2xl sm:text-[1.75rem] font-bold text-ink">
            {project.title}
          </h3>

          <p className="mt-3 text-lg text-ink-soft leading-relaxed">
            {project.summary}
          </p>

          <p className="mt-4 text-[0.975rem] text-muted leading-relaxed">
            {project.body}
          </p>

          <div className="mt-7 rounded-2xl bg-accent-soft border border-accent/15 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-strong">
              {project.outcome.label}
            </p>
            <p className="mt-1 text-base sm:text-lg font-semibold text-ink leading-snug">
              {project.outcome.value}
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 rounded-full bg-ground border border-line text-xs font-medium text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 min-h-[48px] px-6 rounded-full font-semibold text-sm transition-colors duration-200 ${
                  link.primary
                    ? "bg-ink text-white hover:bg-accent-strong"
                    : "border border-line text-ink hover:border-accent hover:text-accent-strong"
                }`}
              >
                {link.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <header className="reveal max-w-2xl mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink">
            Things I&apos;ve built and shipped
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Two live client projects and one research project — what the problem
            was, what I built, and what came out of it.
          </p>
        </header>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, i) => (
            <Card key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
