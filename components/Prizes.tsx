import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Tablet, Headphones, Briefcase } from "lucide-react";

export function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            The <span className="text-[var(--seafoam)]">Prizes</span>
          </h2>

          {/* Overall Winner */}
          <Card className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-[var(--seafoam)]/10 to-[var(--seafoam)]/20 border-2 border-[var(--seafoam)]/30 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-16 h-16 bg-[var(--seafoam)]/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-[var(--seafoam)]" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">
                  🏆 Overall Winner
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Tablet className="w-5 h-5 text-[var(--seafoam)]" />
                  <span className="font-semibold">iPad & Apple Pencil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[var(--seafoam)]" />
                  <span className="font-semibold">Fast-track to Goodnotes 2026 Summer Internship Recruitment Process</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                The top team overall wins big with premium hardware and career opportunities!
              </p>
            </CardContent>
          </Card>

          {/* Track Winners */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-gray-200 hover:border-[var(--seafoam)]/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-center">
                    Special Education Track
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">🎧 AirPods</div>
                <p className="text-gray-600 text-sm">
                  For the top team in accessibility and inclusive learning solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-[var(--seafoam)]/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-center">
                    Artificial Intelligence Track
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">🎧 AirPods</div>
                <p className="text-gray-600 text-sm">
                  For the top team in AI-powered educational innovations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-[var(--seafoam)]/50 transition-colors shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-center">
                    Workforce Learning Track
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">🎧 AirPods</div>
                <p className="text-gray-600 text-sm">
                  For the top team in professional development and training solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
