import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Medal } from "lucide-react";

export function Prizes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            The <span className="text-[var(--seafoam)]">Prizes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* First Place */}
            <Card className="bg-gradient-to-br from-[var(--red)]/5 to-[var(--red)]/10 border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--red)]/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[var(--red)]" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    First Place
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Badge className="mb-4 bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20">
                  Grand Prize
                </Badge>
                <p className="text-3xl font-bold text-[var(--red)] mb-4">
                  $5,000
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1-year Goodnotes Pro subscription</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Featured on Goodnotes blog</li>
                </ul>
              </CardContent>
            </Card>

            {/* Second Place */}
            <Card className="bg-gradient-to-br from-[var(--apple)]/5 to-[var(--apple)]/10 border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--apple)]/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--apple)]" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Second Place
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Badge className="mb-4 bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20">
                  Runner Up
                </Badge>
                <p className="text-3xl font-bold text-[var(--apple)] mb-4">
                  $3,000
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 6-month Goodnotes Pro subscription</li>
                  <li>• Networking opportunities</li>
                  <li>• Project showcase</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third Place */}
            <Card className="bg-gradient-to-br from-[var(--gnTeal)]/5 to-[var(--gnTeal)]/10 border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--gnTeal)]/10 rounded-full flex items-center justify-center">
                    <Medal className="w-6 h-6 text-[var(--gnTeal)]" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Third Place
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Badge className="mb-4 bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20">
                  Finalist
                </Badge>
                <p className="text-3xl font-bold text-[var(--gnTeal)] mb-4">
                  $2,000
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3-month Goodnotes Pro subscription</li>
                  <li>• Community recognition</li>
                  <li>• Project highlights</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Plus special category awards for Best Design, Most Innovative, and
              People's Choice!
            </p>
            <Button className="bg-[var(--seafoam)] text-white px-8 py-3 rounded-full hover:bg-[var(--seafoam)]/90 transition-colors">
              View All Prizes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
