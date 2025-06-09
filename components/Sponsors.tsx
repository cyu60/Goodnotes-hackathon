import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

export function Sponsors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Our <span className="text-[var(--seafoam)]">Sponsors</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {/* Sponsor logos would go here */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card
              key={i}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Want to be a sponsor? Join us in supporting the next generation of
            innovators!
          </p>
          <button className="bg-[var(--seafoam)] text-white px-8 py-3 rounded-full hover:bg-[var(--seafoam)]/90 transition-colors">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}
