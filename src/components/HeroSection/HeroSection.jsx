import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../images/hero.jpg";

// Static configuration for HeroSection; replace with API data when available
const heroData = {
  link: { to: "/online-learning", label: "Grow yourself with us" },
  title: "Grow your skill & get world class jobs",
  description: "Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement seed round seed.",
  search: { placeholder: "Search course title", buttonLabel: "Search" },
  stats: [
    {
      text: "2M+ Learners",
      className: "absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-2 rounded-xl text-sm shadow-md",
    },
    // future stats can be added here
  ],
  image: {
    src: heroImg,
    alt: "Skillhub Hero",
    className: "w-full max-w-md mx-auto",
  },
  animation: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
};

export default function HeroSection() {
  const { link, title, description, search, stats, image, animation } = heroData;

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          <Link to={link.to} className="font-semibold text-[#3fba96] transition">
            {link.label}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mt-2">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">{description}</p>

          <div className="mt-6 flex items-center w-full max-w-md">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={search.placeholder}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#36a885]"
              />
            </div>
            <button className="bg-[#3fba96] hover:bg-[#36a885] rounded-r-md text-white px-6 py-3 flex items-center whitespace-nowrap">
              {search.buttonLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img src={image.src} alt={image.alt} className={image.className} />
          {stats.map((stat, idx) => (
            <div key={idx} className={stat.className}>
              {stat.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

