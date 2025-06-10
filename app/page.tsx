import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Prizes } from "@/components/Prizes";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

export default function HackathonLanding() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      {/* <Sponsors /> */}
      <Footer />
    </div>
  );
}
