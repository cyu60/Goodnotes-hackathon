import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function Sponsors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-seafoam">Sponsors</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src="/placeholder-logo.svg"
                  width="120"
                  height="60"
                  alt={`Sponsor ${i}`}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Interested in sponsoring our hackathon and reaching talented
              developers?
            </p>
            <Button
              variant="outline"
              className="border-seafoam text-seafoam hover:bg-seafoam hover:text-white px-8 py-3 text-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Become a Sponsor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
