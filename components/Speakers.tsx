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
    name: "Mr. Siu Chun Joe Lui",
    role: "Vice Principal, HKSYC&IA Chan Nam Chong Memorial School",
    description:
      "Mr. Lui is the vice principal at a special school in Hong Kong for students with intellectual disabilities and autism. With a background in music therapy and inclusive education, he leads the school's autism support programs and curriculum development. He is passionate about integrating technology and the arts to enhance learning experiences for students on the autism spectrum and to promote creativity, communication, and inclusion in the classroom.",
    image: "/joeliu.jpg",
    urls: [],
  },
];

export function Speakers() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const keynoteSpeakers = speakers.filter((s) => s.isKeynote);
  const featuredSpeakers = speakers.filter((s) => !s.isKeynote);

  return (
    <section
      id="speakers"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:pt-16 bg-white"
    >
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center px-4">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our <span className="text-[var(--blue-light)]">Speakers</span>
          </h2>
          <p className="text-lg text-[var(--blue-dark)] text-center max-w-2xl">
            Learn from industry experts and academic leaders
          </p>
        </div>
        {/* Keynote Speakers */}
        <h3 className="text-2xl font-bold text-center mb-4 text-[var(--blue-light)]">
          Keynote Speakers
        </h3>
        <div className="grid md:grid-cols-3 gap-8 w-full mb-12">
          {keynoteSpeakers.map((speaker, index) => {
            const realIndex = speakers.findIndex(
              (s) => s.name === speaker.name
            );
            return (
              <Card
                key={speaker.name}
                className="border-2 border-[var(--blue-light)] rounded-2xl transition-all bg-white shadow-none hover:shadow-md flex flex-col items-center text-center"
              >
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="inline-block bg-[var(--blue-light)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                    Keynote
                  </span>
                  <div>
                    {speaker.urls && speaker.urls.length > 0 ? (
                      <a
                        href={speaker.urls[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold hover:text-[var(--blue-light)] transition-colors"
                      >
                        {speaker.name}
                      </a>
                    ) : (
                      <p className="text-lg font-bold">{speaker.name}</p>
                    )}
                    <p className="text-sm opacity-75 mb-2">{speaker.role}</p>
                  </div>
                  {expandedIndex === realIndex ? (
                    <>
                      <p className="text-sm leading-relaxed mb-6 mt-2 opacity-90">
                        {speaker.description}
                      </p>
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="text-sm text-[var(--blue-light)] hover:text-[var(--blue-dark)] mb-2"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setExpandedIndex(realIndex)}
                      className="text-sm text-[var(--blue-light)] hover:text-[var(--blue-dark)] mb-2"
                    >
                      Learn More
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Featured Speakers */}
        <h3 className="text-2xl font-bold text-center mb-4 text-[var(--blue-dark)]">
          Featured Speakers
        </h3>
        <div className="grid md:grid-cols-4 gap-8 w-full">
          {featuredSpeakers.map((speaker, index) => {
            const realIndex = speakers.findIndex(
              (s) => s.name === speaker.name
            );
            return (
              <Card
                key={speaker.name}
                className="border-2 border-[var(--blue-dark)] rounded-2xl transition-all bg-white shadow-none hover:shadow-md flex flex-col items-center text-center"
              >
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    {speaker.urls && speaker.urls.length > 0 ? (
                      <a
                        href={speaker.urls[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold hover:text-[var(--blue-light)] transition-colors"
                      >
                        {speaker.name}
                      </a>
                    ) : (
                      <p className="text-lg font-bold">{speaker.name}</p>
                    )}
                    <p className="text-sm opacity-75 mb-2">{speaker.role}</p>
                  </div>
                  {expandedIndex === realIndex ? (
                    <>
                      <p className="text-sm leading-relaxed mb-6 mt-2 opacity-90">
                        {speaker.description}
                      </p>
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="text-sm text-[var(--blue-light)] hover:text-[var(--blue-dark)] mb-2"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setExpandedIndex(realIndex)}
                      className="text-sm text-[var(--blue-light)] hover:text-[var(--blue-dark)] mb-2"
                    >
                      Learn More
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
