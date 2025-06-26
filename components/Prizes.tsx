import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Tablet, Headphones, Briefcase } from "lucide-react";

export function Prizes() {
  return (
    <section
      id="prizes"
      className="relative py-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35)_0%,_white_100%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-20 tracking-tight">
            The <span className="text-[var(--seafoam)]">Prizes</span>
          </h2>

          {/* Overall Winner */}
          <Card className="relative max-w-3xl mx-auto mb-20 bg-white border border-[var(--seafoam)] shadow-2xl rounded-3xl p-1 animate-fade-in hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--seafoam)] text-white rounded-full flex items-center justify-center shadow-md">
              <Trophy className="w-6 h-6" />
            </div>
            <CardHeader className="text-center mt-6">
              <CardTitle className="text-3xl font-bold text-[var(--seafoam)]">
                Overall Winner
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-5 pb-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-[var(--seafoam)]">
                  <Tablet className="w-5 h-5" />
                  <span className="font-semibold text-gray-800">iPad & Apple Pencil</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--seafoam)]">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-semibold text-gray-800">Internship Fast-Track</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Premium gear + career opportunities await the top team overall!
              </p>
            </CardContent>
          </Card>

          {/* Track Winners */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-[var(--seafoam)]">Tracks</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Special Education",
                emoji: "🎧",
                color: "blue",
                description: "Top accessibility & inclusive learning solution",
              },
              {
                title: "Artificial Intelligence",
                emoji: "🎧",
                color: "purple",
                description: "Top AI-powered educational innovation",
              },
              {
                title: "Workforce Learning",
                emoji: "🎧",
                color: "green",
                description: "Top professional development solution",
              },
            ].map(({ title, emoji, color, description }, index) => (
              <Card
                key={index}
                className={`relative border-2 border-gray-200 hover:border-${color}-400 hover:-translate-y-2 transition-all shadow-md rounded-2xl bg-white p-4 animate-slide-up duration-300 ease-in-out`}
              >
                <CardHeader>
                  <div className={`flex items-center gap-3 justify-center`}>
                    <div
                      className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center`}
                    >
                      <Headphones className={`w-6 h-6 text-${color}-600`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-center">
                      {title} Track
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div
                    className={`text-xl font-bold text-${color}-600 mb-2`}
                  >
                    {emoji} AirPods
                  </div>
                  <p className="text-gray-600 text-sm px-2">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
