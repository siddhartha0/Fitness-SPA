import {
  Partners,
  HeroGradient,
  HeroSection,
  Banner,
  OurOfferring,
  Reasoning,
  Pricing,
} from "@/components/home/";
import { Navbar } from "@/components/shared/";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroGradient>
        <Navbar />
        <HeroSection />
      </HeroGradient>
      <Partners />
      <Banner />
      <OurOfferring />
      <Reasoning />
      <Pricing />
      <Footer />
    </div>
  );
}
