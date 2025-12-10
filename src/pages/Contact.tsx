import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        <SocialLinks />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
