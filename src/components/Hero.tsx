import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-01.png";
const rotatingWords = [
  "Sourcing",
  "Manufacturing",
  "Quality",
  "Innovation",
  "Sustainability",
];
export const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium">
            ​Your Global Fashion Partner
          </p>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          End-to-End
          <br />
          <span className="inline-block h-[1.2em] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="text-primary inline-block"
              >
                {rotatingWords[currentWord]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          Full Solutions
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          ​​We partner with fashion, activewear and lifestyle brands to design,
          source and manufacture high quality garments, managing production,
          quality control and logistics end to end.
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10"
        >
          ​From first sample to final delivery, we manage the entire supply
          chain with transparency, speed and care
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <a href="#services" className="bg-primary">
              Explore Our Services
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-white/60"
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};
