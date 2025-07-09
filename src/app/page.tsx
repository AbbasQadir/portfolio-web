// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
