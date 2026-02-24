import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, HeartHandshake, Package, Globe, Award } from "lucide-react";

/* ------------------ WHY US REASONS ------------------ */

const reasons = [
  {
    icon: MapPin,
    title: "UK-Based Partner Office",
    description:
      "Enabling in-person meetings and local support for your convenience.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description:
      "Across sourcing, development, manufacturing, QA and logistics.",
  },
  {
    icon: Package,
    title: "Low MOQs",
    description:
      "From 500 units per style per colour with flexible lead times.",
  },
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description:
      "Network of 30+ specialist factories for jersey, knit, woven and denim.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Supporting international fashion and sportswear brands since 2007.",
  },
];

/* ------------------ GLOBAL LOCATIONS ------------------ */

const globalLocations = [
  {
    region: "Europe",
    locations: [
      {
        city: "London",
        country: "UK",
        coordinates: { x: "47%", y: "27%" },
        connections: ["Istanbul"],
      },
      {
        city: "Lisbon",
        country: "Portugal",
        coordinates: { x: "44%", y: "32%" },
        connections: ["London"],
      },
      {
        city: "Istanbul",
        country: "Turkey",
        coordinates: { x: "56%", y: "33%" },
        connections: ["London", "Dhaka", "Shanghai"],
      },
    ],
  },
  {
    region: "Asia",
    locations: [
      {
        city: "Shanghai",
        country: "China",
        coordinates: { x: "75%", y: "35%" },
        connections: ["Istanbul", "Delhi"],
      },
      {
        city: "Delhi",
        country: "India",
        coordinates: { x: "63%", y: "38%" },
        connections: ["Shanghai", "Dhaka"],
      },
      {
        city: "Dhaka",
        country: "Bangladesh",
        coordinates: { x: "65%", y: "40%" },
        connections: ["Delhi", "Istanbul"],
      },
      {
        city: "Ho Chi Minh",
        country: "Vietnam",
        coordinates: { x: "77%", y: "42%" },
        connections: ["Shanghai"],
      },
    ],
  },
];

const allLocations = globalLocations.flatMap((r) => r.locations);

/* ------------------ COMPONENT ------------------ */

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-foreground">
      <div className="container-custom" ref={ref}>
        {/* ------------------ HEADER ------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Why Promoda
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Global Capability. Local Access.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real accountability with a partner who understands your needs and
            delivers results.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* ------------------ MAP SECTION ------------------ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-white/10">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-white">
                  Global Infrastructure
                </h3>
              </div>

              {/* MAP */}
              <div
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5"
                style={{
                  backgroundImage: "url('../public/white-map-formatted.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              >
                {/* CONNECTION LINES */}
                <svg className="absolute inset-0 w-full h-full">
                  {allLocations.flatMap((location) =>
                    location.connections.map((targetCity) => {
                      const target = allLocations.find(
                        (l) => l.city === targetCity,
                      );
                      if (!target) return null;

                      return (
                        <line
                          key={`${location.city}-${targetCity}`}
                          x1={`${parseInt(location.coordinates.x) * 8}`}
                          y1={`${parseInt(location.coordinates.y) * 4.5}`}
                          x2={`${parseInt(target.coordinates.x) * 8}`}
                          y2={`${parseInt(target.coordinates.y) * 4.5}`}
                          stroke="#60a5fa"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="8"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </line>
                      );
                    }),
                  )}
                </svg>

                {/* HUB POINTS */}
                {allLocations.map((location, index) => (
                  <div
                    key={location.city}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: location.coordinates.x,
                      top: location.coordinates.y,
                    }}
                  >
                    {/* Pulse */}
                    <div
                      className="absolute w-10 h-10 rounded-full bg-primary/30 animate-ping"
                      style={{ animationDelay: `${index * 0.6}s` }}
                    />

                    {/* Core */}
                    <div className="relative w-4 h-4 rounded-full bg-primary border border-white shadow-lg" />

                    {/* Tooltip */}
                    <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-gray-900/90 backdrop-blur px-3 py-2 rounded-md border border-white/10">
                        <div className="text-sm font-semibold text-white">
                          {location.city}
                        </div>
                        <div className="text-xs text-white/60">
                          {location.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ------------------ REASONS ------------------ */}
          <div className="lg:w-1/2">
            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-white/60 text-sm">
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
