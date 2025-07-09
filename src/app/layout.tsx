import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbas Qadir - Web Designer & Developer",
  description:
    "Professional web designer and developer specializing in creating intuitive and engaging digital experiences. View my portfolio of projects and services.",
  keywords: [
    "web designer",
    "web developer",
    "UI/UX design",
    "frontend development",
    "portfolio",
  ],
  authors: [{ name: "Abbas Qadir" }],
  openGraph: {
    title: "Abbas Qadir - Web Designer & Developer",
    description:
      "Professional web designer and developer specializing in creating intuitive and engaging digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Abbas Qadir | Freelance Web Designer & Developer in UK</title>
        <meta
          name="description"
          content="Professional web designer and developer specializing in creating intuitive and engaging digital experiences. View my portfolio of projects and services."
        />
        <meta
          name="keywords"
          content="web designer, web developer, UI/UX design, frontend development, portfolio, freelance, Next.js, Tailwind CSS, UK"
        />
        <meta name="author" content="Abbas Qadir" />
        <meta
          property="og:title"
          content="Abbas Qadir | Freelance Web Designer & Developer in UK"
        />
        <meta
          property="og:description"
          content="Professional web designer and developer specializing in creating intuitive and engaging digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abbasq.com/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abbas Qadir | Freelance Web Designer & Developer in UK"
        />
        <meta
          name="twitter:description"
          content="Professional web designer and developer specializing in creating intuitive and engaging digital experiences."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://abbasq.com/" />
      </Head>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
