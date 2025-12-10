import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Supreme Petrochem",
  "Hanwha",
  "Formosa",
  "CGPC",
  "TPI Polene",
  "National Petro",
  "LG",
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-medium mb-6">
            Trusted Network
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Global & Regional Supply Partners
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver premium materials
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Double the partners for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 group"
                >
                  <div className="px-12 py-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 hover:bg-white/10 transition-all duration-300 min-w-[200px]">
                    <div className="text-center">
                      {/* Placeholder Logo */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-cyan/30 transition-colors">
                        <span className="text-2xl font-display font-bold text-white/40 group-hover:text-neon-cyan transition-colors">
                          {partner.charAt(0)}
                        </span>
                      </div>
                      <span className="text-white/70 font-medium group-hover:text-white transition-colors">
                        {partner}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Partner Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-white/70">
              Partnering with <span className="text-white font-semibold">7+</span> global brands
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
