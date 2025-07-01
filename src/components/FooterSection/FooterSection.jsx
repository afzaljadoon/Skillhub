import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../../images/logo.png";

// Static configuration; swap for API data when available
const footerConfig = {
  brand: {
    logo: { src: Logo, alt: "Skillhub Logo", className: "w-12 h-12 -mt-[6px] -mr-[12px] align-middle" },
    name: "kill",
    highlight: "hub",
    highlightClass: "text-[#3fba96]"
  },
  description: "Non disclosure agreement seed round seed money crowdfunding ownership growth hacking user experience.",
  social: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" }
  ],
  sections: [
    { title: "About Product", links: ["Overview", "Features", "Pricing", "Releases"] },
    { title: "Help and Solutions", links: ["Support", "FAQs", "Community", "Contact Us"] },
    { title: "Support", links: ["Help Center", "Terms of Service", "Privacy Policy"] }
  ],
  bottomText: "© Skillhub, 2025. Terms and Conditions - Privacy Policy",
  animations: {
    container: { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true } },
    section: (idx) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.2 * (idx + 1), duration: 0.5 }, viewport: { once: true } })
  }
};

export default function FooterSection() {
  const { brand, description, social, sections, bottomText, animations } = footerConfig;

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 px-4 md:px-16 font-mono">
      <motion.div
        {...animations.container}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Logo & Description */}
        <div className="col-span-1">
          <div className="flex items-center">
            <div className="text-2xl font-bold leading-none flex items-center">
              <img
                src={brand.logo.src}
                alt={brand.logo.alt}
                className={brand.logo.className}
              />
              {brand.name}
              <span className={brand.highlightClass}>{brand.highlight}</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-6">{description}</p>

          <div className="flex gap-4">
            {social.map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="hover:text-[#36a885] focus:text-[#36a885] focus:outline-none focus:ring-2 focus:ring-[#36a885] rounded cursor-pointer transition-transform transform hover:scale-110 focus:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Link Sections */}
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            {...animations.section(idx)}
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="hover:text-[#36a885] cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-16 border-t border-gray-700 pt-6">
        {bottomText}
      </div>
    </footer>
  );
}
