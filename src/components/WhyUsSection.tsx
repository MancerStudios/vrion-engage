import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, IndianRupee, Truck, Clock, Wrench, Headphones, Check } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous standards at every step",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description: "Value-driven solutions",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Reliable logistics network",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Expert guidance on demand",
  },
];

const commitments = [
  "Honouring contracts",
  "Consistent quality",
  "Competitive pricing",
  "Timely supply",
  "Complete logistics assistance",
  "Responsive technical guidance",
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(160_100%_45%_/_0.05)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 text-neon-green text-sm font-medium mb-6">
            Why Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">Vrion Global</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-neon-cyan/30 hover:shadow-xl transition-all duration-300 text-center">
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-flex mb-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                </motion.div>

                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-dark-bg to-dark-surface border border-white/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10 rounded-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
                Our Commitment to You
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <span className="text-white/80 text-sm">{commitment}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
