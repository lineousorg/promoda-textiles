import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sprout,
  Cloud,
  Store,
  Factory,
  Shirt,
  Package,
  Users,
  ArrowRight,
} from "lucide-react";

import qualityImage from "@/assets/quality-control.jpg";

// ✅ Import Compliance Logos
import accord from "@/assets/compliance/accord.png";
import alliance from "@/assets/compliance/alliance.png";
import amfori from "@/assets/compliance/amfori.png";
import gots from "@/assets/compliance/gots.png";
import grs from "@/assets/compliance/grs.png";
import higgIndex from "@/assets/compliance/higgIndex.png";
import oekoTex from "@/assets/compliance/oekoTex.png";
import organic from "@/assets/compliance/organic.png";
import recycled from "@/assets/compliance/recycled.png";
import slc from "@/assets/compliance/slc.png";
import textileExchange from "@/assets/compliance/textileExchange.png";
import wrap from "@/assets/compliance/wrap.png";
import zdhc from "@/assets/compliance/zdhc.png";

const supplyChainSteps = [
  { icon: Sprout, label: "Seed" },
  { icon: Cloud, label: "Fiber" },
  { icon: Store, label: "Merchant" },
  { icon: Factory, label: "Yarn Spinner" },
  { icon: Shirt, label: "Textiles" },
  { icon: Factory, label: "Garment Factory" },
  { icon: Package, label: "Brand Partner" },
  { icon: Users, label: "Customers" },
];

const certifications = [
  {
    name: "BCI",
    fullName: "Better Cotton Initiative",
    description:
      "Making global cotton production better for the people who produce it, better for the environment it grows in, and better for the sector's future.",
  },
  {
    name: "OEKO-TEX®",
    fullName: "STANDARD 100",
    description:
      "Certifying products are free of harmful chemicals and are safe for human use.",
  },
  {
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    description:
      "Processing standard for organic fibers, including ecological and social criteria, backed up by independent certification.",
  },
  {
    name: "GRS",
    fullName: "Global Recycled Standard",
    description:
      "Intended for companies making and selling products with recycled content, addressing traceability and environmental principles.",
  },
];

// ✅ Logos as objects
const complianceLogos = [
  { name: "ACCORD", src: accord },
  { name: "ALLIANCE", src: alliance },
  { name: "AMFORI", src: amfori },
  { name: "GOTS", src: gots },
  { name: "GRS", src: grs },
  { name: "HIGG INDEX", src: higgIndex },
  { name: "OEKO-TEX", src: oekoTex },
  { name: "ORGANIC", src: organic },
  { name: "RECYCLED", src: recycled },
  { name: "SLC", src: slc },
  { name: "TEXTILE EXCHANGE", src: textileExchange },
  { name: "WRAP", src: wrap },
  { name: "ZDHC", src: zdhc },
];

export const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate for seamless scroll
  const duplicatedLogos = [...complianceLogos, ...complianceLogos];

  return (
    <section id="sustainability" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            SUSTAINABILITY AND <span className="text-primary">ENVIRONMENT</span>
          </h2>
        </motion.div>

        {/* Supply Chain Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
            {supplyChainSteps.map((step, index) => (
              <div key={`${step.label}-${index}`} className="flex items-center">
                <div className="flex flex-col items-center px-3 md:px-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center mb-2 bg-background">
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-foreground/70" />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground text-center whitespace-nowrap">
                    {step.label}
                  </span>
                </div>

                {index < supplyChainSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-foreground/30 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-primary/10 min-h-[400px] lg:min-h-[500px]"
          >
            <img
              src={qualityImage}
              alt="Sustainable manufacturing"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-0 top-0 h-full w-12 md:w-16 bg-primary/90 flex items-center justify-center">
              <span
                className="text-primary-foreground font-bold text-sm md:text-base tracking-[0.25em] whitespace-nowrap"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                SUSTAINABILITY & INNOVATION
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-secondary p-8 md:p-10 lg:p-12"
          >
            <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 tracking-wide">
              OUR SOURCING RESPONSE
            </h3>

            <p className="text-secondary-foreground/80 mb-8 text-sm md:text-base">
              Sustainability and responsibility shape every decision we make. We
              work exclusively with audited partners who meet internationally
              recognised social and environmental standards.
            </p>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-12 bg-secondary-foreground/10 rounded flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-xs">
                      {cert.name}
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-secondary-foreground/60 text-xs mb-1">
                      {cert.fullName}
                    </p>
                    <p className="text-secondary-foreground/90 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ✅ Compliance Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8">
            Compliance & Certification Partners
          </p>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 px-8 py-4 bg-background rounded-xl border border-border flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain  transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
