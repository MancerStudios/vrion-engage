import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, Layers, HeadsetIcon } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Advanced Material Composition",
    description: "Cutting-edge polymer formulations",
    animation: "glow",
  },
  {
    icon: Shield,
    title: "Consistent Grade Performance",
    description: "Reliable quality across batches",
    animation: "morph",
  },
  {
    icon: Layers,
    title: "Optimized for Industrial Applications",
    description: "Precision-engineered solutions",
    animation: "stack",
  },
  {
    icon: HeadsetIcon,
    title: "Guided Technical Support",
    description: "Expert assistance on demand",
    animation: "bounce",
  },
];

export const PerformanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-neon-cyan/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-sm font-medium mb-6">
              Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Engineered for a{" "}
              <span className="gradient-text">New Standard</span>{" "}
              of Performance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vrion Global introduces a new-generation material offering developed 
              to meet the evolving demands of modern manufacturing. Built on advanced 
              polymer engineering and supported by MLB Group's long-standing industry 
              expertise, this product line delivers greater stability, durability and 
              application efficiency.
            </p>

            {/* Progress Bar Visual */}
            <div className="space-y-4">
              {[
                { label: "Material Quality", value: 98 },
                { label: "Supply Reliability", value: 95 },
                { label: "Customer Satisfaction", value: 97 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-neon-cyan font-semibold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.value}%` } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-green rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-neon-cyan/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Animated Icon */}
                <div className="mb-4">
                  {feature.animation === "glow" ? (
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px hsl(185 100% 50% / 0.3)",
                          "0 0 30px hsl(185 100% 50% / 0.5)",
                          "0 0 0px hsl(185 100% 50% / 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-neon-cyan" />
                    </motion.div>
                  ) : feature.animation === "morph" ? (
                    <motion.div
                      animate={{ borderRadius: ["30%", "50%", "30%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-neon-cyan" />
                    </motion.div>
                  ) : feature.animation === "stack" ? (
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-neon-cyan" />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-neon-cyan" />
                    </motion.div>
                  )}
                </div>

                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
