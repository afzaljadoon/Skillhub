import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import AskQueryImg from "../../images/ask_query.webp";

// Static config; replace with API data when available
const queryConfig = {
  image: {
    src: AskQueryImg,
    alt: "Do you have a query",
    wrapperClass: "md:w-1/2",
    motionProps: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 }
    }
  },
  text: {
    wrapperClass: "md:w-1/2",
    title: "Do you have any query?",
    description: "Non-disclosure agreement seed round seed money accelerator influencer.",
    motionProps: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 }
    },
    search: {
      placeholder: "Search course title",
      buttonLabel: "Search",
      inputClass: "pl-10 pr-4 py-3 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#36a885]",
      buttonClass: "bg-[#3fba96] hover:bg-[#36a885] text-white px-6 py-3 rounded-r-md transition-colors"
    }
  }
};

export default function HaveAQuery() {
  const { image, text } = queryConfig;

  return (
    <section className="bg-white py-16 px-4 md:px-12 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <motion.div
          {...image.motionProps}
          className={image.wrapperClass}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-w-sm mx-auto md:mx-0"
          />
        </motion.div>

        {/* Text & Search */}
        <motion.div
          {...text.motionProps}
          className={text.wrapperClass}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {text.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {text.description}
          </p>

          <div className="flex w-full max-w-md">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={text.search.placeholder}
                className={text.search.inputClass}
              />
            </div>
            <button className={text.search.buttonClass}>
              {text.search.buttonLabel}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
