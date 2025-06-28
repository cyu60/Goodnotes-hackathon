"use client";

import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/grid-background";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:pt-16 text-[var(--blue-dark)]">
      {/* Grid Background Overlay */}
      <GridBackground className="absolute inset-0 opacity-20" />

      <div className="relative z-10 container mx-auto px-4 text-center text-[var(--blue-dark)]">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-6 pt-4 md:pt-0">
            <img
              src={"../mentormates.png"}
              alt="MentorMates"
              className="w-20 h-20 md:w-28 md:h-28"
            />
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                MentorMates Hackathon
              </h1>
              <div className="flex items-center justify-center gap-3 text-lg md:text-2xl">
                <span>Sponsored by</span>
                <img
                  src={"../R-GN Logo-Non White Background.png"}
                  alt="Goodnotes"
                  className="w-50 h-8 md:w-75 md:h-20"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* <h2 className="text-2xl md:text-4xl font-semibold text-[var(--blue-dark)]">
              Shaping the Future of Education Through AI
            </h2> */}
            <p className="hidden md:block text-lg md:text-xl text-[var(--blue-dark)] max-w-4xl mx-auto leading-relaxed px-4 py-4">
              Join us for an inclusive weekend where{" "}
              <strong className="text-[var(--blue-light)]">
                no coding experience is needed
              </strong>
              . We're bringing together students and young professionals from
              all backgrounds including CS, psychology, education, business,
              design and more to explore how AI can transform learning for
              everyone.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-3xl mx-auto border border-[var(--blue-dark)]/20">
            <div className="text-xl font-medium text-[var(--blue-dark)]">
              📅 July 11-12, 2025 • 📍 Hong Kong, Goodnotes HQ
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-[var(--blue-dark)] hover:bg-[var(--blue-light)]/90 text-white px-10 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() =>
                (window.location.href = "https://forms.gle/2WSrfqxS3vGfsEWs5")
              }
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[var(--blue-dark)] text-[var(--blue-dark)] hover:bg-[var(--blue-dark)] hover:text-white px-10 py-4 text-xl font-semibold rounded-full transition-all duration-200"
              onClick={() => (window.location.href = "#about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
