// src/components/Sponsors.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const WrigglyLine = ({
  className = "",
  color = "currentColor",
  strokeWidth = 6,
}) => (
  <svg
    viewBox="0 0 2000 300"
    style={{ width: "100%", height: "auto" }}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="
        M 0,200
        C 300,50 500,350 700,150
        C 900,-50 1300,350 1500,100
        C 1700,-50 2000,300 2000,200
      "
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export function Sponsors() {
  return (
    <section
      id="sponsor"
      className="relative overflow-hidden py-20"
    >
      {/* ───── Foreground content ───── */}
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          About the <span className="text-[var(--seafoam)]">Sponsor</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-[0_-25px_50px_-12px_var(--seafoam),0_25px_50px_-12px_var(--seafoam)] relative z-10 bg-white">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/Goodnotes_White Background.png"
                    alt="Goodnotes Logo"
                    width={500}
                    height={250}
                    className="mx-auto"
                  />
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Goodnotes is the leading AI digital paper used by millions
                    of people worldwide. Launched in 2011, Goodnotes started as
                    an improvement to physical paper notes — introducing the
                    ability to take handwritten digital notes, search handwritten
                    text, and organize everything into a digital library.
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Today, Goodnotes continues to pioneer technological
                    innovations in productivity, featuring advances such as the
                    world's first generative AI for handwriting and in-app AI
                    assistant Ask Goodnotes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          
        </div>

         {/* Background line image */}
         <Image
            src="/line.png"
            alt="Background line"
            width={1100}
            height={1100}
            className="absolute -left-10 inset-0 w-auto h-auto object-cover -z-10 "
          />  

        {/* Background wriggly line */}
        <WrigglyLine 
          className="absolute top-180 inset-0 w-auto h-auto -z-10 left-10 -rotate-15"
          color="var(--canary)"
          strokeWidth={40}
        />

        <div className="text-center mt-12">

          <p className="text-gray-600 px-4 py-2 rounded-lg">
            Thank you to Goodnotes for making this hackathon possible!
          </p>
        </div>
      </div>
    </section>
  );
}
