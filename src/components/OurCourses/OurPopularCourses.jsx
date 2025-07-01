// OurPopularCourses.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Graphic from "../../images/graphic_design.jpg";
import Illustration from "../../images/illustration_design.jpg";
import UI from "../../images/UI_design.jpg";
import Web from "../../images/web_development.jpg";
import App from "../../images/App_developer.jpg";

export default function OurPopularCourses() {
  const courses = [
    {
      id: 1,
      title: "Graphic design course",
      image: Graphic,
      rating: 4.8,
      students: "2.5k",
      price: "$199",
    },
    {
      id: 2,
      title: "Illustration design course",
      image: Illustration,
      rating: 4.7,
      students: "3k",
      price: "$149",
    },
    {
      id: 3,
      title: "UI/UX design course",
      image: UI,
      rating: 4.9,
      students: "1.2k",
      price: "$249",
    },
    {
      id: 4,
      title: "Web development course",
      image: Web,
      rating: 4.6,
      students: "2k",
      price: "$99",
    },
    {
      id: 5,
      title: "Mobile App Development",
      image: App,
      rating: 4.8,
      students: "1.8k",
      price: "$129",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" size={16} />
        ))}
        {hasHalfStar && <StarHalf className="text-yellow-500 fill-yellow-500" size={16} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarEmpty key={`empty-${i}`} className="text-gray-300" size={16} />
        ))}
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="popular-courses" className="bg-white py-16 px-4 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Popular Courses
        </h2>
        <p className="mt-4 text-gray-600">
          {/* TODO: Replace static description with API-driven content */}
          Discover top courses crafted by industry experts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              className="px-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover rounded-t-md"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {course.title}
                  </h3>

                  <div className="flex justify-between items-center mb-2">
                    {renderStars(course.rating)}
                    <span className="text-[#3fba96] font-semibold text-lg">
                      {course.price}
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    {course.students} students enrolled
                  </div>

                  <button className="bg-[#3fba96] hover:bg-[#36a885] w-full text-white text-sm px-4 py-2 rounded-sm transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
