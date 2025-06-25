"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Zap, Award, Trophy, Mic, Coffee, BookOpen, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

const day1Events = [
  {
    title: "Arrival & Registration",
    description:
      "Check in, get your name badges and swag, enjoy light breakfast or coffee while networking with fellow participants.",
    time: "9:00 AM - 9:30 AM",
    color: "red",
    icon: <UserPlus className="w-6 h-6 text-[var(--red)]" />,
    iconBg: "bg-[var(--red)]/10",
    border: "border-l-[var(--red)]",
    badge: "bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20",
  },
  {
    title: "Opening Keynote",
    description:
      '"Reimagining Learning in the AI Era" - A compelling narrative around the role of technology, creativity, and inclusivity in learning.',
    time: "9:30 AM - 10:00 AM",
    color: "apple",
    icon: <Mic className="w-6 h-6 text-[var(--apple)]" />,
    iconBg: "bg-[var(--apple)]/10",
    border: "border-l-[var(--apple)]",
    badge: "bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20",
  },
  {
    title: "Fireside Chat: Education Perspectives",
    description: "How technology is shaping diverse classrooms and disciplines. Featuring educators from special education, music, fashion, and more.",
    time: "10:00 AM - 11:00 AM",
    color: "gnTeal",
    icon: <Users className="w-6 h-6 text-[var(--gnTeal)]" />,
    iconBg: "bg-[var(--gnTeal)]/10",
    border: "border-l-[var(--gnTeal)]",
    badge: "bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20",
  },
  {
    title: "Fireside Chat: Technology Trends",
    description: "Exploring emerging technologies and research directions with technical mentors from Goodnotes. Learn about LLMs, AI-assisted note-taking, and smart annotations.",
    time: "11:15 AM - 12:00 PM",
    color: "seafoam",
    icon: <Zap className="w-6 h-6 text-[var(--seafoam)]" />,
    iconBg: "bg-[var(--seafoam)]/10",
    border: "border-l-[var(--seafoam)]",
    badge: "bg-[var(--seafoam)]/10 text-[var(--seafoam)] hover:bg-[var(--seafoam)]/20",
  },
  {
    title: "Ideation & Team Formation",
    description: "Casual table discussions during lunch. Connect education insights and tech sparks into project ideas with guided prompts.",
    time: "12:00 PM - 1:00 PM",
    color: "canary",
    icon: <Lightbulb className="w-6 h-6 text-yellow-700" />,
    iconBg: "bg-[var(--canary)]/20",
    border: "border-l-[var(--canary)]",
    badge: "bg-[var(--canary)]/20 text-yellow-700 hover:bg-[var(--canary)]/30",
  },
  {
    title: "Hack Time: Build Your Project",
    description:
      "Teams form and start building with mentor support on technical architecture, education use cases, and UX feedback.",
    time: "1:00 PM - 5:00 PM",
    color: "red",
    icon: <Award className="w-6 h-6 text-[var(--red)]" />,
    iconBg: "bg-[var(--red)]/10",
    border: "border-l-[var(--red)]",
    badge: "bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20",
  },
  {
    title: "Pitching Workshop",
    description:
      "Learn how to frame your story: Problem → Insight → Solution. Tips on timing, visuals, and confidence for your presentations.",
    time: "5:00 PM - 5:30 PM",
    color: "apple",
    icon: <Target className="w-6 h-6 text-[var(--apple)]" />,
    iconBg: "bg-[var(--apple)]/10",
    border: "border-l-[var(--apple)]",
    badge: "bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20",
  },
  {
    title: "Wrap-Up & Optional Showcase",
    description:
      "Lightning pitches, feedback wall for peer voting, and networking to close out the day.",
    time: "5:30 PM onwards",
    color: "gnTeal",
    icon: <Trophy className="w-6 h-6 text-[var(--gnTeal)]" />,
    iconBg: "bg-[var(--gnTeal)]/10",
    border: "border-l-[var(--gnTeal)]",
    badge: "bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20",
  },
];

const day2Events = [
  {
    title: "Morning Check-in & Coffee",
    description:
      "Start your hackathon day with coffee, light breakfast, and connecting with your team.",
    time: "8:30 AM - 9:00 AM",
    color: "red",
    icon: <Coffee className="w-6 h-6 text-[var(--red)]" />,
    iconBg: "bg-[var(--red)]/10",
    border: "border-l-[var(--red)]",
    badge: "bg-[var(--red)]/10 text-[var(--red)] hover:bg-[var(--red)]/20",
  },
  {
    title: "Full Hackathon Session",
    description:
      "Intensive building time with continuous mentor support. Develop, iterate, and refine your EdTech solutions.",
    time: "9:00 AM - 5:30 PM",
    color: "apple",
    icon: <Award className="w-6 h-6 text-[var(--apple)]" />,
    iconBg: "bg-[var(--apple)]/10",
    border: "border-l-[var(--apple)]",
    badge: "bg-[var(--apple)]/10 text-[var(--apple)] hover:bg-[var(--apple)]/20",
  },
  {
    title: "Project Finalization",
    description:
      "Polish your presentations, test your demos, and prepare for the final showcase.",
    time: "5:30 PM - 6:30 PM",
    color: "gnTeal",
    icon: <Target className="w-6 h-6 text-[var(--gnTeal)]" />,
    iconBg: "bg-[var(--gnTeal)]/10",
    border: "border-l-[var(--gnTeal)]",
    badge: "bg-[var(--gnTeal)]/10 text-[var(--gnTeal)] hover:bg-[var(--gnTeal)]/20",
  },
  {
    title: "Final Presentations",
    description:
      "Teams present their innovative EdTech solutions to judges and the community.",
    time: "6:30 PM - 7:30 PM",
    color: "seafoam",
    icon: <Mic className="w-6 h-6 text-[var(--seafoam)]" />,
    iconBg: "bg-[var(--seafoam)]/10",
    border: "border-l-[var(--seafoam)]",
    badge: "bg-[var(--seafoam)]/10 text-[var(--seafoam)] hover:bg-[var(--seafoam)]/20",
  },
  {
    title: "Awards & Closing Ceremony",
    description:
      "Celebrate the winners, network with participants, and wrap up an amazing hackathon experience.",
    time: "7:30 PM - 8:00 PM",
    color: "canary",
    icon: <Trophy className="w-6 h-6 text-yellow-700" />,
    iconBg: "bg-[var(--canary)]/20",
    border: "border-l-[var(--canary)]",
    badge: "bg-[var(--canary)]/20 text-yellow-700 hover:bg-[var(--canary)]/30",
  },
];

export function Timeline() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const events = activeDay === 'day1' ? day1Events : day2Events;

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Event <span className="text-[var(--seafoam)]">Timeline</span>
          </h2>

          {/* Day Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex gap-1">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeDay === 'day1'
                    ? 'bg-[var(--seafoam)] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Day 1 - Friday, July 11
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeDay === 'day2'
                    ? 'bg-[var(--seafoam)] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Day 2 - Saturday, July 12
              </button>
            </div>
          </div>

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
