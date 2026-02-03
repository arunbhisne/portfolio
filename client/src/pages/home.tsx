import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CompetenciesSection } from "@/components/competencies-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ProcessSection } from "@/components/process-section";
import { ToolsSection } from "@/components/tools-section";
import { FeaturedSection } from "@/components/featured-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ToolsSection />
        <FeaturedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
