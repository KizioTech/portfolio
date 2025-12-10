import { useState } from "react";
import { ExternalLink, Github, Rocket, Wrench, BookOpen, Music, Sprout, Shirt, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectCategories = [
  { id: "active", label: "Active Projects", icon: Rocket },
  { id: "development", label: "In Development", icon: Wrench },
];

const projects = [
  // Active Projects
  {
    id: 1,
    category: "active",
    title: "JMC | Academics and Academic Resources",
    description:
      "Comprehensive academic platform providing educational resources, study materials, and learning tools for mathematics and related subjects. Features organized content delivery and resource management for students and educators.",
    techStack: ["React", "Netlify", "JavaScript", "CSS"],
    liveDemo: "https://jmcacademics.netlify.app/",
    github: "https://github.com/KizioTech/jmcmath.git",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: BookOpen,
  },
  {
    id: 2,
    category: "active",
    title: "Sing Unto The Lord",
    description:
      "Digital hymnal and worship resource platform providing access to Christian songs, lyrics, and worship materials. Designed to enhance worship experiences and make spiritual resources easily accessible to congregations and individuals.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveDemo: "https://kiziotech.github.io/singuntothelord/",
    github: "https://github.com/KizioTech/singuntothelord.git",
    color: "from-purple-500/20 to-pink-500/20",
    icon: Music,
  },
  
  // Projects in Development
  {
    id: 3,
    category: "development",
    title: "Mlimi Anyamuke Initiative",
    description:
      "Agricultural empowerment platform designed to support farmers with resources, information, and tools for sustainable farming practices. Aims to improve agricultural productivity and farmer livelihoods through technology.",
    techStack: ["React", "Node.js", "Database", "API Integration"],
    github: "https://github.com/KizioTech/MlimiAnayamuke.git",
    color: "from-green-500/20 to-emerald-500/20",
    icon: Sprout,
    status: "In Progress",
  },
  {
    id: 4,
    category: "development",
    title: "Mountain Fashion Magazine",
    description:
      "Digital fashion magazine platform showcasing trends, styles, and fashion content. Features article management, image galleries, and responsive design for modern fashion media presentation.",
    techStack: ["React", "CSS", "Content Management", "Responsive Design"],
    github: "https://github.com/KizioTech/mountainmagazine.git",
    color: "from-orange-500/20 to-red-500/20",
    icon: Shirt,
    status: "In Progress",
  },
  {
    id: 5,
    category: "development",
    title: "Zomba Emergency Vehicle Routing System",
    description:
      "Smart routing system for emergency vehicles in Zomba, optimizing response times and route planning. Utilizes mapping technology and algorithms to improve emergency service delivery and save lives.",
    techStack: ["React", "Mapping APIs", "Routing Algorithms", "Real-time Data"],
    github: "https://github.com/KizioTech/zomba-route-aid.git",
    color: "from-red-500/20 to-rose-500/20",
    icon: Ambulance,
    status: "In Progress",
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
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of projects showcasing my work in mathematics, software development, and research
            </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-elevated"
              >
                {/* Gradient Header with Icon */}
                <div
                  className={cn(
                    "h-32 bg-gradient-to-br flex items-center justify-center relative",
                    project.color
                  )}
                >
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-card/90 backdrop-blur rounded-full text-xs font-medium text-accent border border-accent/30">
                        {project.status}
                      </span>
                    </div>
                  )}
                  <div className="w-20 h-20 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
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
                      <Button variant="accent" size="sm" asChild className="group/btn">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild className="group/btn">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="group-hover/btn:scale-110 transition-transform" />
                        {project.liveDemo ? "GitHub" : "View Code"}
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
