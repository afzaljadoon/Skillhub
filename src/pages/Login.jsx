import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";

// Static config; replace with API data when available
const loginConfig = {
  initialValues: { email: "", password: "" },
  validation: {
    email: { required: "Email is required", invalid: "Invalid email" },
    password: { required: "Password is required" }
  },
  animations: {
    container: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  },
  button: { idle: "Login", loading: "Logging In...", className: "w-full bg-[#3fba96] hover:bg-[#31997f] text-white p-3 rounded-md transition duration-300" },
  links: { signup: { to: "/signup", label: "Sign up here", className: "text-[#3fba96] hover:underline" }, home: "/" }
};

// Build dynamic validation schema
const buildLoginSchema = (rules) =>
  Yup.object({
    email: Yup.string().email(rules.email.invalid).required(rules.email.required),
    password: Yup.string().required(rules.password.required)
  });

export default function Login() {
  const navigate = useNavigate();
  const { initialValues, validation, animations, button, links } = loginConfig;
  const validationSchema = buildLoginSchema(validation);

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login Values:", values);
    setSubmitting(false);
    navigate(links.home);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-green-100">
      <motion.div {...animations.container} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#3fba96] mb-6">Welcome Back</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3fba96] outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3fba96] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button type="submit" disabled={isSubmitting} className={button.className}>
                {isSubmitting ? button.loading : button.idle}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to={links.signup.to} className={links.signup.className}>
            {links.signup.label}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
