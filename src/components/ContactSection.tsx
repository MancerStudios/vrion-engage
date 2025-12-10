import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const offices = [
  {
    type: "Corporate Office",
    address: "MLB House, Jhandewalan Extension, New Delhi – 110055",
    phone: "011-43537777",
    icon: Building2,
  },
  {
    type: "Registered Office",
    address: "3007, Bahadurgarh Road, Delhi – 110006",
    phone: "011-23537676",
    icon: MapPin,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-neon-cyan/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Reach Us
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Connect with our team for inquiries, partnerships, or support
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dark-surface to-dark-bg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-neon-cyan/30 mx-auto mb-4" />
                <p className="text-white/40 font-medium">New Delhi, India</p>
                <p className="text-white/30 text-sm">MLB House, Jhandewalan Extension</p>
              </div>
            </div>
            {/* Grid Overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(185 100% 50% / 0.1) 1px, transparent 1px),
                                 linear-gradient(to bottom, hsl(185 100% 50% / 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Office Cards */}
            {offices.map((office, index) => (
              <motion.div
                key={office.type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <office.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {office.type}
                    </h3>
                    <p className="text-white/60 mb-2">{office.address}</p>
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${office.phone}`} className="hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ x: 10 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-green/10 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-dark-bg" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@vrionglobal.com"
                    className="text-neon-cyan hover:underline text-lg"
                  >
                    info@vrionglobal.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-green text-dark-bg font-semibold py-6 hover:shadow-[0_0_40px_hsl(185_100%_50%/0.4)] transition-all duration-300"
              >
                Send an Inquiry
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
