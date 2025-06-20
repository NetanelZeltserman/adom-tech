import SocialLinkItem from "@/components/layout/footer/SocialLinks";
import { SOCIAL_LINKS } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 bg-[#1E1E1E] border border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/logo_text.png" 
                alt="Adom Technology" 
                className="h-20 w-auto object-contain max-w-full"
              />
            </div>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start">
                <span className="mr-3 text-lg mt-0.5 flex-shrink-0">📍</span>
                <span className="leading-relaxed">Tel Aviv, Israel</span>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-lg mt-0.5 flex-shrink-0">✉️</span>
                <a 
                  href="mailto:contact@adom.technology" 
                  className="hover:text-white transition-colors duration-300 hover:underline leading-relaxed break-words"
                >
                  contact@adom.technology
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">About Us</h4>
            <div className="flex-1">
              <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                Our expert professionals work collaboratively to drive technological innovation, optimize processes, and help organizations build sustainable competitive advantages that stand the test of time. Let's build something amazing together.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex flex-col space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <SocialLinkItem key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8">
          <p className="text-center text-white/60 text-sm">
            Copyright © {currentYear} Adom Technology - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}