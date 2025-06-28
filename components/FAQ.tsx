"use client";
import { useState } from "react";
import { HelpCircle, Users, Calendar, Trophy, ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "Everyone is welcome to join! Whether you're a student, professional developer, designer, entrepreneur, or just someone passionate about technology and innovation, you can participate. All skill levels are encouraged to apply.",
      icon: Users,
      color: "var(--blue-light)",
    },
    {
      question: "Do I need to have a team to participate?",
      answer:
        "No, you can participate individually or as part of a team. We'll also help facilitate team formation for those looking to collaborate with others.",
      icon: Users,
      color: "var(--blue-dark)",
    },
    {
      question:
        "Can I participate if I don't know how to code or don't have a computer science background?",
      answer:
        "Absolutely! Our event is designed to be super accessible to everyone—no matter your technical background. Whether you're a designer, storyteller, educator, student, or just curious, we welcome all creative minds. You'll find opportunities to collaborate, learn, and contribute meaningfully, even if you've never written a line of code.",
      icon: HelpCircle,
      color: "var(--blue-light)",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Bring your laptop, chargers, and your creativity! We'll provide food, drinks, and a collaborative environment for you to build amazing projects.",
      icon: Calendar,
      color: "var(--gray-medium)",
    },
    {
      question: "Are there prizes for winners?",
      answer:
        "Yes! We have exciting prizes for the top teams, including tech gadgets, and opportunities for mentorship and career development.",
      icon: Trophy,
      color: "var(--blue-light)",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-[var(--white)] via-[var(--blue-dark)]/10 to-[var(--blue-light)]/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-[var(--blue-light)]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers! Here's everything you need to
              know about joining our hackathon.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-[var(--blue-light)]/30 last:border-b-0"
                >
                  <button
                    className="w-full flex items-center gap-6 px-6 py-6 text-left focus:outline-none transition-colors hover:bg-[var(--blue-light)]/10"
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${faq.color}10` }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: faq.color }}
                      />
                    </div>
                    <span className="flex-1 text-lg md:text-xl font-bold text-[var(--blue-dark)]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-[var(--blue-light)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-6 ${
                      isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                    }`}
                    style={{
                      animation: isOpen
                        ? "accordion-down 0.2s ease-out"
                        : "accordion-up 0.2s ease-out",
                    }}
                  >
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--blue-dark)] mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-2">
              Remember:{" "}
              <span className="font-bold">Everyone can join this event!</span>{" "}
              Don&apos;t hesitate to reach out if you need more information.
            </p>
            <p className="text-gray-600">
              Contact us at{" "}
              <a
                href="mailto:mentormatesofficial@gmail.com"
                className="text-white bg-[var(--blue-dark)] p-2 rounded-4xl font-semibold hover:underline"
              >
                mentormatesofficial@gmail.com
              </a>{" "}
              or reach out to our socials for any additional questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
