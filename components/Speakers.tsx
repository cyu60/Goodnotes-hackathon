"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const speakers = [
  {
    name: "Dr. Minh Tran",
    role: "Chief Operating Officer, Goodnotes",
    description:
      "Dr. Minh Tran is the Chief Operating Officer at Goodnotes, the beloved digital note-taking app that won Apple's 2022 iPad App of the Year. He spearheads Goodnotes' people and corporate functions and leads Goodnotes' work with school systems around the world. With a BA in Psychology from Yale University and a Doctorate in Education from the University of Hong Kong, Dr. Tran started his career as a 5th grade teacher in Los Angeles. Prior to Goodnotes, he served as an Executive Director at EF Education First, where he advised governments in more than 20 countries on large-scale assessment and training initiatives. A frequent speaker at education conferences like Bett, he focuses on AI-powered pedagogical transformation and the future of digital learning.",
    image: "/minh.jpeg",
    isKeynote: true,
    urls: ["https://hk.linkedin.com/in/minhtranhk"],
  },
  {
    name: "Paul Kim",
    role: "Former Associate Dean, Stanford Graduate School of Education",
    description:
      "A visionary leader in educational technology and innovation at Stanford University. Dr. Kim is renowned for his pioneering work in mobile learning, AI-assisted education, and global educational access. As a published author of multiple books including 'Massive Open Online Courses' and 'RE:LEARN', he brings decades of experience in transforming education through technology. His research focuses on entrepreneurship education, MOOCs, and innovative teaching methodologies that bridge traditional academia with cutting-edge technology solutions.",
    image: "/paulkim.jpeg",
    isKeynote: true,
    urls: ["https://www.linkedin.com/in/drpaulkim"],
  },
  {
    name: "Quincy Larson",
    role: "Founder & Teacher, freeCodeCamp.org",
    description:
      "The visionary founder of freeCodeCamp, one of the world's largest coding education platforms with millions of learners globally. Quincy started freeCodeCamp 9 years ago from a desk in his closet and has since built it into a comprehensive, free learning resource that has helped countless people transition into technology careers. As the host of the freeCodeCamp Podcast and author of 'Learn to Code and Get a Developer Job', he's dedicated to making coding education accessible to everyone, regardless of background or financial situation.",
    image: "/quincy.jpeg",
    isKeynote: true,
    urls: ["https://www.linkedin.com/in/quincylarson"],
  },
  {
    name: "Dr. Tin Yan Alvin Liu",
    role: "Associate Professor of Ophthalmology & Founding Director, Wilmer Precision Ophthalmology Center of Excellence",
    description:
      "A pioneering expert in AI applications for ophthalmology at Johns Hopkins University. Dr. Liu specializes in artificial intelligence for screening, diagnosis, and treatment of retinal diseases. Originally from Hong Kong, he's the James P. Gills, Jr. Professor of AI and leads groundbreaking research in using machine learning for diabetic retinopathy and macular degeneration detection.",
    image: "/alvinliu.jpg",
    urls: [
      "https://profiles.hopkinsmedicine.org/provider/alvin-liu/2706300",
      "https://malonecenter.jhu.edu/people/tin-yan-alvin-liu/",
    ],
  },
  {
    name: "Dr. Donald Chan Ka Long",
    role: "Lecturer & Deputy Director, Natural Sciences Programme, CUHK",
    description:
      "An accomplished chemist and educator at The Chinese University of Hong Kong, specializing in environmental applications of advanced materials and analytical chemistry. Dr. Chan combines cutting-edge research in environmental science with innovative teaching methodologies, contributing to sustainable chemistry solutions and materials characterization.",
    image: "/donald.webp",
    urls: ["https://chem.cuhk.edu.hk/people/academic-staff/ckl/"],
  },
  {
    name: "Prof. Joanne Yip Yiu Wan",
    role: "Professor & Associate Dean, School of Fashion & Textiles, PolyU",
    description:
      "A leading expert in textile technology and functional garment design at Hong Kong Polytechnic University. Prof. Yip's pioneering research includes AI-assisted design of therapeutic clothing for scoliosis treatment, advanced materials for sports and medical applications, and innovative approaches to intimate apparel and activewear design using seamless and molding techniques.",
    image: "/joanne.png",
    urls: [
      "https://www.polyu.edu.hk/pri/people/pri-people/prof-yip-yiu-wan-joanne/?sc_lang=en",
    ],
  },
  {
    name: "Joe Liu",
    role: "Special Education School Principal",
    description:
      "A dedicated principal and special education teacher with decades of experience transforming learning experiences for students with diverse needs. Joe Liu brings invaluable insights into inclusive education technology, assistive learning tools, and innovative approaches to making education accessible for all learners. His extensive field experience provides practical perspectives on implementing technology solutions in special education settings.",
    image: "/mentormates.png",
    urls: [],
  },
];

export function Speakers() {
  const [expandedKeynoteIndex, setExpandedKeynoteIndex] = useState<
    number | null
  >(null);
  const [expandedSpeakerIndex, setExpandedSpeakerIndex] = useState<
    number | null
  >(null);

  const keynoteSpeakers = speakers.filter((speaker) => speaker.isKeynote);
  const regularSpeakers = speakers.filter((speaker) => !speaker.isKeynote);

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Meet Our <span className="text-[var(--seafoam)]">Speakers</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              Learn from industry experts and academic leaders
            </p>
          </div>

          {/* Keynote Speakers Row */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Keynote Speakers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keynoteSpeakers.map((speaker, index) => (
                <Card
                  key={`keynote-${index}`}
                  className="bg-gradient-to-br from-[#1a1f36] to-[#121627] text-white border-2 border-[var(--seafoam)]/50 hover:border-[var(--seafoam)] rounded-2xl transition-all"
                >
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-[var(--seafoam)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Keynote
                      </span>
                    </div>

                    <div className="mb-6">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      {speaker.urls.length > 0 ? (
                        <a
                          href={speaker.urls[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold hover:text-[var(--seafoam)] transition-colors"
                        >
                          {speaker.name}
                        </a>
                      ) : (
                        <p className="text-lg font-bold">{speaker.name}</p>
                      )}
                      <p className="text-sm opacity-75">{speaker.role}</p>
                    </div>

                    {expandedKeynoteIndex === index ? (
                      <>
                        <p className="text-sm leading-relaxed mb-6 mt-6 opacity-90">
                          {speaker.description}
                        </p>
                        <button
                          onClick={() => setExpandedKeynoteIndex(null)}
                          className="text-sm text-[var(--seafoam)] hover:text-[var(--seafoam)]/80 mb-6"
                        >
                          Show Less
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setExpandedKeynoteIndex(index)}
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

          {/* Regular Speakers Row */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Featured Speakers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularSpeakers.map((speaker, index) => (
                <Card
                  key={`speaker-${index}`}
                  className="bg-gradient-to-br from-[#1a1f36] to-[#121627] text-white border-2 border-gray-700 hover:border-[var(--seafoam)]/50 rounded-2xl transition-all"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      {speaker.urls.length > 0 ? (
                        <a
                          href={speaker.urls[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-[var(--seafoam)] transition-colors"
                        >
                          {speaker.name}
                        </a>
                      ) : (
                        <p className="font-semibold">{speaker.name}</p>
                      )}
                      <p className="text-sm opacity-75">{speaker.role}</p>
                    </div>

                    {expandedSpeakerIndex === index ? (
                      <>
                        <p className="text-sm leading-relaxed mb-4 mt-4 opacity-90">
                          {speaker.description}
                        </p>
                        <button
                          onClick={() => setExpandedSpeakerIndex(null)}
                          className="text-sm text-[var(--seafoam)] hover:text-[var(--seafoam)]/80"
                        >
                          Show Less
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setExpandedSpeakerIndex(index)}
                        className="text-sm text-[var(--seafoam)] hover:text-[var(--seafoam)]/80 mt-4"
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
      </div>
    </section>
  );
}
