import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Users } from "lucide-react";
import { AiFillFilePdf } from "react-icons/ai";
import videoImg from "../images/video-tutorial.jpg";
import toolsImg from "../images/learning-tools.jpg";

// Static config; replace with API data when available
const resourcesConfig = {
  header: {
    title: "Explore Our Resources",
    subtitle:
      "Access curated materials including PDF guides, video tutorials, and recommended reading to boost your learning.",
    motionProps: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  },
  items: [
    {
      type: "icon",
      icon: AiFillFilePdf,
      title: "PDF Guides",
      description:
        "Download comprehensive PDF notes and cheat sheets to revise core concepts at your own pace.",
      motionProps: { whileHover: { scale: 1.05 } }
    },
    {
      type: "image",
      imgSrc: videoImg,
      alt: "Video Tutorials",
      title: "Video Tutorials",
      description:
        "Learn visually with structured video content crafted by expert instructors in real-world scenarios.",
      motionProps: { whileHover: { scale: 1.05 } },
      imgClass: "w-full h-40 object-cover rounded mb-4"
    },
    {
      type: "icon",
      icon: Users,
      title: "Community Help",
      description:
        "Connect with fellow learners, share questions, and get help instantly from our supportive community.",
      motionProps: { whileHover: { scale: 1.05 } }
    },
    {
      type: "icon",
      icon: BookOpen,
      title: "Suggested Reading",
      description:
        "Explore hand-picked articles, blogs, and eBooks to gain deeper insight into trending topics.",
      motionProps: { whileHover: { scale: 1.05 } }
    },
    {
      type: "icon",
      icon: FileText,
      title: "Assignments",
      description:
        "Practice makes perfect. Solve interactive assignments to test your understanding.",
      motionProps: { whileHover: { scale: 1.05 } }
    },
    {
      type: "image",
      imgSrc: toolsImg,
      alt: "Learning Tools",
      title: "Learning Tools",
      description:
        "Access exclusive tools and templates to aid your coding journey more efficiently.",
      motionProps: { whileHover: { scale: 1.05 } },
      imgClass: "w-full h-40 object-cover rounded mb-4"
    }
  ]
};

export default function ResourcesPage() {
  const { header, items } = resourcesConfig;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-mono">
      {/* Header */}
      <motion.div className="text-center mb-12" {...header.motionProps}>
        <h1 className="text-4xl font-bold text-[#3fba96] mb-4">{header.title}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {header.subtitle}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-center"
              {...item.motionProps}
            >
              {item.type === "icon" ? (
                <IconComp className="w-12 h-12 text-[#3fba96] mx-auto mb-4" />
              ) : (
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className={item.imgClass}
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
