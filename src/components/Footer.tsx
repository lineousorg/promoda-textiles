import { Linkedin, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Sourcing", href: "#services" },
    { label: "Sampling", href: "#services" },
    { label: "Manufacturing", href: "#services" },
    { label: "Quality Control", href: "#services" },
    { label: "Logistics", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Why Promoda", href: "#why-us" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact", href: "#contact" },
  ],
};

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
    whatsapp: "+852 23288834",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16 space-y-16">
        {/* Top Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PROMODA</h3>
            <p className="text-white/60 mb-6 max-w-md">
              Your global fashion partner delivering quality and innovation
              since 2007. We support fashion, activewear and lifestyle brands
              through comprehensive sourcing and manufacturing solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@promodatextiles.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white/90">
            Our Offices
          </h4>

          <details open className="group">
            {/* Mobile toggle */}
            <summary className="md:hidden cursor-pointer list-none flex items-center justify-between text-sm text-white/70 mb-4">
              <span>View office locations</span>
              <span className="group-open:rotate-180 transition">▼</span>
            </summary>

            {/* Offices Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officeLocations.map((location) => {
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.address,
                )}`;

                return (
                  <div
                    key={location.city}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />

                    <div className="space-y-1">
                      <p className="text-white/80 font-medium">
                        {location.flag} {location.city}
                      </p>

                      <p className="text-white/70">{location.officeName}</p>

                      <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white/50 hover:text-primary transition"
                      >
                        {location.address}
                      </a>

                      {location.email && (
                        <a
                          href={`mailto:${location.email}`}
                          className="block text-white/50 hover:text-primary transition"
                        >
                          {location.email}
                        </a>
                      )}

                      {location.whatsapp && (
                        <a
                          href={`https://wa.me/${location.whatsapp.replace(
                            /\D/g,
                            "",
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-white/50 hover:text-primary transition"
                        >
                          {location.whatsapp}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Promoda Textiles Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
