import {
  Partners,
  HeroGradient,
  HeroSection,
  Banner,
  OurOfferring,
  Reasoning,
  Pricing,
} from "@/components/home/";
import { Navbar, Footer } from "@/components/shared/";

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
