import { skillGroups } from "@/lib/site";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <header className="reveal max-w-2xl mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
            Technical skills
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink">
            What I work with
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Comfortable across the stack and on the command line — from building
            and deploying a production Next.js app to cleaning a dataset and
            benchmarking models in a notebook.
          </p>
        </header>

        <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="stagger bg-ground border border-line rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-surface border border-line text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
