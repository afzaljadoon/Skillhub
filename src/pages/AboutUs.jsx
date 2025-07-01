import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Static images; swap with dynamic imports or URLs when API is available
import aboutImage1 from "../images/about1.jpg";
import aboutImage2 from "../images/about2.jpg";
import instructor1 from "../images/instructor1.jpg";
import instructor2 from "../images/instructor2.jpg";
import instructor3 from "../images/instructor3.jpg";
import instructor4 from "../images/instructor4.jpg";
import instructor5 from "../images/instructor5.jpg";
import instructor6 from "../images/instructor6.jpg";
import student1 from "../images/student1.jpg";
import student2 from "../images/student2.jpg";
import student3 from "../images/student3.jpg";

// Configuration object; replace with API data when ready
const aboutConfig = {
  pageTitle: "About Us",
  introSections: [
    {
      title: "Our Mission",
      text: `At Skillhub, our mission is to democratize learning by providing high-quality, accessible online education. We empower students across the globe to upskill, reskill, and transform their careers through industry-relevant courses, taught by professionals.`,
      image: aboutImage1,
      motion: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7 } }
    },
    {
      title: "Our Products",
      text: `We offer a wide range of products including beginner to advanced online courses, one-on-one mentorship programs, career counseling, resume building, and job placement assistance. Our platform integrates real-world projects and certifications to ensure our students are job-ready.`,
      image: aboutImage2,
      motion: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7 } }
    }
  ],
  instructors: [
    { name: "Jane Doe", title: "Full Stack Developer", img: instructor1 },
    { name: "John Smith", title: "UI/UX Designer", img: instructor2 },
    { name: "Emily Johnson", title: "Data Scientist", img: instructor3 },
    { name: "Michael Lee", title: "Mobile App Developer", img: instructor4 },
    { name: "Sophia Davis", title: "Cloud Engineer", img: instructor5 },
    { name: "David Wilson", title: "AI/ML Engineer", img: instructor6 }
  ],
  testimonials: [
    { name: "Alicia Brown", feedback: "Skillhub helped me switch careers smoothly. The mentorship and real projects made a big difference!", img: student1 },
    { name: "Rahul Mehta", feedback: "The course structure and expert instructors gave me confidence and skills to land a new job in tech!", img: student2 },
    { name: "Lina Xu", feedback: "Great learning experience! The personalized feedback and assignments were super helpful.", img: student3 }
  ],
  impact: [
    { number: "10,000+", label: "Students Enrolled" },
    { number: "95%", label: "Placement Success Rate" },
    { number: "150+", label: "Courses Offered" }
  ],
  cta: {
    heading: "Join thousands of learners transforming their future with us!",
    subtext: "Whether you're a student, working professional, or career changer, Skillhub has something for you.",
    motion: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 } }
  }
};

export default function AboutUs() {
  const { pageTitle, introSections, instructors, testimonials, impact, cta } = aboutConfig;

  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-10 px-5 md:px-20 font-mono">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#3fba96] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {pageTitle}
      </motion.h1>

      {/* Intro Sections */}
      {introSections.map((sec, idx) => (
        <div key={idx} className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>          
          <motion.div
            initial={sec.motion.initial}
            animate={sec.motion.animate}
            transition={sec.motion.transition}
          >
            <img src={sec.image} alt={sec.title} className="rounded-xl shadow-md w-full object-cover" />
          </motion.div>

          <motion.div
            initial={sec.motion.initial}
            animate={sec.motion.animate}
            transition={sec.motion.transition}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{sec.title}</h2>
            <p className="text-gray-600 leading-relaxed">{sec.text}</p>
          </motion.div>
        </div>
      ))}

      {/* Instructors */}
      <div className="mt-20">
        <motion.h2
          className="text-3xl font-bold text-center text-[#3fba96] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Instructors
        </motion.h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          modules={[Pagination, Autoplay]}
          className="mySwiper pb-20 relative"
        >
          {instructors.map((inst, i) => (
            <SwiperSlide key={i}>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-xl shadow-lg text-center">
                <img src={inst.img} alt={inst.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{inst.name}</h4>
                <p className="text-gray-500 text-sm">{inst.title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-4"></div>
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <motion.h2
          className="text-3xl font-bold text-center text-[#3fba96] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Students Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-md text-center">
              <img src={t.img} alt={t.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
              <h4 className="font-semibold text-gray-800">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="mt-20">
        <motion.h2
          className="text-3xl font-bold text-center text-[#3fba96] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {impact.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">{item.number}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={cta.motion.initial}
        animate={cta.motion.animate}
        transition={cta.motion.transition}
        className="text-center mt-20"
      >
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
          {cta.heading}
        </h3>
        <p className="text-gray-600">{cta.subtext}</p>
      </motion.div>
    </div>
  );
}
