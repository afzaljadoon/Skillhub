import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StatsImg from "../../images/Stats.png";

// Static config; swap for API data later
const statsConfig = {
  image: {
    src: StatsImg,
    alt: "Student Success",
    wrapperClass: "relative md:pr-0",
    imgClass: "w-full max-w-md mx-auto md:mx-0",
    bgCircles: [
      {
        className: "absolute top-0 right-1/3 w-64 h-64 bg-[#8bd2bd] rounded-full -z-0 transform -translate-y-1/9"
      },
      {
        className: "absolute top-10 right-1/4 w-40 h-40 bg-[#c4ede1] rounded-full -z-0"
      }
    ],
    motionProps: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 }
    }
  },
  text: {
    title: "Over 1M+ Students get's job",
    paragraphs: [
      "Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure.",
      "Non-disclosure agreement seed round seed money accelerator influencer."
    ],
    titleClass: "text-3xl md:text-5xl font-bold text-gray-900 mb-6",
    paragraphClass: "text-gray-700 text-lg mb-4",
    button: {
      to: "/resources",
      label: "Explore More",
      className: "bg-[#3fba96] hover:bg-transparent hover:text-[#3fba96] border-2 border-[#3fba96] text-white px-8 py-3 rounded transition-colors duration-300 font-medium"
    },
    motionProps: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: 0.2 }
    }
  }
};

export default function StudentStats() {
  const { image, text } = statsConfig;

  return (
    <section className="bg-white py-16 px-4 md:px-6 relative font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-0 items-center">
        {/* Image container */}
        <motion.div
          {...image.motionProps}
          className={image.wrapperClass}
        >
          <div className="relative z-10 md:translate-x-8">
            <img src={image.src} alt={image.alt} className={image.imgClass} />
          </div>
          {image.bgCircles.map((circle, idx) => (
            <div key={idx} className={circle.className} />
          ))}
        </motion.div>

        {/* Text content */}
        <motion.div
          {...text.motionProps}
          className="md:pl-4"
        >
          <h2 className={text.titleClass}>{text.title}</h2>
          {text.paragraphs.map((p, idx) => (
            <p key={idx} className={text.paragraphClass}>
              {p}
            </p>
          ))}
          <Link to={text.button.to} className="inline-block">
            <button className={text.button.className}>
              {text.button.label}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
