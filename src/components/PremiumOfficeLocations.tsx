import { MapPin, Mail, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const PremiumOfficeLocations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const officeLocations = [
    {
      flag: "🇧🇩",
      city: "Bangladesh (Procurement Office)",
      officeName: "Promoda Textiles Limited",
      address: "House 6, Road 10, Sector 4, Uttara, Dhaka 1230, Bangladesh",
      email: "manajir@promodatextiles.com",
      whatsapp: "+8801836836423",
    },
    {
      flag: "🇬🇧",
      city: "United Kingdom (Regional Sales)",
      officeName: "Draapes Fashions Limited",
      address: "7 City Aews, Barkingside, Ilford IG6 2FV, England",
      email: "zaafir@promodatextiles.com",
      whatsapp: "+447478643127",
    },
    {
      flag: "🇭🇰",
      city: "Hong Kong (Commercial Office)",
      officeName: "Promoda Textiles Hong Kong Ltd",
      address:
        "Unit 5, 6/F, Laurels Industrial Centre, 32 Tai Yau Street, San Po Kong, Kowloon, Hong Kong",
      whatsapp: "+85223231905",
    },
    {
      flag: "🇳🇱",
      city: "Netherlands",
      officeName: "HMZ Fashiongroup BV",
      address: "Industrieweg 43, 2382 NT, Zoeterwoude Rijndijk, Netherlands",
      whatsapp: "+85223288834",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative section-padding"
      style={{
        background: `
          linear-gradient(
            to bottom,
            #D4DCE5,
            #C2CBD8
          )
        `,
      }}
    >
      <div className="container-custom space-y-16">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Global Presence
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Global Offices
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Supporting international brands with local sourcing and business
            operations across the world.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeLocations.map((location, index) => {
            const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              location.address,
            )}`;

            return (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl
                bg-white/70 backdrop-blur-xl
                border border-white/40
                hover:border-primary/30
                shadow-sm
                transition-all duration-300"
              >
                <div className="space-y-3">
                  {/* Location Header */}
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary w-5 h-5 mt-1 flex-shrink-0" />

                    <div>
                      <h5 className="text-foreground font-semibold">
                        {location.flag} {location.city}
                      </h5>
                      <p className="text-foreground/70 text-sm">
                        {location.officeName}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground/60 text-sm hover:text-primary transition"
                  >
                    {location.address}
                  </a>

                  {/* Email */}
                  {location.email && (
                    <a
                      href={`mailto:${location.email}`}
                      className="flex items-center gap-2 text-foreground/60 text-sm hover:text-primary transition"
                    >
                      <Mail className="w-4 h-4" />
                      {location.email}
                    </a>
                  )}

                  {/* WhatsApp */}
                  {location.whatsapp && (
                    <a
                      href={`https://wa.me/${location.whatsapp.replace(
                        /\D/g,
                        "",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 text-sm hover:text-primary transition"
                    >
                      <Phone className="w-4 h-4" />
                      {location.whatsapp}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumOfficeLocations;
