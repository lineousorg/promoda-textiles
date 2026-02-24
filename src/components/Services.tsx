import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Factory, ClipboardCheck, Truck } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Sourcing & Material Selection",
    description:
      "Identifying ethical suppliers and high-quality, sustainable fabrics and components from our network of 30+ specialist factories.",
  },
  {
    icon: Palette,
    title: "Sampling & Validation",
    description:
      "Managing end-to-end sampling from prototype to final approval, reducing lead times and rework with expert technical review.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Production",
    description:
      "Overseeing efficient and quality-controlled production processes from start to finish with low MOQs from 500 units.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive inspection at each production stage ensuring your products meet the highest industry standards.",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description:
      "Managing global transport, warehousing, and distribution to reach your target markets efficiently and on schedule.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Fashion Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the initial spark of an idea to the final product on the
            market, Promoda supports every step of your brand's journey.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>

          {/* Timeline Items */}
          {services.map((service, index) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, {
              once: false,
              margin: "-50px 0px -50px 0px",
              amount: 0.3,
            });

            // All items alternate starting from left (even = left, odd = right)
            const isLeftSide = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                ref={itemRef}
                initial={{ opacity: 0, x: isLeftSide ? -40 : 40 }}
                animate={itemInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start mb-8 md:mb-10 last:mb-0`}
              >
                {/* Timeline Dot/Node */}
                <div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:translate-x-0 
                  w-3 h-3 rounded-full bg-primary z-10 shadow-sm
                  before:absolute before:content-[''] before:-inset-1 before:rounded-full before:bg-primary/20 before:animate-ping"
                ></div>

                {/* Content Card */}
                <div
                  className={`w-full ml-16 md:ml-0 md:w-5/12 ${
                    isLeftSide ? "md:pr-1 md:mr-auto" : "md:pl-1 md:ml-auto"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={itemInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                    className="bg-card border border-border rounded-xl p-5 card-elevated relative group hover:border-primary/30 transition-colors duration-300"
                  >
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty Space for Alternating Layout on Desktop */}
                <div
                  className={`hidden md:block ${isLeftSide ? "md:w-2/12" : ""}`}
                ></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 pt-6"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your fashion vision to life?
            <span className="text-primary font-medium ml-2 hover:underline cursor-pointer transition-all">
              Let's start your journey →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
