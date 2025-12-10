import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Headphones, ShieldCheck, Check } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "On-Site Service",
    features: [
      "Product inspection",
      "Application support",
      "Troubleshooting",
      "Installation guidance",
      "Material performance evaluation",
    ],
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Headphones,
    title: "Off-Site Service",
    features: [
      "Phone & video support",
      "Technical documentation",
      "Grade recommendations",
      "Process troubleshooting",
    ],
    gradient: "from-neon-green to-neon-cyan",
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Support",
    features: [
      "Replacement support",
      "Material audits",
      "Ongoing consultation",
      "Updates & availability notices",
    ],
    gradient: "from-neon-blue to-neon-green",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-medium mb-6">
            Support
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Service & Support You Can{" "}
            <span className="gradient-text">Rely On</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Comprehensive support at every stage of your journey with us
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}
              />

              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-dark-bg" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-neon-cyan" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative Corner */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 rounded-br-3xl bg-gradient-to-br ${service.gradient} opacity-5`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
