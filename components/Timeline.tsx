import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Zap, Award, Trophy } from "lucide-react";

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Event <span className="text-[var(--seafoam)]">Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              {/* Arrival */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="border-l-4 border-l-[var(--red)] shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3 md:justify-end">
                        <CardTitle className="text-xl font-bold">
                          Arrival & Registration
                        </CardTitle>
                        <div className="w-12 h-12 bg-[var(--red)]/10 rounded-full flex items-center justify-center">
                          <UserPlus className="w-6 h-6 text-[var(--red)]" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Check in, get your swag, and enjoy breakfast while networking with fellow participants.
                      </p>
                      <Badge className="mt-2 bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20">
                        9:00 AM - 10:00 AM
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-4 h-4 bg-[var(--red)] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Fireside Chats */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-[var(--apple)] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2">
                  <Card className="border-l-4 border-l-[var(--apple)] shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[var(--apple)]/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-[var(--apple)]" />
                        </div>
                        <CardTitle className="text-xl font-bold">
                          Fireside Chats
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Engaging discussions on education perspectives and technology trends with industry experts.
                      </p>
                      <Badge className="mt-2 bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20">
                        10:00 AM - 12:00 PM
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Team Formation */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="border-l-4 border-l-[var(--gnTeal)] shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3 md:justify-end">
                        <CardTitle className="text-xl font-bold">
                          Ideation & Team Formation
                        </CardTitle>
                        <div className="w-12 h-12 bg-[var(--gnTeal)]/10 rounded-full flex items-center justify-center">
                          <Zap className="w-6 h-6 text-[var(--gnTeal)]" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Form teams and brainstorm project ideas over lunch.
                      </p>
                      <Badge className="mt-2 bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20">
                        12:00 PM - 1:00 PM
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-4 h-4 bg-[var(--gnTeal)] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Hacking */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-[var(--canary)] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2">
                  <Card className="border-l-4 border-l-[var(--canary)] shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[var(--canary)]/20 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-yellow-700" />
                        </div>
                        <CardTitle className="text-xl font-bold">
                          Hack Time
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Build your project with support from technical and education mentors.
                      </p>
                      <Badge className="mt-2 bg-[var(--canary)]/20 text-yellow-700 hover:bg-[var(--canary)]/30">
                        1:00 PM - 5:00 PM
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Wrap Up */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="border-l-4 border-l-[var(--seafoam)] shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3 md:justify-end">
                        <CardTitle className="text-xl font-bold">
                          Pitching & Wrap-up
                        </CardTitle>
                        <div className="w-12 h-12 bg-[var(--seafoam)]/10 rounded-full flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-[var(--seafoam)]" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Learn pitching techniques and showcase your work in lightning presentations.
                      </p>
                      <Badge className="mt-2 bg-[var(--seafoam)]/10 text-[var(--seafoam)] hover:bg-[var(--seafoam)]/20">
                        5:00 PM - 6:00 PM
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-4 h-4 bg-[var(--seafoam)] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
