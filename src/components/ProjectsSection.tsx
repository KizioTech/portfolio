import { useState } from "react";
import { ExternalLink, Github, Rocket, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectCategories = [
  { id: "active", label: "Active Projects", icon: Rocket },
  { id: "development", label: "In Development", icon: Wrench },
];

const projects = [
  {
    id: 1,
    category: "active",
    title: "Survey Builder App",
    description:
      "A custom form design and field-data collection system integrated with statistical tools for comprehensive data analysis.",
    techStack: ["React", "Tailwind", "Firebase"],
    liveDemo: "#",
    github: "#",
    color: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    category: "development",
    title: "Mathematics Learning Platform",
    description:
      "An interactive platform for notes, LaTeX-based lessons, and problem-solving modules designed to make math accessible.",
    techStack: ["Next.js", "MathJax"],
    github: "#",
    color: "from-accent/20 to-primary/20",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("active");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-sm uppercase tracking-widest">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-secondary rounded-xl p-1.5 gap-1">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-card text-primary shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <category.icon size={16} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-elevated"
              >
                {/* Gradient Header */}
                <div
                  className={cn(
                    "h-32 bg-gradient-to-br flex items-center justify-center",
                    project.color
                  )}
                >
                  <div className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center text-2xl font-bold text-primary shadow-soft">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <Button variant="accent" size="sm" asChild>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
