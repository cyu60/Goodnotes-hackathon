import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Zap, Award, Trophy } from "lucide-react";

export function Timeline() {
  const timelineEvents = [
    {
      title: "Arrival & Registration",
      time: "9:00 AM - 10:00 AM",
      description: "Check in, get your swag, and enjoy breakfast while networking with fellow participants.",
      icon: UserPlus,
      color: "red"
    },
    {
      title: "Fireside Chats", 
      time: "10:00 AM - 12:00 PM",
      description: "Engaging discussions on education perspectives and technology trends with industry experts.",
      icon: Users,
      color: "apple"
    },
    {
      title: "Ideation & Team Formation",
      time: "12:00 PM - 1:00 PM", 
      description: "Form teams and brainstorm project ideas over lunch.",
      icon: Zap,
      color: "gnTeal"
    },
    {
      title: "Hack Time",
      time: "1:00 PM - 5:00 PM",
      description: "Build your project with support from technical and education mentors.",
      icon: Award,
      color: "canary"
    },
    {
      title: "Pitching & Wrap-up",
      time: "5:00 PM - 6:00 PM",
      description: "Learn pitching techniques and showcase your work in lightning presentations.",
      icon: Trophy,
      color: "seafoam"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Event <span className="text-[var(--seafoam)]">Timeline</span>
          </h2>

          {/* Desktop Timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    {index % 2 === 0 && (
                      <Card className={`border-l-4 border-l-[var(--${event.color})] shadow-lg`}>
                        <CardHeader>
                          <div className="flex items-center gap-3 justify-end">
                            <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                            <div className={`w-12 h-12 bg-[var(--${event.color})]/10 rounded-full flex items-center justify-center`}>
                              <event.icon className={`w-6 h-6 text-[var(--${event.color})]`} />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{event.description}</p>
                          <Badge className={`mt-2 bg-[var(--${event.color})]/10 text-[var(--${event.color})] hover:bg-[var(--${event.color})]/20`}>
                            {event.time}
                          </Badge>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  <div className={`w-4 h-4 bg-[var(--${event.color})] rounded-full border-4 border-white shadow-lg z-10`}></div>
                  <div className="w-1/2">
                    {index % 2 === 1 && (
                      <Card className={`border-l-4 border-l-[var(--${event.color})] shadow-lg`}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-[var(--${event.color})]/10 rounded-full flex items-center justify-center`}>
                              <event.icon className={`w-6 h-6 text-[var(--${event.color})]`} />
                            </div>
                            <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{event.description}</p>
                          <Badge className={`mt-2 bg-[var(--${event.color})]/10 text-[var(--${event.color})] hover:bg-[var(--${event.color})]/20`}>
                            {event.time}
                          </Badge>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineEvents.map((event, index) => (
              <Card key={index} className={`border-l-4 border-l-[var(--${event.color})] shadow-lg`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-[var(--${event.color})]/10 rounded-full flex items-center justify-center`}>
                      <event.icon className={`w-5 h-5 text-[var(--${event.color})]`} />
                    </div>
                    <CardTitle className="text-lg font-bold">{event.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className={`mb-2 bg-[var(--${event.color})]/10 text-[var(--${event.color})] hover:bg-[var(--${event.color})]/20`}>
                    {event.time}
                  </Badge>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
