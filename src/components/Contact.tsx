"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Existing, already-activated FormSubmit token carried over from the previous
// version of this form. The /ajax/ variant returns JSON so a real failure can
// be told apart from a success instead of assuming.
const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/57a3d7f4fe7f7eb9b37e1f6519519c7f";

const inputClass =
  "w-full px-4 py-3.5 rounded-xl border border-line bg-ground text-ink placeholder:text-muted/70 focus:bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors duration-200 text-base";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const panelRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  // Height the panel occupied at the moment of submit. Holding it there means
  // swapping in the confirmation does not collapse the card and shift the page.
  // Measured on the panel itself, not the form: box-sizing is border-box, so a
  // min-height taken from the form would be short by the panel's padding.
  const [lockedHeight, setLockedHeight] = useState<number>();

  // Send focus to the confirmation so a keyboard or screen reader user lands
  // on the outcome rather than back at the top of the page.
  useEffect(() => {
    if (status === "sent") confirmationRef.current?.focus();
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio enquiry from ${form.name || "the site"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success !== "false") {
        setLockedHeight(panelRef.current?.offsetHeight);
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(result?.message || "Form submission failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-surface border-t border-line"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-strong">
              Contact
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink">
              Let&apos;s talk
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed max-w-md">
              Open to graduate and junior developer roles, and to freelance
              builds. Whether it&apos;s a role, a project or a question about
              something on this page — send it over and I&apos;ll reply.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-medium text-ink link-underline break-all"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Based in
                </dt>
                <dd className="mt-1 text-lg text-ink-soft">{site.location}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-full border border-line text-sm font-semibold text-ink hover:border-accent hover:text-accent-strong transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-full border border-line text-sm font-semibold text-ink hover:border-accent hover:text-accent-strong transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.007-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.243 2.873.12 3.176.769.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.479 5.921.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.216.695.825.577C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-full border border-line text-sm font-semibold text-ink hover:border-accent hover:text-accent-strong transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                CV
              </a>
            </div>
          </div>

          <div
            ref={panelRef}
            className={`reveal bg-ground border border-line rounded-[1.75rem] p-6 sm:p-9 ${
              status === "sent" ? "flex items-center justify-center" : ""
            }`}
            style={lockedHeight ? { minHeight: lockedHeight } : undefined}
          >
            {status === "sent" ? (
              <div
                ref={confirmationRef}
                tabIndex={-1}
                role="status"
                className="pop-in text-center max-w-sm outline-none"
              >
                <span className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-accent-soft border border-accent/20">
                  <svg
                    className="tick w-8 h-8 text-accent-strong"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>

                <h3 className="mt-6 text-2xl font-bold text-ink">
                  Message sent
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  Thanks for getting in touch — it&apos;s landed in my inbox and
                  I&apos;ll come back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setLockedHeight(undefined);
                    setStatus("idle");
                  }}
                  className="mt-7 inline-flex items-center justify-center min-h-[48px] px-6 rounded-full border border-line bg-surface text-sm font-semibold text-ink hover:border-accent hover:text-accent-strong transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-y`}
                    placeholder="A bit about the role or project…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full min-h-[56px] rounded-xl bg-ink text-white font-semibold hover:bg-accent-strong transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {/* A failure leaves the fields untouched — the message is
                    still in there and retyping it would be the worst outcome. */}
                <div aria-live="polite" className="empty:hidden">
                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm font-medium text-red-900"
                    >
                      Something went wrong. Please email me directly at{" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="underline break-all"
                      >
                        {site.email}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
