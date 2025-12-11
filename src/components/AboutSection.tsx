import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Boxes, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: "Since 1993", label: "Established" },
  { icon: Boxes, value: "7+", label: "Material Categories" },
  { icon: MapPin, value: "Pan-Delhi NCR", label: "Service Coverage" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-neon-cyan/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Vrion Global{" "}
              <span className="text-neon-cyan">(VGPL)</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 1993 by Shri Arun Kumar Bhaiya, Vrion Global – formerly 
                Silver Traders – has grown into a trusted supplier of high-quality 
                polymers and signage solutions in India.
              </p>
              <p>
                As part of the MLB Group, we serve converters, manufacturers and 
                signage companies across Delhi NCR with a strong commitment to 
                quality, reliability and customer trust.
              </p>
              <p>
                Our portfolio includes polymers, plastic films, digital printable 
                substrates and LED solutions for a wide range of industrial and 
                commercial applications.
              </p>
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop"
                alt="Industrial polymer manufacturing"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <p className="text-sm text-muted-foreground">
                    State-of-the-art polymer distribution serving industries across Delhi NCR
                  </p>
                </div>
              </div>
            </div>

            {/* Background Card */}
            <div className="absolute inset-4 bg-gradient-to-br from-neon-cyan/10 to-neon-green/10 rounded-3xl blur-2xl -z-10" />
            
            <div className="relative grid gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
