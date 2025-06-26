import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Sponsors() {
  return (
    <section id="sponsor" className="py-20 bg-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          About the <span className="text-[var(--seafoam)]">Sponsor</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/goodnotes.png"
                    alt="Goodnotes Logo"
                    width={200}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                
                <div className="space-y-6">
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Goodnotes is the leading AI digital paper used by millions of people worldwide. 
                    Launched in 2011, Goodnotes started as an improvement to physical paper notes — 
                    introducing the ability to take handwritten digital notes, search handwritten text, 
                    and organize everything into a digital library.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Today, Goodnotes continues to pioneer technological innovations in productivity, 
                    featuring advances such as the world's first generative AI for handwriting and 
                    in-app AI assistant Ask Goodnotes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Thank you to Goodnotes for making this hackathon possible!
          </p>
        </div>
      </div>
    </section>
  );
}
