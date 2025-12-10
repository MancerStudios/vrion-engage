import { motion } from "framer-motion";
import { Calendar, Globe, Warehouse, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  {
    icon: Calendar,
    title: "30+ Years of Expertise",
    animation: "pulse",
  },
  {
    icon: Globe,
    title: "Global Sourcing Network",
    animation: "rotate",
  },
  {
    icon: Warehouse,
    title: "Fast & Reliable Supply",
    animation: "slide",
  },
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
      
      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-green/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(185 100% 50% / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(185 100% 50% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm text-white/70">Part of the MLB Group • Established 1993</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Polymers That Power{" "}
            <span className="gradient-text">Possibilities</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Vrion Global Private Limited (VGPL), part of the MLB Group, is a leading 
            importer and distributor of polymers, plastic films, digital printable 
            substrates and LED solutions — trusted by industries since 1993.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="group bg-gradient-to-r from-neon-cyan to-neon-green text-dark-bg font-semibold px-8 py-6 text-lg hover:shadow-[0_0_40px_hsl(185_100%_50%/0.4)] transition-all duration-300"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              About Vrion Global
            </Button>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-neon-cyan/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-neon-cyan/20 rounded-xl blur-xl group-hover:bg-neon-cyan/40 transition-all" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/30 flex items-center justify-center">
                      {badge.animation === "rotate" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <badge.icon className="w-6 h-6 text-neon-cyan" />
                        </motion.div>
                      ) : badge.animation === "slide" ? (
                        <motion.div
                          animate={{ x: [-2, 2, -2] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="flex items-center gap-0.5"
                        >
                          <Warehouse className="w-4 h-4 text-neon-cyan" />
                          <Truck className="w-4 h-4 text-neon-green" />
                        </motion.div>
                      ) : (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <badge.icon className="w-6 h-6 text-neon-cyan" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <span className="text-white font-medium">{badge.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
