import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Sustainability } from "@/components/Sustainability";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PremiumOfficeLocations } from "@/components/PremiumOfficeLocations";

const Index = () => {
  const offices = [];

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <WhyUs />
      <ClientLogos />
      <Sustainability />
      <PremiumOfficeLocations offices={offices} />
      <Contact />

      <Footer />
    </main>
  );
};

export default Index;
