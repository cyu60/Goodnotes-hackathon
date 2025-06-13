import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export function Prizes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            The <span className="text-[var(--seafoam)]">Prizes</span>
          </h2>

          <Card className="max-w-lg mx-auto bg-gradient-to-br from-[var(--seafoam)]/5 to-[var(--seafoam)]/10 border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-12 h-12 bg-[var(--seafoam)]/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[var(--seafoam)]" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Coming Soon
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Prize details will be announced shortly. Stay tuned!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
