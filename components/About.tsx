import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Code2, Users } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-bl from-[var(--canary)] via-[var(--gnTeal)] to-[var(--white)]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Innovation Meets{" "}
              <span className="text-[var(--canary)]">Collaboration</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              This hackathon is organized by MentorMates to bring together
              passionate developers, designers, and entrepreneurs from across
              the region to tackle real-world challenges. We believe in the
              power of diverse minds working together to create solutions that
              matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[var(--seafoam)] rounded-3xl bg-[var(--white)]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--red)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-[var(--red)]" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Push boundaries and explore cutting-edge technologies to solve
                  tomorrow's problems today.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[var(--seafoam)] rounded-3xl bg-[var(--white)]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--apple)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-8 h-8 text-[var(--apple)]" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Coding Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Write clean, efficient code that makes a difference. Learn
                  from peers and industry experts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[var(--seafoam)] rounded-3xl bg-[var(--white)]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[var(--gnTeal)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[var(--gnTeal)]" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Teamwork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Collaborate with talented individuals from diverse backgrounds
                  and skill sets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
