import { Background } from "@/components/Background";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { SkillsSection } from "@/components/SkillsSection";
import { VideoSection } from "@/components/VideoSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <VideoSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}