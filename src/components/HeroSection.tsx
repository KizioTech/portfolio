import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float animation-delay-200" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent/60 rounded-full animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-hero p-1 shadow-elevated">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-4xl font-bold text-primary">
                KJ
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Kizio</span>{" "}
            <span className="text-gradient">Josh</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up animation-delay-200 font-medium">
            <span className="text-primary">Mathematics Student</span>
            <span className="mx-2 text-accent">·</span>
            <span>Developer</span>
            <span className="mx-2 text-accent">·</span>
            <span>Academic Writer</span>
            <span className="mx-2 text-accent">·</span>
            <span>Artist</span>
          </p>

          {/* Short intro */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            Exploring mathematics, building projects, writing ideas and sharing
            knowledge.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#resume">
                <Download className="mr-2" size={18} />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
