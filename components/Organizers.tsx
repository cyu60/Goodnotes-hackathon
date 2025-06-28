import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Organizers() {
  const organizers = [
    {
      name: "Organizer 1",
      role: "Lead Organizer", 
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 2",
      role: "Event Coordinator",
      image: "/placeholder.jpg", 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 3",
      role: "Technical Lead",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 4",
      role: "Partnership Manager",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 5",
      role: "Marketing Lead",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 6",
      role: "Design Lead",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 7",
      role: "Operations Manager",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
    {
      name: "Organizer 8",
      role: "Community Manager",
      image: "/placeholder.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="organizers"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:pt-16 bg-white"
    >
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center px-4">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the{" "}
            <span className="text-[var(--blue-light)]">Organizers</span>
          </h2>
          <p className="text-lg text-[var(--blue-dark)] text-center max-w-2xl">
            The passionate team behind MentorMates Hackathon
          </p>
        </div>

        {/* Organizers Horizontal Scroll */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-8 min-w-max px-4">
            {organizers.map((organizer, index) => (
              <Card
                key={organizer.name}
                className="border-2 border-[var(--blue-light)] rounded-2xl transition-all bg-white shadow-none hover:shadow-md flex flex-col items-center text-center w-[300px]"
              >
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src={organizer.image}
                      alt={organizer.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover border-4 border-[var(--blue-light)]/20"
                    />
                  </div>
                  <div className="mb-3">
                    <a
                      href={organizer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:text-[var(--blue-light)] transition-colors"
                    >
                      {organizer.name}
                    </a>
                    <p className="text-sm text-[var(--blue-light)] font-semibold mt-1">
                      {organizer.role}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {organizer.description}
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
