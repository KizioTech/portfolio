import { Navbar } from "@/components/Navbar";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

const Resume = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ResumeSection />
      </div>
      <Footer />
    </main>
  );
};

export default Resume;
