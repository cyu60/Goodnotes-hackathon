import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const speakers = [
  {
    name: "Speaker 1",
    role: "Role 1",
    description: "description1",
    image: "/goodnotes.png"
  },
  {
    name: "Speaker 2", 
    role: "Role 2",
    description: "description2",
    image: "/goodnotes.png"
  },
  {
    name: "Speaker 3",
    role: "Role 3", 
    description: "description3",
    image: "/goodnotes.png"
  }
];

export function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meet Our <span className="text-[var(--seafoam)]">Speakers</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join us to learn from industry experts and thought leaders who are shaping the future of technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-white border border-gray-100 shadow-xl overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={speaker.image}
                      alt={`Speaker ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold mb-2">{speaker.name}</CardTitle>
                  <p className="text-[var(--seafoam)] font-medium mb-2">{speaker.role}</p>
                  <p className="text-gray-600">{speaker.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
