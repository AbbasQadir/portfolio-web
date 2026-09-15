import { site } from "@/lib/site";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: site.social.github },
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "AQ Sites", href: "https://aqsites.co.uk" },
    { label: "CV", href: site.cv },
  ];

  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="flex items-center gap-2.5 font-display font-bold text-white">
              <span
                aria-hidden="true"
                className="grid place-items-center w-8 h-8 rounded-lg bg-white/10 text-white text-xs font-bold"
              >
                AQ
              </span>
              {site.name}
            </p>
            <p className="mt-2 text-sm">
              {site.role} · {site.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-sm">
            © {year} {site.name}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium hover:text-white transition-colors duration-200 break-all"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
