import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To fulfil customer requirements with reliable products, efficient service and long-term partnership built on trust and dependability.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To establish enduring relationships with customers and suppliers through consistency, commitment and a continual focus on quality.",
    gradient: "from-neon-green to-neon-cyan",
  },
];

export const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-24 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-neon-cyan/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-neon-green/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-medium mb-6">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Mission & Vision
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} p-0.5`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-dark-bg flex items-center justify-center">
                      {card.title === "Our Mission" ? (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <card.icon className="w-8 h-8 text-neon-cyan" />
                        </motion.div>
                      ) : (
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 0px hsl(160 100% 45%)",
                              "0 0 20px hsl(160 100% 45%)",
                              "0 0 0px hsl(160 100% 45%)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="rounded-full"
                        >
                          <card.icon className="w-8 h-8 text-neon-green" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {card.description}
                </p>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.gradient} opacity-5 rounded-tr-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
