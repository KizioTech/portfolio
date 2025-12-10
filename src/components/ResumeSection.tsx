import { Download, GraduationCap, Briefcase, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "Mathematics",
  "Programming",
  "Web Development",
  "Academic Writing",
  "Data Analysis",
  "Cryptography Basics",
];

const education = [
  {
    institution: "University of Malawi",
    program: "Bachelor of Science in Mathematics",
    year: "Current",
    description: "Focused on pure and applied mathematics with emphasis on data analysis and cryptography.",
  },
];

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    items: ["React", "JavaScript", "Python", "HTML/CSS", "LaTeX","Matlab", "SPSS","Excel","Stata", "PowerBI"],
  },
  {
    title: "Soft Skills",
    icon: Briefcase,
    items: ["Problem Solving", "Teaching", "Research", "Communication", "Time Management"],
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm uppercase tracking-widest">
              My Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Resume & <span className="text-gradient">Experience</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                    <div className="bg-card p-6 rounded-xl border border-border hover:shadow-soft transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {edu.institution}
                        </h4>
                        <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.program}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <div key={category.title} className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl text-primary-foreground shadow-elevated">
                <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Download My CV</h3>
                <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                  Get a comprehensive overview of my education, skills, and experiences in a downloadable format.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-foreground/10 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#" download>
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
