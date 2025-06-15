import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Zap, Award, Trophy } from "lucide-react";

const events = [
  {
    title: "Arrival & Registration",
    description:
      "Check in, get your swag, and enjoy breakfast while networking with fellow participants.",
    time: "9:00 AM - 10:00 AM",
    color: "red",
    icon: <UserPlus className="w-6 h-6 text-[var(--red)]" />,
    iconBg: "bg-[var(--red)]/10",
    border: "border-l-[var(--red)]",
    badge: "bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20",
  },
  {
    title: "Fireside Chats",
    description:
      "Engaging discussions on education perspectives and technology trends with industry experts.",
    time: "10:00 AM - 12:00 PM",
    color: "apple",
    icon: <Users className="w-6 h-6 text-[var(--apple)]" />,
    iconBg: "bg-[var(--apple)]/10",
    border: "border-l-[var(--apple)]",
    badge:
      "bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20",
  },
  {
    title: "Ideation & Team Formation",
    description: "Form teams and brainstorm project ideas over lunch.",
    time: "12:00 PM - 1:00 PM",
    color: "gnTeal",
    icon: <Zap className="w-6 h-6 text-[var(--gnTeal)]" />,
    iconBg: "bg-[var(--gnTeal)]/10",
    border: "border-l-[var(--gnTeal)]",
    badge:
      "bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20",
  },
  {
    title: "Hack Time",
    description:
      "Build your project with support from technical and education mentors.",
    time: "1:00 PM - 5:00 PM",
    color: "canary",
    icon: <Award className="w-6 h-6 text-yellow-700" />,
    iconBg: "bg-[var(--canary)]/20",
    border: "border-l-[var(--canary)]",
    badge: "bg-[var(--canary)]/20 text-yellow-700 hover:bg-[var(--canary)]/30",
  },
  {
    title: "Pitching & Wrap-up",
    description:
      "Learn pitching techniques and showcase your work in lightning presentations.",
    time: "5:00 PM - 6:00 PM",
    color: "seafoam",
    icon: <Trophy className="w-6 h-6 text-[var(--seafoam)]" />,
    iconBg: "bg-[var(--seafoam)]/10",
    border: "border-l-[var(--seafoam)]",
    badge:
      "bg-[var(--seafoam)]/10 text-[var(--seafoam)] hover:bg-[var(--seafoam)]/20",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Event <span className="text-[var(--seafoam)]">Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline line for mobile/desktop */}
            <div
              className="absolute left-6 top-0 w-1 h-full bg-gray-200 md:left-1/2 md:transform md:-translate-x-1/2 md:block"
              style={{ zIndex: 0 }}
            ></div>

            <div className="space-y-12">
              {events.map((event, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={event.title}
                    className={`relative flex flex-col md:flex-row md:items-center md:gap-8`}
                  >
                    {/* Desktop: Left side */}
                    <div
                      className={`hidden md:flex flex-1 justify-${
                        isLeft ? "end" : "start"
                      }`}
                    >
                      {isLeft && (
                        <Card
                          className={`w-full max-w-md ${event.border} border-l-4 shadow-lg text-right`}
                        >
                          <CardHeader>
                            <div className="flex items-center gap-3 justify-end">
                              <CardTitle className="text-xl font-bold">
                                {event.title}
                              </CardTitle>
                              <div
                                className={`w-12 h-12 ${event.iconBg} rounded-full flex items-center justify-center`}
                              >
                                {event.icon}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 text-right">
                              {event.description}
                            </p>
                            <div className="flex justify-end">
                              <Badge className={`mt-2 ${event.badge}`}>
                                {event.time}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {/* Timeline dot and card for mobile */}
                    <div className="flex md:hidden flex-row items-start gap-2 w-full">
                      <div className="flex flex-col items-center z-10 pt-4">
                        <div
                          className={`w-4 h-4 bg-[var(--${event.color})] rounded-full border-4 border-white shadow-lg`}
                        ></div>
                        {idx !== events.length - 1 && (
                          <div className="flex-1 w-1 bg-gray-200"></div>
                        )}
                      </div>
                      <div className="flex-1 w-full">
                        <Card
                          className={`border-l-4 ${event.border} shadow-lg w-full`}
                        >
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <CardTitle className="text-xl font-bold">
                                {event.title}
                              </CardTitle>
                              <div
                                className={`w-12 h-12 ${event.iconBg} rounded-full flex items-center justify-center`}
                              >
                                {event.icon}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">{event.description}</p>
                            <Badge className={`mt-2 ${event.badge}`}>
                              {event.time}
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Timeline dot (desktop) */}
                    <div className="hidden md:flex flex-col items-center z-10">
                      <div
                        className={`w-4 h-4 bg-[var(--${event.color})] rounded-full border-4 border-white shadow-lg`}
                      ></div>
                      {idx !== events.length - 1 && (
                        <div className="flex-1 w-1 bg-gray-200"></div>
                      )}
                    </div>

                    {/* Desktop: Right side */}
                    <div
                      className={`hidden md:flex flex-1 justify-${
                        !isLeft ? "start" : "end"
                      }`}
                    >
                      {!isLeft && (
                        <Card
                          className={`w-full max-w-md ${event.border} border-l-4 shadow-lg text-left`}
                        >
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 ${event.iconBg} rounded-full flex items-center justify-center`}
                              >
                                {event.icon}
                              </div>
                              <CardTitle className="text-xl font-bold">
                                {event.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 text-left">
                              {event.description}
                            </p>
                            <Badge className={`mt-2 ${event.badge}`}>
                              {event.time}
                            </Badge>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
