import { HeroGradient } from "@/components/home/Hero-Gradient";
import { HeroSection } from "@/components/home/Hero-Section";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroGradient>
        <Navbar />
        <HeroSection />
      </HeroGradient>
    </div>
  );
}
