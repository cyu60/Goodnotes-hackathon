import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meet Our <span className="text-[var(--seafoam)]">Speakers</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join us to learn from industry experts and thought leaders who are shaping the future of technology and innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-white border border-gray-100 shadow-xl overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold mb-2">{speaker.name}</CardTitle>
                  <p className="text-[var(--seafoam)] font-medium mb-2">{speaker.role}</p>
                  <p className="text-gray-600 mb-3">{speaker.description}</p>
                  {speaker.urls.length > 0 && (
                    <div className="flex flex-col gap-1">
                      {speaker.urls.map((url, urlIndex) => (
                        <a
                          key={urlIndex}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--seafoam)] hover:text-[var(--seafoam)]/80 text-sm underline transition-colors"
                        >
                          {url.includes('hopkinsmedicine.org') ? 'Hopkins Medicine Profile' :
                           url.includes('malonecenter.jhu.edu') ? 'Malone Center Profile' :
                           url.includes('chem.cuhk.edu.hk') ? 'CUHK Chemistry Profile' :
                           url.includes('polyu.edu.hk') ? 'PolyU Profile' :
                           'Profile'}
                        </a>
                      ))}
                    </div>
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
