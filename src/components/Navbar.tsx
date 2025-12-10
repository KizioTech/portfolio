import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-hero p-0.5 shadow-soft group-hover:shadow-accent transition-all duration-300">
            <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="JM Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
          </div>
          <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            Josophat<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Button variant="accent" size="sm" asChild>
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-base font-medium transition-colors py-2",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="accent" size="sm" className="w-fit" asChild>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Let's Talk
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
