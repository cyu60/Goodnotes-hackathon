"use client"
import { Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const speakers = [
  {
    name: "Dr. Tin Yan Alvin Liu",
    role: "Associate Professor of Ophthalmology & Founding Director, Wilmer Precision Ophthalmology Center of Excellence",
    description: "A pioneering expert in AI applications for ophthalmology at Johns Hopkins University. Dr. Liu specializes in artificial intelligence for screening, diagnosis, and treatment of retinal diseases. Originally from Hong Kong, he's the James P. Gills, Jr. Professor of AI and leads groundbreaking research in using machine learning for diabetic retinopathy and macular degeneration detection.",
    image: "/mentormates.png",
    urls: [
      "https://profiles.hopkinsmedicine.org/provider/alvin-liu/2706300",
      "https://malonecenter.jhu.edu/people/tin-yan-alvin-liu/"
    ]
  },
  {
    name: "Dr. Donald Chan Ka Long", 
    role: "Lecturer & Deputy Director, Natural Sciences Programme, CUHK",
    description: "An accomplished chemist and educator at The Chinese University of Hong Kong, specializing in environmental applications of advanced materials and analytical chemistry. Dr. Chan combines cutting-edge research in environmental science with innovative teaching methodologies, contributing to sustainable chemistry solutions and materials characterization.",
    image: "/mentormates.png",
    urls: [
      "https://chem.cuhk.edu.hk/people/academic-staff/ckl/"
    ]
  },
  {
    name: "Prof. Joanne Yip Yiu Wan",
    role: "Professor & Associate Dean, School of Fashion & Textiles, PolyU",
    description: "A leading expert in textile technology and functional garment design at Hong Kong Polytechnic University. Prof. Yip's pioneering research includes AI-assisted design of therapeutic clothing for scoliosis treatment, advanced materials for sports and medical applications, and innovative approaches to intimate apparel and activewear design using seamless and molding techniques.",
    image: "/mentormates.png",
    urls: [
      "https://www.polyu.edu.hk/pri/people/pri-people/prof-yip-yiu-wan-joanne/?sc_lang=en"
    ]
  },
  {
    name: "Man-hon \"Mike\" Ma",
    role: "Special Education Teacher & Educational Technology Advocate",
    description: "A dedicated special education teacher with decades of experience transforming learning experiences for students with diverse needs. Ma Man-hon brings invaluable insights into inclusive education technology, assistive learning tools, and innovative approaches to making education accessible for all learners. His extensive field experience provides practical perspectives on implementing technology solutions in special education settings.",
    image: "/mentormates.png",
    urls: []
  }
];

export function Speakers() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Meet Our <span className="text-[var(--seafoam)]">Mentors</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              Learn from industry experts and academic leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-[#1a1f36] to-[#121627] text-white border-2 border-gray-700 rounded-xl hover:border-[var(--seafoam)]/50 transition-all rounded-2xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  
                  <div>
                    <p className="font-semibold">{speaker.name}</p>
                    <p className="text-sm opacity-75">{speaker.role}</p>
                  </div>

                  {expandedIndex === index ? (
                    <>
                      <p className="text-sm leading-relaxed mb-6 opacity-90">{speaker.description}</p>
                      <button 
                        onClick={() => setExpandedIndex(null)}
                        className="text-sm text-[var(--seafoam)] hover:text-[var(--seafoam)]/80 mb-6"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => setExpandedIndex(index)}
                      className="text-sm text-[var(--seafoam)] hover:text-[var(--seafoam)]/80 mb-6"
                    >
                      Learn More
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
