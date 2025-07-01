import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import OnlineLearnImg from "../images/online-learn.jpg";

// Static config; replace with API data when available
const onlineLearningConfig = {
  sectionId: "online-learning-section",
  title: "Revolutionize Your Learning Journey",
  features: [
    {
      icon: FaChalkboardTeacher,
      title: "Expert Mentorship",
      desc: "Access 1-on-1 mentoring with experienced instructors from top tech companies.",
      delay: 0
    },
    {
      icon: FaLaptopCode,
      title: "Hands-on Projects",
      desc: "Build real-world projects using the MERN stack to boost your portfolio and job readiness.",
      delay: 0.2
    },
    {
      icon: MdOutlineCastForEducation,
      title: "Live & Recorded Sessions",
      desc: "Attend live sessions and revisit recorded lessons anytime for better flexibility.",
      delay: 0.4
    },
    {
      icon: FaCertificate,
      title: "Industry-Recognized Certification",
      desc: "Earn a certificate that proves your skills to employers and clients globally.",
      delay: 0.6
    },
    {
      icon: GiProgression,
      title: "Career Growth",
      desc: "Get career guidance, resume reviews, and mock interviews to prepare for success.",
      delay: 0.8
    }
  ],
  image: {
    src: OnlineLearnImg,
    alt: "Online Learning Illustration",
    title: "Flexible, Interactive & Impactful",
    description: "Our online learning experience combines interactivity, practical assignments, and community support so learners can thrive. Whether you're upgrading your skills or starting from scratch, we’ve got a tailored pathway for you.",
    transition: { duration: 0.5, delay: 0.4 }
  }
};

export default function OnlineLearning() {
  const { sectionId, title, features, image } = onlineLearningConfig;

  return (
    <section id={sectionId} className="bg-gray-50 py-16 px-4 md:px-12 font-mono">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-[#3fba96] mb-12"
      >
        {title}
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feat.delay }}
            >
              <Icon className="text-[#3fba96] text-5xl mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{feat.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={image.transition}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto text-center"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-lg shadow-md mx-auto mb-6 max-h-[400px] object-cover"
        />
        <h3 className="text-2xl font-bold mb-3">{image.title}</h3>
        <p className="text-gray-600 text-md">{image.description}</p>
      </motion.div>
    </section>
  );
}
