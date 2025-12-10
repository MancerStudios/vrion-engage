import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = [
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

const groupBrands = [
  { label: "MLB Group", href: "#" },
  { label: "Linea LED", href: "#" },
  { label: "Rhino Lux", href: "#" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-bg border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center font-display font-bold text-dark-bg text-xl">
                V
              </div>
              <div>
                <span className="font-display font-semibold text-white text-xl block">
                  Vrion Global
                </span>
                <span className="text-xs text-white/50">Private Limited</span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Part of the MLB Group — Import & distribution of polymers, 
              printable substrates & LED solutions. Trusted by industries since 1993.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-sm text-white/40">Serving Delhi NCR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/50 hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/50 hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white mt-8 mb-4">
              Group Brands
            </h4>
            <ul className="space-y-2">
              {groupBrands.map((brand) => (
                <li key={brand.label}>
                  <a
                    href={brand.href}
                    className="text-white/50 hover:text-neon-green transition-colors text-sm"
                  >
                    {brand.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2025 Vrion Global Private Limited. All Rights Reserved.
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan/30 hover:bg-white/10 transition-all"
          >
            <span className="text-sm text-white/50 group-hover:text-white transition-colors">
              Back to top
            </span>
            <ArrowUp className="w-4 h-4 text-neon-cyan" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
