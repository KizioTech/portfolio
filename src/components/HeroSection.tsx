import { Download, ArrowDown, Code2, BookOpen, PenTool, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const stats = [
    { label: "Active Projects", value: "3+", icon: Code2 },
    { label: "Years Experience", value: "2+", icon: TrendingUp },
    { label: "Publications", value: "5+", icon: BookOpen },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
     >
      {/* Professional Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float animation-delay-200" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-accent/60 rounded-full animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="mb-6 animate-fade-in-up">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-accent/50 text-accent">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for Projects
            </Badge>
          </div>

          {/* Profile Image with Logo */}
          <div className="mb-8 animate-fade-in-up animation-delay-100">
            <div className="w-36 h-36 mx-auto rounded-full bg-gradient-hero p-1 shadow-elevated hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-background to-secondary backdrop-blur flex items-center justify-center border-4 border-background overflow-hidden">
                <img
                  src="/portfolio/logo.svg"
                  alt="Josophat Makawa Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            <span className="text-foreground">Josophat</span>{" "}
            <span className="text-gradient">Makawa</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up animation-delay-300 font-medium">
            <span className="text-primary">Mathematics Student</span>
            <span className="mx-2 text-accent">·</span>
            <span>Full-Stack Developer</span>
            <span className="mx-2 text-accent">·</span>
            <span>Academic Writer</span>
          </p>

          {/* Enhanced intro */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-400 leading-relaxed">
            Passionate about solving complex problems through mathematics and technology.
            Building innovative solutions, conducting research, and sharing knowledge through
            writing and teaching.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-500">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-soft"
              >
                <stat.icon className="text-accent" size={20} />
                <div className="text-left">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="/projects">
                <Code2 className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <a href="/resume">
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={18} />
                Download CV
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="group">
              <a href="/contact">
                <PenTool className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
          <a
            href="/about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="text-xs font-medium uppercase tracking-widest group-hover:tracking-wider transition-all">
              Explore More
            </span>
            <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
