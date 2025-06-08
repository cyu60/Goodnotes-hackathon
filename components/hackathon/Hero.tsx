import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-seafoam via-gnTeal to-apple overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Goodnotes <span className="text-canary">Hackathon</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join innovators, creators, and problem-solvers in building the
            future. Collaborate, code, and create something extraordinary
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red hover:bg-red/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-seafoam px-8 py-3 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-canary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-apple/20 rounded-full blur-lg"></div>
    </section>
  );
}
