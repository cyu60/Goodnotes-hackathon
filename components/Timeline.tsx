"use client"

import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Zap, Award, Trophy, Mic, Coffee, BookOpen, Lightbulb, Target } from "lucide-react";
import { useState } from "react";

const day1Events = [
  {
    title: "Arrival & Registration",
    description: "Check in, get your name badges and swag, enjoy light breakfast or coffee while networking with fellow participants.",
    time: "9:00 AM - 9:30 AM",
    icon: <UserPlus className="w-5 h-5 text-[var(--red)]" />,
  },
  {
    title: "Opening Keynote",
    description: '"Reimagining Learning in the AI Era" - A compelling narrative around the role of technology, creativity, and inclusivity in learning.',
    time: "9:30 AM - 10:00 AM", 
    icon: <Mic className="w-5 h-5 text-[var(--apple)]" />,
  },
  {
    title: "Fireside Chat: Education Perspectives",
    description: "How technology is shaping diverse classrooms and disciplines. Featuring educators from special education, music, fashion, and more.",
    time: "10:00 AM - 11:00 AM",
    icon: <Users className="w-5 h-5 text-[var(--gnTeal)]" />,
  },
  {
    title: "Fireside Chat: Technology Trends",
    description: "Exploring emerging technologies and research directions with technical mentors from Goodnotes. Learn about LLMs, AI-assisted note-taking, and smart annotations.",
    time: "11:15 AM - 12:00 PM",
    icon: <Zap className="w-5 h-5 text-[var(--seafoam)]" />,
  },
  {
    title: "Ideation & Team Formation",
    description: "Casual table discussions during lunch. Connect education insights and tech sparks into project ideas with guided prompts.",
    time: "12:00 PM - 1:00 PM",
    icon: <Lightbulb className="w-5 h-5 text-yellow-700" />,
  },
  {
    title: "Hack Time: Build Your Project",
    description: "Teams form and start building with mentor support on technical architecture, education use cases, and UX feedback.",
    time: "1:00 PM - 5:00 PM",
    icon: <Award className="w-5 h-5 text-[var(--red)]" />,
  },
  {
    title: "Pitching Workshop",
    description: "Learn how to frame your story: Problem → Insight → Solution. Tips on timing, visuals, and confidence for your presentations.",
    time: "5:00 PM - 5:30 PM",
    icon: <Target className="w-5 h-5 text-[var(--apple)]" />,
  },
  {
    title: "Wrap-Up & Optional Showcase",
    description: "Lightning pitches, feedback wall for peer voting, and networking to close out the day.",
    time: "5:30 PM onwards",
    icon: <Trophy className="w-5 h-5 text-[var(--gnTeal)]" />,
  },
];

const day2Events = [
  {
    title: "Morning Check-in & Coffee",
    description: "Start your hackathon day with coffee, light breakfast, and connecting with your team.",
    time: "8:30 AM - 9:00 AM",
    icon: <Coffee className="w-5 h-5 text-[var(--red)]" />,
  },
  {
    title: "Full Hackathon Session",
    description: "Intensive building time with continuous mentor support. Develop, iterate, and refine your EdTech solutions.",
    time: "9:00 AM - 5:30 PM",
    icon: <Award className="w-5 h-5 text-[var(--apple)]" />,
  },
  {
    title: "Project Finalization",
    description: "Polish your presentations, test your demos, and prepare for the final showcase.",
    time: "5:30 PM - 6:30 PM",
    icon: <Target className="w-5 h-5 text-[var(--gnTeal)]" />,
  },
  {
    title: "Final Presentations",
    description: "Teams present their innovative EdTech solutions to judges and the community.",
    time: "6:30 PM - 7:30 PM",
    icon: <Mic className="w-5 h-5 text-[var(--seafoam)]" />,
  },
  {
    title: "Awards & Closing Ceremony",
    description: "Celebrate the winners, network with participants, and wrap up an amazing hackathon experience.",
    time: "7:30 PM - 8:00 PM",
    icon: <Trophy className="w-5 h-5 text-yellow-700" />,
  },
];

export function Timeline() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const events = activeDay === 'day1' ? day1Events : day2Events;

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Event <span className="text-[var(--seafoam)]">Timeline</span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex gap-1">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDay === 'day1'
                    ? 'bg-[var(--seafoam)] text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDay === 'day2'
                    ? 'bg-[var(--seafoam)] text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Day 2
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.title} className="group bg-white rounded-2xl border p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 rounded-full p-2 group-hover:bg-gray-100">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <Badge variant="secondary" className="text-xs bg-cyan-100 rounded-full">
                        {event.time}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{event.description}</p>
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
