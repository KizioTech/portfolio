import { Heart, Github, Linkedin, Mail, ArrowUp, Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/KizioTech", 
      label: "GitHub",
      color: "hover:bg-[#333] hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/josophat-makawa-abaa21366/", 
      label: "LinkedIn",
      color: "hover:bg-[#0077B5] hover:text-white"
    },
    { 
      icon: Facebook, 
      href: "https://web.facebook.com/josophat.chifundo.makawa", 
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:text-white"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/kiziojosh/", 
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/265999978828", 
      label: "WhatsApp",
      color: "hover:bg-[#25D366] hover:text-white"
    },
    { 
      icon: Mail, 
      href: "mailto:makawacean6@gmail.com", 
      label: "Email",
      color: "hover:bg-accent hover:text-accent-foreground"
    },
    { 
      icon: Send, 
      href: "https://t.me/KizioJosh", 
      label: "Telegram",
      color: "hover:bg-[#0088cc] hover:text-white"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pattern Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        
        {/* Accent Glow Effects */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-primary p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <img
                      src="/portfolio/logo.svg"
                      alt="JM Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Josophat Makawa
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mathematics student, developer, and academic writer passionate about solving complex problems through technology and research.
              </p>
              
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Projects", path: "/projects" },
                  { label: "Resume", path: "/resume" },
                  { label: "Contact", path: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect With Me
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-accent/50 flex items-center justify-center text-muted-foreground transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Let's collaborate on your next project
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Josophat Makawa.</span>
              <span className="hidden md:inline text-border">|</span>
              <span>All rights reserved.</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-accent/10"
            >
              <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
