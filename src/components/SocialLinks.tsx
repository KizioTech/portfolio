import { Github, Linkedin, Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    platform: "GitHub",
    url: "#",
    icon: Github,
    color: "hover:bg-[#333] hover:text-primary-foreground",
  },
  {
    platform: "LinkedIn",
    url: "#",
    icon: Linkedin,
    color: "hover:bg-[#0077B5] hover:text-primary-foreground",
  },
  {
    platform: "Facebook",
    url: "#",
    icon: Facebook,
    color: "hover:bg-[#1877F2] hover:text-primary-foreground",
  },
  {
    platform: "Instagram",
    url: "#",
    icon: Instagram,
    color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-primary-foreground",
  },
  {
    platform: "WhatsApp",
    url: "#",
    icon: MessageCircle,
    color: "hover:bg-[#25D366] hover:text-primary-foreground",
  },
  {
    platform: "Email",
    url: "mailto:your@email.com",
    icon: Mail,
    color: "hover:bg-accent hover:text-accent-foreground",
  },
];

export function SocialLinks() {
  return (
    <section id="socials" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">
            Connect With Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-foreground">
            Let's Stay <span className="text-gradient">Connected</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border transition-all duration-300 hover:shadow-soft hover:scale-105 ${link.color}`}
              >
                <link.icon className="w-5 h-5 transition-colors" />
                <span className="font-medium text-sm">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
