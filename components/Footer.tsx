import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsor", href: "#sponsor" },
];

const contactInfo = [
  { 
    icon: Mail,
    content: "mentormatesofficial@gmail.com",
    href: "mailto:mentormatesofficial@gmail.com",
    isLink: true
  },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mentor-mates-a6898036b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { icon: FaInstagram, href: "https://www.instagram.com/mentormates.official/" },
  { icon: FaXTwitter, href: "https://x.com/mentormates" },
  { icon: Mail, href: "mailto:mentormatesofficial@gmail.com" }
];

export function Footer() {
  return (
    <footer className="bg-[var(--seafoam)] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              MentorMates Hackathon, Sponsored by Goodnotes
            </h3>
            <p className="text-gray-200">
              Building the future of digital note-taking and productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--gnTeal)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[var(--gnTeal)]" />
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="hover:text-[var(--gnTeal)] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-10">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-[var(--gnTeal)] transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} MentorMates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
