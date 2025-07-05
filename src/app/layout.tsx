import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
