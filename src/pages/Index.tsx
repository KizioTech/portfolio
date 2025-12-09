import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { SocialLinks } from "@/components/SocialLinks";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <SocialLinks />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
