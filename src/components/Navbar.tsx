"use client";
import { useState, useEffect } from "react";
import { site } from "@/lib/site";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently crossing the upper third of the
  // viewport, so the nav reflects where you actually are on the page.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!els.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the menu — expected of anything that traps the viewport.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ground/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-display font-bold text-ink text-[0.95rem] tracking-tight"
            >
              <span
                aria-hidden="true"
                className="grid place-items-center w-8 h-8 rounded-lg bg-ink text-white text-xs font-bold"
              >
                AQ
              </span>
              {site.name}
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "true" : undefined}
                    className={`inline-flex items-center px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      active === s.id
                        ? "text-ink bg-accent-soft"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="ml-2">
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-ink text-white px-5 py-2.5 rounded-full hover:bg-accent-strong transition-colors duration-200"
                >
                  CV
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden -mr-2 p-3 rounded-xl text-ink hover:bg-line/60 transition-colors duration-200"
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-ground md:hidden flex flex-col">
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <span className="flex items-center gap-2.5 font-display font-bold text-ink text-[0.95rem]">
              <span
                aria-hidden="true"
                className="grid place-items-center w-8 h-8 rounded-lg bg-ink text-white text-xs font-bold"
              >
                AQ
              </span>
              {site.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              autoFocus
              className="-mr-2 p-3 rounded-xl text-ink hover:bg-line/60 transition-colors duration-200"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col p-5 gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[56px] px-4 rounded-xl font-display font-semibold text-xl text-ink hover:bg-surface transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center min-h-[56px] mt-4 bg-ink text-white rounded-xl font-semibold text-lg"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
