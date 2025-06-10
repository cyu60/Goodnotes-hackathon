import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Goodnotes Hackathon
            </h3>
            <p className="text-gray-400">
              Building the future of digital note-taking and productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--gnTeal)]" />
                <a
                  href="mailto:hackathon@goodnotes.com"
                  className="hover:text-[var(--gnTeal)] transition-colors"
                >
                  hackathon@goodnotes.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--gnTeal)]" />
                <span>+582 222 222</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--gnTeal)]" />
                <span>Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="hover:text-[var(--gnTeal)] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--gnTeal)] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:hackathon@goodnotes.com"
              className="hover:text-[var(--gnTeal)] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Goodnotes Hackathon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
