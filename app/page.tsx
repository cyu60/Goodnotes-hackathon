import { Hero } from "@/components/hackathon/Hero";
import { About } from "@/components/hackathon/About";
import { Timeline } from "@/components/hackathon/Timeline";
import { Prizes } from "@/components/hackathon/Prizes";
import { Sponsors } from "@/components/hackathon/Sponsors";
import { Footer } from "@/components/hackathon/Footer";

export default function HackathonLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Footer />
    </div>
  );
}
