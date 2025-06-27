import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, GraduationCap, TrendingUp } from "lucide-react";

export function About() {
  return (
    // <section
    //   id="about"
    //   className="py-24 bg-gradient-to-bl from-[var(--blue-light)] via-[var(--blue-dark)] to-[var(--white)]"
    // >

    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[var(--blue-dark)] py-20 md:pt-16"
    >

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Where Innovation Meets{" "}
              <span className="text-[var(--blue-light)]">Mentorship</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              MentorMates Hackathon brings together curious minds from all
              backgrounds to explore how AI can transform education. Whether
              you're a student studying CS, psychology, business, design,
              education, or a young professional working in any field – your
              unique perspective is exactly what we need to create meaningful
              solutions for tomorrow's learners.
            </p>
            <div className="bg-white/25 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/30">
              <p className="text-xl md:text-2xl text-white font-bold">
                🚀{" "}
                <span className="text-[var(--blue-light)]">
                  No coding experience required
                </span>{" "}
                – We provide expert mentors to guide you through every step of
                the journey!
              </p>
            </div>
          </div>

          {/* Three Innovation Tracks */}
          <div className="space-y-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
              Three Innovation Tracks
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <div className="w-20 h-20 bg-[var(--blue-dark)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-10 h-10 text-[var(--blue-dark)]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    AI & Special Education
                  </CardTitle>
                  <p className="text-base text-gray-600 font-medium min-h-[48px] flex items-center justify-center">
                    Supporting Students with Learning Differences
                  </p>
                </CardHeader>
                <CardContent className="pt-0 px-6 flex-grow flex flex-col justify-start">
                  <ul className="text-gray-700 space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-dark)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Develop AI-powered tools for inclusive learning
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-dark)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Create assistive technologies for diverse needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-dark)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Design personalized education experiences
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <div className="w-20 h-20 bg-[var(--blue-light)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-10 h-10 text-[var(--blue-light)]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    AI in Traditional Education
                  </CardTitle>
                  <p className="text-base text-gray-600 font-medium min-h-[48px] flex items-center justify-center">
                    Transforming How We Learn
                  </p>
                </CardHeader>
                <CardContent className="pt-0 px-6 flex-grow flex flex-col justify-start">
                  <ul className="text-gray-700 space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-light)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Reimagine classroom experiences with AI
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-light)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Build intelligent tutoring systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--blue-light)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Create adaptive learning platforms
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <CardHeader className="text-center pb-4 flex-none">
                  <div className="w-20 h-20 bg-[var(--gray-medium)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-[var(--gray-medium)]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 min-h-[64px] flex items-center justify-center">
                    AI & Workforce Learning
                  </CardTitle>
                  <p className="text-base text-gray-600 font-medium min-h-[48px] flex items-center justify-center">
                    Preparing for Tomorrow's Jobs
                  </p>
                </CardHeader>
                <CardContent className="pt-0 px-6 flex-grow flex flex-col justify-start">
                  <ul className="text-gray-700 space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--gray-medium)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Design AI-driven professional development
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--gray-medium)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Create upskilling and reskilling solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--gray-medium)] font-bold text-sm mt-1 flex-none">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Build career transition support systems
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What Makes This Different */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              What Makes This Different?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  🎓 Learn While You Build
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mentors will teach you everything you need to know, from
                  basic AI concepts to design thinking.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  🤝 Collaboration First
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Work with teammates from different backgrounds to create
                  well-rounded solutions.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  🌟 Real Impact
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Address actual challenges in education that can make a
                  difference in students' lives.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  🚀 Career Opportunities
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Network with industry leaders and potentially fast-track your
                  way to amazing internships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
