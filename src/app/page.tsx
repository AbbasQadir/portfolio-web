// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800" >
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}