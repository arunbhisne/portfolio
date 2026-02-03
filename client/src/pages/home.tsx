import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CompetenciesSection } from "@/components/competencies-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { RecognitionSection } from "@/components/recognition-section";
import { ProcessSection } from "@/components/process-section";
import { ToolsSection } from "@/components/tools-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <SkillsSection />
        <ProjectsSection />
        <RecognitionSection />
        <ProcessSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
