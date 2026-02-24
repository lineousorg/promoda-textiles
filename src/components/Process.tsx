import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import factoryImage from "@/assets/factory.jpg";

const steps = [
  {
    number: "01",
    title: "Brief & Discovery",
    description: "We understand your brand DNA, requirements, and target market to align our sourcing strategy.",
  },
  {
    number: "02",
    title: "Sampling & Development",
    description: "Our technicians manage prototype development, material sourcing, and iterative refinements.",
  },
  {
    number: "03",
    title: "Production & QC",
    description: "Full oversight of manufacturing with multi-stage quality inspections at certified facilities.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Comprehensive logistics management from factory floor to your warehouse, on time.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-muted/50">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={factoryImage}
                alt="Promoda textile factory with fabric rolls"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-4xl font-bold">17+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                How We Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Deep Expertise in Procurement
              </h2>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
