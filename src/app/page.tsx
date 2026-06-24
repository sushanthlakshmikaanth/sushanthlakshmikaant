import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
