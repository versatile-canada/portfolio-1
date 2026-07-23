import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Statement from "@/components/Statement";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Statement />
        <Features />
        <Timeline />
        <Work />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
