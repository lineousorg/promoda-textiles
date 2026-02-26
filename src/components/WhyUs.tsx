import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, HeartHandshake, Package, Globe, Award } from "lucide-react";

/* ------------------ WHY US REASONS ------------------ */

const reasons = [
  {
    icon: MapPin,
    title: "UK-Based Partner Office",
    description: "Enabling in-person meetings and dedicated regional support.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "From sourcing and development to QA, production and logistics.",
  },
  {
    icon: Package,
    title: "Low MOQs",
    description:
      "Starting from 500 units per style per colour with flexible timelines.",
  },
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "Specialist factories across Asia and Europe.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Supporting international fashion & sportswear brands since 2007.",
  },
];

/* ------------------ OFFICE LOCATIONS ------------------ */

const officeLocations = [
  {
    city: "London",
    country: "United Kingdom",
    coordinates: { x: 48, y: 27 },
    connections: ["Dhaka", "Hong Kong", "Zoeterwoude-Rijndijk"],
  },
  {
    city: "Zoeterwoude-Rijndijk",
    country: "Netherlands",
    coordinates: { x: 54, y: 22 },
    connections: ["London"],
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    coordinates: { x: 78, y: 38 },
    connections: ["Hong Kong", "London"],
  },
  {
    city: "Hong Kong",
    country: "Hong Kong",
    coordinates: { x: 86, y: 35 },
    connections: ["Dhaka", "London"],
  },
];

/* ------------------ COMPONENT ------------------ */

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      className="section-padding bg-foreground relative overflow-hidden"
    >
      <div className="container-custom" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Why Promoda
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Global Capability.
            <br />
            Local Access.
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Structured international infrastructure with accountable,
            relationship-driven support.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* ------------------ MAP SECTION ------------------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  Global Office Network
                </h3>
              </div>

              {/* 🔥 FIXED MAP CONTAINER */}
              <div
                className="relative w-full h-[300px] md:h-[380px] lg:h-[420px] rounded-2xl border border-white/5 overflow-hidden"
                style={{
                  backgroundImage: "url('/white-map-formatted.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                {/* CONNECTION LINES */}
                <svg
                  className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {officeLocations.flatMap((location) =>
                    location.connections.map((targetCity) => {
                      const target = officeLocations.find(
                        (l) => l.city === targetCity,
                      );
                      if (!target) return null;

                      return (
                        <line
                          key={`${location.city}-${targetCity}`}
                          x1={location.coordinates.x}
                          y1={location.coordinates.y}
                          x2={target.coordinates.x}
                          y2={target.coordinates.y}
                          stroke="#60a5fa"
                          strokeWidth="0.8"
                          strokeDasharray="4 4"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="8"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </line>
                      );
                    }),
                  )}
                </svg>

                {/* OFFICE DOTS */}
                {officeLocations.map((location, index) => {
                  const showBelow = location.coordinates.y < 20;

                  return (
                    <div
                      key={location.city}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                      style={{
                        left: `${location.coordinates.x}%`,
                        top: `${location.coordinates.y}%`,
                      }}
                    >
                      {/* Pulse */}
                      <div
                        className="absolute w-10 h-10 rounded-full bg-primary/20 animate-ping"
                        style={{ animationDelay: `${index * 0.8}s` }}
                      />

                      {/* Core Dot */}
                      <div className="relative w-4 h-4 rounded-full bg-primary border border-white shadow-xl group-hover:scale-125 transition duration-300 cursor-pointer" />

                      {/* Tooltip */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none ${
                          showBelow ? "top-[140%]" : "bottom-[140%]"
                        }`}
                      >
                        <div className="bg-gray-900/95 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 shadow-2xl text-center whitespace-nowrap">
                          <div className="text-sm font-semibold text-white">
                            {location.city}
                          </div>
                          <div className="text-xs text-white/50">
                            {location.country}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ------------------ REASONS SECTION ------------------ */}
          <div className="lg:w-1/2">
            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition duration-300"
                >
                  <div className="flex gap-5">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
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
