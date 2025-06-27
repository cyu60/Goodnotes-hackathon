import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap, TrendingUp } from "lucide-react";
import { FaRegHandshake } from "react-icons/fa6";

function BlueAccentLine({ className = "", ...props }) {
  // SVG squiggle line, styled in blue
  return (
    <svg
      viewBox="0 0 800 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0 60 Q 200 0 400 60 T 800 60"
        stroke="var(--blue-light)"
        strokeWidth="10"
        fill="none"
      />
      <path
        d="M0 90 Q 200 30 400 90 T 800 90"
        stroke="var(--blue-dark)"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden md:pt-16 bg-white"
    >
      {/* Top Accent Line */}
      <BlueAccentLine className="w-full mx-auto mb-8" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-12 px-4">
        {/* Description */}
        <div className="text-[var(--blue-dark)] text-lg md:text-xl max-w-2xl leading-relaxed text-center">
          MentorMates Hackathon brings together curious minds from all
          backgrounds to explore how AI can transform education. Whether you're
          a student studying CS, psychology, business, design, education, or a
          young professional working in any field – your unique perspective is
          exactly what we need to create meaningful solutions for tomorrow's
          learners.
          <div className="bg-white/80 border border-[var(--blue-light)] rounded-xl p-4 mt-6 text-base md:text-lg text-[var(--blue-dark)] font-semibold">
            🚀{" "}
            <span className="text-[var(--blue-light)]">
              No coding experience required
            </span>{" "}
            – We provide expert mentors to guide you through every step of the
            journey!
          </div>
        </div>
      </div>
      {/* Tracks Section (Below main content, full width) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-20 px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">
          Three Innovation{" "}
          <span className="text-[var(--blue-light)]">Tracks</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI & Special Education */}
          <Card className="border-[var(--blue-dark)] border-[1.5px] rounded-2xl bg-white shadow-none flex flex-col items-stretch px-0 py-0">
            <div className="flex flex-col items-start px-8 pt-8 pb-6">
              <div className="w-16 h-16 bg-[var(--blue-dark)]/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[var(--blue-dark)]" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--blue-dark)] mb-2">
                AI & Special Education
              </h4>
              <div className="text-base font-medium text-gray-600 mb-4">
                Supporting Students with Learning Differences
              </div>
              <ul className="space-y-3 text-[var(--blue-dark)] text-base font-normal pl-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-dark)] inline-block"></span>
                  Develop AI-powered tools for inclusive learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-dark)] inline-block"></span>
                  Create assistive technologies for diverse needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-dark)] inline-block"></span>
                  Design personalized education experiences
                </li>
              </ul>
            </div>
          </Card>
          {/* AI in Traditional Education */}
          <Card className="border-[var(--blue-light)] border-[1.5px] rounded-2xl bg-white shadow-none flex flex-col items-stretch px-0 py-0">
            <div className="flex flex-col items-start px-8 pt-8 pb-6">
              <div className="w-16 h-16 bg-[var(--blue-light)]/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-[var(--blue-light)]" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--blue-light)] mb-2">
                AI in Traditional Education
              </h4>
              <div className="text-base font-medium text-gray-600 mb-4">
                Transforming How We Learn
              </div>
              <ul className="space-y-3 text-[var(--blue-light)] text-base font-normal pl-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-light)] inline-block"></span>
                  Reimagine classroom experiences with AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-light)] inline-block"></span>
                  Build intelligent tutoring systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--blue-light)] inline-block"></span>
                  Create adaptive learning platforms
                </li>
              </ul>
            </div>
          </Card>
          {/* AI & Workforce Learning */}
          <Card className="border-[var(--gray-medium)] border-[1.5px] rounded-2xl bg-white shadow-none flex flex-col items-stretch px-0 py-0">
            <div className="flex flex-col items-start px-8 pt-8 pb-6">
              <div className="w-16 h-16 bg-[var(--gray-medium)]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[var(--gray-medium)]" />
              </div>
              <h4 className="text-2xl font-bold text-[var(--gray-medium)] mb-2">
                AI & Workforce Learning
              </h4>
              <div className="text-base font-medium text-gray-600 mb-4">
                Preparing for Tomorrow's Jobs
              </div>
              <ul className="space-y-3 text-[var(--gray-medium)] text-base font-normal pl-2">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--gray-medium)] inline-block"></span>
                  Design AI-driven professional development
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--gray-medium)] inline-block"></span>
                  Create upskilling and reskilling solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[var(--gray-medium)] inline-block"></span>
                  Build career transition support systems
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
      {/* Bottom Accent Line */}
      <BlueAccentLine className="w-full mx-auto mt-16 rotate-180" />
    </section>
  );
}
