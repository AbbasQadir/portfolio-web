import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site, skillGroups } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const TITLE = `${site.name} — Software Developer`;
const DESCRIPTION =
  "BSc Computer Science graduate building production web applications and applied machine learning. Next.js, React, TypeScript and Python. Based in the West Midlands, UK.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: `%s — ${site.name}`,
  },
  description: DESCRIPTION,
  applicationName: site.name,
  keywords: [
    "Abbas Qadir",
    "software developer",
    "graduate software engineer",
    "computer science graduate",
    "Next.js developer",
    "React developer",
    "Python developer",
    "machine learning portfolio",
    "West Midlands developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: site.url,
    locale: "en_GB",
    siteName: site.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — software developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f8",
};

// Runs before the React bundle. Owns the whole reveal lifecycle so no content
// is ever hidden waiting on hydration — see globals.css.
const revealBootstrap = `
(function () {
  var d = document;
  d.documentElement.classList.add('js');
  function start() {
    var els = d.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add('is-visible');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }
  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: DESCRIPTION,
  image: `${site.url}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "West Midlands",
    addressCountry: "GB",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Aston University",
    sameAs: "https://www.aston.ac.uk/",
  },
  knowsAbout: skillGroups.flatMap((g) => [...g.items]),
  sameAs: [site.social.github, site.social.linkedin, "https://aqsites.co.uk"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${display.variable}`}>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
