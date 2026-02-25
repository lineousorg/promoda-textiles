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

import qualityImage from "@/assets/sustainability.jpg";

/* ✅ Certification Cards Images */
import bci from "@/assets/certifications/bci.png";
import oekoTex from "@/assets/certifications/oekoTex.png";
import gots from "@/assets/certifications/gots.png";
import grs from "@/assets/certifications/grs.png";

/* ✅ Compliance Partners Logos */
import accord from "@/assets/compliance/accord.png";
import alliance from "@/assets/compliance/alliance.png";
import amfori from "@/assets/compliance/amfori.png";
import higgIndex from "@/assets/compliance/higgIndex.png";
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
    image: bci,
    description:
      "Better Cotton Initiative promoting sustainable cotton production.",
  },
  {
    name: "OEKO-TEX",
    image: oekoTex,
    description: "Certified safe textile products free from harmful chemicals.",
  },
  {
    name: "GOTS",
    image: gots,
    description:
      "Global organic textile processing standard for sustainability.",
  },
  {
    name: "GRS",
    image: grs,
    description: "Recycled material traceability and environmental compliance.",
  },
];

const complianceLogos = [
  { name: "ACCORD", src: accord },
  { name: "ALLIANCE", src: alliance },
  { name: "AMFORI", src: amfori },
  { name: "HIGG", src: higgIndex },
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

  const duplicatedLogos = [...complianceLogos, ...complianceLogos];

  return (
    <section id="sustainability" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            SUSTAINABILITY AND <span className="text-primary">ENVIRONMENT</span>
          </h2>
        </motion.div>

        {/* Supply Chain Flow */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
            {supplyChainSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center px-3 md:px-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center mb-2 bg-background">
                    <step.icon className="w-5 h-5 md:w-7 md:h-7 text-foreground/70" />
                  </div>

                  <span className="text-xs md:text-sm text-muted-foreground text-center whitespace-nowrap">
                    {step.label}
                  </span>
                </div>

                {index < supplyChainSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-foreground/30 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}

        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl mb-20 border border-white/10">
          {/* ================= LEFT IMAGE ================= */}
          <div className="relative min-h-[400px] lg:min-h-[520px] group">
            {/* Image */}
            <img
              src={qualityImage}
              alt="Sustainable manufacturing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Side Text Ribbon */}
            <div
              className="absolute left-0 top-0 h-full w-12 md:w-16 
      bg-primary/90 backdrop-blur-lg flex items-center justify-center"
            >
              <span
                className="text-primary-foreground font-bold text-xs md:text-sm tracking-[0.3em]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                SUSTAINABILITY & INNOVATION
              </span>
            </div>

            {/* Image Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-2xl font-bold mb-2">Ethical Manufacturing</h4>
              <p className="text-white/70 text-sm max-w-md">
                Responsible sourcing and sustainable production across global
                supply chains.
              </p>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="bg-secondary/90 backdrop-blur-xl p-10 lg:p-14 space-y-8">
            {/* Title */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 tracking-wide">
                OUR SOURCING RESPONSE
              </h3>

              <p className="text-secondary-foreground/80 text-sm md:text-base leading-relaxed max-w-lg">
                Sustainability and responsibility shape every decision we make.
                We work exclusively with audited partners meeting global social
                and environmental standards.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex gap-5 items-center p-4 rounded-2xl
          border border-secondary-foreground/10
          hover:bg-white/50 hover:shadow-lg
          transition-all duration-300"
                >
                  {/* Logo */}
                  <div
                    className="w-20 h-14 bg-white rounded-xl p-3 flex items-center justify-center shadow-sm
          group-hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-secondary-foreground font-semibold text-sm">
                      {cert.name}
                    </p>

                    <p className="text-secondary-foreground/70 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Carousel */}
        <div>
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
                    className="h-8 md:h-10 lg:h-12 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
