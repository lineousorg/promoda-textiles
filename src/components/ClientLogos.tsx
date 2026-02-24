import { motion } from "framer-motion";

const clients = [
  { name: "Brand One", initials: "B1" },
  { name: "Fashion Co", initials: "FC" },
  { name: "Active Wear", initials: "AW" },
  { name: "Lifestyle Brand", initials: "LB" },
  { name: "Urban Style", initials: "US" },
  { name: "Eco Fashion", initials: "EF" },
  { name: "Premium Apparel", initials: "PA" },
  { name: "Modern Threads", initials: "MT" },
];

export const ClientLogos = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest">
          Trusted by Leading Brands
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * clients.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-muted-foreground/40 tracking-tight hover:text-muted-foreground/60 transition-colors duration-300">
                {client.initials}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
