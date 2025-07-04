"use client";

import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  Users,
  Zap,
  Award,
  Trophy,
  Mic,
  Coffee,
  BookOpen,
  Lightbulb,
  Target,
  Clock,
  Heart,
} from "lucide-react";
import { useState } from "react";

const day1Events = [
  {
    title: "Welcome & Registration",
    description:
      "Check in, get your name badges and swag, and connect with fellow participants in a relaxed networking environment.",
    time: "5:00 PM - 5:30 PM",
    icon: <UserPlus className="w-5 h-5 text-[var(--blue-dark)]" />,
  },
  {
    title: "Networking & Refreshments",
    description:
      "Enjoy light refreshments while meeting other participants, mentors, and organizers. Perfect opportunity to start forming connections.",
    time: "5:30 PM - 6:30 PM",
    icon: <Users className="w-5 h-5 text-[var(--blue-light)]" />,
  },
  {
    title: "Welcome Presentation",
    description:
      "Learn about the hackathon format, rules, resources, and get excited for the main event tomorrow.",
    time: "6:30 PM - 7:00 PM",
    icon: <Mic className="w-5 h-5 text-[var(--gray-medium)]" />,
  },
  {
    title: "Continued Networking",
    description:
      "More time to connect with participants, discuss ideas, and start thinking about potential collaborations for tomorrow.",
    time: "7:00 PM - 8:00 PM",
    icon: <Heart className="w-5 h-5 text-[var(--blue-dark)]" />,
  },
];

const day2Events = [
  {
    title: "Arrival, Registration, Light Breakfast & Informal Networking",
    description:
      "Start your hackathon day with breakfast, coffee, and connecting with your fellow participants.",
    time: "8:30 AM - 9:15 AM",
    icon: <Coffee className="w-5 h-5 text-[var(--blue-dark)]" />,
  },
  {
    title: "Welcoming Remarks",
    description:
      "Dr Minh Tran, COO of Goodnotes and Mr Chinat Yu, Organizer, MentorMates Hackathon welcome participants and set the stage for the day.",
    time: "9:15 AM - 9:20 AM",
    icon: <Mic className="w-5 h-5 text-[var(--gray-medium)]" />,
  },
  {
    title: "Keynote: Reimagining the Future of Learning 1",
    description:
      "Featuring Mr. Quincy Larson (Founder of freeCodeCamp).",
    time: "9:20 AM - 9:50 AM",
    icon: <Zap className="w-5 h-5 text-[var(--blue-light)]" />,
  },
  {
    title: "Transition/Break",
    description: "Quick break to refresh and prepare for the next session.",
    time: "9:50 AM - 10:00 AM",
    icon: <Clock className="w-5 h-5 text-gray-500" />,
  },
  {
    title: "Fireside Chat: Education Perspectives",
    description:
      "Featuring voices from special education, AI in medical education, and fashion/textile education.",
    time: "10:00 AM - 10:45 AM",
    icon: <Users className="w-5 h-5 text-[var(--blue-light)]" />,
  },
  {
    title:
      "Fireside Chat: Inside Goodnotes – Building the Future of Notes & Learning",
    description:
      "Learn from 2–3 senior Goodnotes team members about building innovative learning technologies.",
    time: "10:45 AM - 11:30 AM",
    icon: <BookOpen className="w-5 h-5 text-[var(--blue-dark)]" />,
  },
  {
    title: "Keynote: Reimagining the Future of Learning 2",
    description:
      "Featuring Professor Paul Kim (World Bank, Former Associate Dean at the Stanford Graduate School of Education, Stanford University (formerly)).",
    time: "11:30 AM - 12:00 PM",
    icon: <Mic className="w-5 h-5 text-[var(--gray-medium)]" />,
  },
  {
    title: "Lunch + Guided Ideation: Framing Real-World Education Challenges",
    description:
      "Enjoy lunch while participating in guided discussions to identify and frame real-world education challenges.",
    time: "12:00 PM - 1:00 PM",
    icon: <Lightbulb className="w-5 h-5 text-yellow-700" />,
  },
  {
    title: "Hacking Time – Mentor Rotations & Project Development",
    description:
      "Intensive building time with continuous mentor support. Develop, iterate, and refine your EdTech solutions.",
    time: "1:00 PM - 5:00 PM",
    icon: <Award className="w-5 h-5 text-[var(--blue-dark)]" />,
  },
  {
    title: "Pitching Workshop – Communicating Ideas with Clarity & Impact",
    description:
      "Learn how to present your project effectively with tips on storytelling, timing, and visual communication.",
    time: "5:00 PM - 5:30 PM",
    icon: <Target className="w-5 h-5 text-[var(--gray-medium)]" />,
  },
  {
    title: "Team Pitches & Prize Presentation",
    description:
      "Teams present their innovative EdTech solutions to judges, followed by prize announcements.",
    time: "5:30 PM - 6:30 PM",
    icon: <Trophy className="w-5 h-5 text-[var(--blue-light)]" />,
  },
  {
    title: "Optional Celebration / Feedback Wall / Informal Mingling",
    description:
      "Celebrate the achievements, share feedback, and continue networking in a relaxed atmosphere.",
    time: "6:30 PM onwards",
    icon: <Heart className="w-5 h-5 text-yellow-700" />,
  },
];

export function Timeline() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const events = activeDay === "day1" ? day1Events : day2Events;

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Event <span className="text-[var(--blue-light)]">Timeline</span>
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDay === "day1"
                    ? "bg-[var(--blue-dark)] text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Day 1 - Friday, July 11
              </button>
              <button
                onClick={() => setActiveDay("day2")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDay === "day2"
                    ? "bg-[var(--blue-dark)] text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Day 2 - Saturday, July 12
              </button>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600">
              {activeDay === "day1"
                ? "Friday, July 11, 2025 | 5:00 PM – 8:00 PM (Welcome & Networking)"
                : "Saturday, July 12, 2025 | 8:30 AM – 8:00 PM (Full Hackathon Day)"}
            </p>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="group bg-white rounded-2xl border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 rounded-full p-2 group-hover:bg-gray-100">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-cyan-100 rounded-full"
                      >
                        {event.time}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
