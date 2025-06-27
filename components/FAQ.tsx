import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Users, Calendar, Trophy } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "Everyone is welcome to join! Whether you're a student, professional developer, designer, entrepreneur, or just someone passionate about technology and innovation, you can participate. All skill levels are encouraged to apply.",
      icon: Users,
      color: "var(--gnTeal)"
    },
    {
      question: "Do I need to have a team to participate?",
      answer: "No, you can participate individually or as part of a team. We'll also help facilitate team formation for those looking to collaborate with others.",
      icon: Users,
      color: "var(--red)"
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, chargers, and your creativity! We'll provide food, drinks, and a collaborative environment for you to build amazing projects.",
      icon: Calendar,
      color: "var(--apple)"
    },
    {
      question: "Are there prizes for winners?",
      answer: "Yes! We have exciting prizes for the top teams, including tech gadgets, and opportunities for mentorship and career development.",
      icon: Trophy,
      color: "var(--canary)"
    }
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-[var(--white)] via-[var(--seafoam)]/10 to-[var(--gnTeal)]/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked{" "}
              <span className="text-[var(--gnTeal)]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions? We've got answers! Here's everything you need to know about joining our hackathon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <Card key={index} className="border-[var(--seafoam)] rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${faq.color}20` }}
                      >
                        <IconComponent 
                          className="w-6 h-6" 
                          style={{ color: faq.color }}
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 text-left">
                        {faq.question}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed pl-16">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[var(--gnTeal)] to-[var(--seafoam)] rounded-3xl p-8 text-white">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg text-white/90 mb-6">
                Remember: <strong>Everyone can join this event!</strong> Don't hesitate to reach out if you need more information.
              </p>
              <p className="text-white/80">
                Contact us at <span className="font-semibold">mentormatesofficial@gmail.com</span> or reach out to our socials for any additional questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 