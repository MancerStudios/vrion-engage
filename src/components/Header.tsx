import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import vgplLogo from "@/assets/vgpl-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Products", href: "#products" },
  { label: "Partners", href: "#partners" },
  { label: "Performance", href: "#performance" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-dark-bg/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src={vgplLogo} 
            alt="Vrion Global Pvt. Ltd." 
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="relative px-3 py-2 text-sm text-white/70 hover:text-white transition-colors group"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-green transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-bg font-semibold hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)] transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Brochure
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-bg/95 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="py-3 px-4 text-left text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="mt-4 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
