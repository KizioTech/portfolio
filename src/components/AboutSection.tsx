import { GraduationCap, Code, BookOpen, Palette } from "lucide-react";

const skills = [
  "Mathematics",
  "React",
  "JavaScript",
  "HTML/CSS",
  "LaTeX",
  "Python",
  "SPSS",
  "Excel",
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Mathematics Student",
    description: "BSc in Mathematics at University of Malawi",
  },
  {
    icon: Code,
    title: "Developer",
    description: "Building web applications and tools",
  },
  {
    icon: BookOpen,
    title: "Academic Writer",
    description: "Research and technical documentation",
  },
  {
    icon: Palette,
    title: "Artist",
    description: "Creative expression through various mediums",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm uppercase tracking-widest">
              Get to know me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Bachelor of Science in Mathematics student at the
                University of Malawi, passionate about{" "}
                <span className="text-primary font-medium">data analysis</span>,{" "}
                <span className="text-primary font-medium">cryptography</span>,{" "}
                <span className="text-primary font-medium">
                  web development
                </span>
                , academic writing, and art.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building tools, teaching, and exploring mathematical
                ideas. My goal is to bridge the gap between abstract
                mathematical concepts and practical applications that solve
                real-world problems.
              </p>

              {/* Skills */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground border border-border hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
