import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import StudentStats from "./components/StudentStats/StudentStats";
import HowItWorks from "./components/howitwork/HowItWorks";
import OurPopularCourses from "./components/OurCourses/OurPopularCourses";
import HaveAQuery from "./components/HaveQuery/HaveAQuery";
import FooterSection from "./components/FooterSection/FooterSection";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";
import OnlineLearning from "./pages/OnlineLearning";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/online-learning" element={<OnlineLearning />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Optional: Homepage route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <StudentStats />
              <HowItWorks />
              <OurPopularCourses />
              <HaveAQuery />
              {/* <FooterSection /> */}
            </>
          }
        />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
