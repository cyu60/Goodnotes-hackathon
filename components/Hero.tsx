"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] overflow-hidden pt-20 md:pt-16">
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-12">
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
                  className="w-50 h-14 md:w-100 md:h-26"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-white/95">
              Shaping the Future of Education Through AI
            </h2>
            <p className="hidden md:block text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              Join us for an inclusive weekend where{" "}
              <strong className="text-[var(--canary)]">
                no coding experience is needed
              </strong>
              . We're bringing together students and young professionals from
              all backgrounds – CS, psychology, education, business, design, and
              beyond – to explore how AI can transform learning for everyone.
            </p>
          </div>

          {/* Benefits Cards
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-xl text-[var(--canary)] mb-2">
                ✅ Completely Free
              </div>
              <div className="text-white/85">No cost, no barriers</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-xl text-[var(--canary)] mb-2">
                ✅ Students & Professionals Welcome
              </div>
              <div className="text-white/85">
                Your unique perspective matters
              </div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="font-bold text-xl text-[var(--canary)] mb-2">
                ✅ Expert Mentorship
              </div>
              <div className="text-white/85">Learn as you build</div>
            </div>
          </div> */}

          {/* Event Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
            <div className="text-xl font-medium text-white mb-2">
              📅 July 11-12, 2025 • 📍 Hong Kong, Goodnotes HQ
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-[var(--red)] hover:bg-[var(--red)]/90 text-white px-10 py-4 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() =>
                (window.location.href = "https://forms.gle/2WSrfqxS3vGfsEWs5")
              }
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--seafoam)] px-10 py-4 text-xl font-semibold rounded-full transition-all duration-200"
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
