"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--seafoam)] via-[var(--gnTeal)] to-[var(--canary)] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-4">
            <img src={"../goodnotes.png"} alt="Goodnotes" className="w-24 h-24"/>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Goodnotes Hackathon
            </h1>
            <div className="flex items-center gap-2 text-xl md:text-2xl">
              <span>powered by</span>
              <img src={"../mentormates.png"} alt="Mentormates" className="w-8 h-8"/>
              <span>MentorMates</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join innovators, creators, and problem-solvers in building the
            future. Collaborate, code, and create something extraordinary
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--red)] hover:bg-[var(--canary)]/90 hover:text-[var(--red)] text-white px-8 py-3 text-lg font-semibold rounded-full"
              onClick={() => window.location.href = '/register'}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--seafoam)] px-8 py-3 text-lg font-semibold rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
