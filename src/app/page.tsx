import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import About from "@/components/About";
import MusicTicker from "@/components/MusicTicker";
import Projects from "@/components/Projects";
import Partner from "@/components/Partner";
import Testimonials from "@/components/Testimonials";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <About />
        <MusicTicker />
        <Projects />
        <Partner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
