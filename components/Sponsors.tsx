import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Sponsors() {
  return (
    <section
      id="sponsor"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:pt-16 bg-white"
    >
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center px-4">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About the <span className="text-[var(--blue-light)]">Sponsor</span>
          </h2>
        </div>
        {/* Sponsor Card */}
        <Card className="border-2 border-[var(--blue-dark)] rounded-2xl bg-white shadow-none flex flex-col items-center text-center w-full">
          <CardContent className="p-12 flex flex-col items-center">
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src="/R-GN Logo-white BG.png"
                alt="Goodnotes Logo"
                width={300}
                height={150}
                className="mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[var(--blue-dark)] leading-relaxed">
                Goodnotes is the leading AI digital paper used by millions of
                people worldwide. Launched in 2011, Goodnotes started as an
                improvement to physical paper notes — introducing the ability to
                take handwritten digital notes, search handwritten text, and
                organize everything into a digital library.
              </p>
              <p className="text-lg md:text-xl text-[var(--blue-dark)] leading-relaxed">
                Today, Goodnotes continues to pioneer technological innovations
                in productivity, featuring advances such as the world's first
                generative AI for handwriting and in-app AI assistant Ask
                Goodnotes.
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="text-center mt-8">
          <p className="text-[var(--blue-dark)] px-4 py-2 rounded-lg">
            Thank you to Goodnotes for making this hackathon possible!
          </p>
        </div>
      </div>
    </section>
  );
}
