import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Layers, 
  Shield, 
  Settings, 
  Package, 
  Film, 
  Cylinder,
  Footprints,
  ChevronRight
} from "lucide-react";

const products = [
  {
    icon: Layers,
    name: "Polystyrene (PS)",
    applications: "Clear sheets, lighting profiles, medical disposables, caps, cutlery, food trays, packaging, blow-moulded bottles.",
    supplier: "Supreme Petrochem Ltd.",
    color: "cyan",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: Shield,
    name: "High Impact Polystyrene (HIPS)",
    applications: "Thermoformed packaging, beverage glasses, toys, electronics accessories, refrigerator components.",
    supplier: null,
    color: "green",
    image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=400&h=300&fit=crop",
  },
  {
    icon: Settings,
    name: "Speciality Polystyrene",
    applications: "AC parts, camera parts, pen barrels, refrigerator liners, fatty food packaging.",
    supplier: null,
    color: "blue",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
  },
  {
    icon: Package,
    name: "Polypropylene (PP)",
    applications: "Containers, pipes, packaging films, medical disposables, household products.",
    supplier: null,
    color: "cyan",
    image: "https://images.unsplash.com/photo-1586528116022-8e3d3f1c4c94?w=400&h=300&fit=crop",
  },
  {
    icon: Film,
    name: "LDPE",
    applications: "Flexible packaging, lamination films, tubing, bags, soft containers.",
    supplier: null,
    color: "green",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop",
  },
  {
    icon: Cylinder,
    name: "PVC",
    applications: "Shoe materials, pipes, rigid films.",
    supplier: null,
    color: "blue",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  },
  {
    icon: Footprints,
    name: "EVA",
    applications: "Shoe midsoles, foam sheets, clinging films.",
    supplier: null,
    color: "cyan",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
];

const colorMap = {
  cyan: "from-neon-cyan to-neon-cyan/50",
  green: "from-neon-green to-neon-green/50",
  blue: "from-neon-blue to-neon-blue/50",
};

const textColorMap = {
  cyan: "text-neon-cyan",
  green: "text-neon-green",
  blue: "text-neon-blue",
};

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(185_100%_50%_/_0.03)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-medium mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Products & Applications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium polymer materials engineered for diverse industrial applications
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl bg-card border border-border transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index
                    ? "border-transparent shadow-xl scale-105 z-10"
                    : "hover:border-border/80"
                }`}
              >
                {/* Gradient Border on Hover */}
                {hoveredIndex === index && (
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorMap[product.color as keyof typeof colorMap]} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-2xl bg-card" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Product Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    {/* Icon overlay */}
                    <div
                      className={`absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[product.color as keyof typeof colorMap]} p-[1px] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-[11px] bg-card/90 backdrop-blur-sm flex items-center justify-center">
                        <product.icon
                          className={`w-6 h-6 ${textColorMap[product.color as keyof typeof textColorMap]}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Name */}
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                      {product.name}
                    </h3>

                    {/* Applications */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                      {product.applications}
                    </p>

                    {/* Supplier Badge */}
                    {product.supplier && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium">
                        <span>Supplier:</span>
                        <span className="text-foreground/80">{product.supplier}</span>
                      </div>
                    )}
                  </div>

                  {/* View More Arrow */}
                  <motion.div
                    className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5 text-neon-cyan" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
