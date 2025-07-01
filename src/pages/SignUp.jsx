import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Static config; replace with API data when available
const signupConfig = {
  initialValues: { name: "", email: "", password: "" },
  validation: {
    name: { required: "Full Name is required" },
    email: { required: "Email is required", invalid: "Invalid email address" },
    password: { required: "Password is required", min: { length: 6, message: "Password must be at least 6 characters" } }
  },
  animations: {
    container: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
  },
  button: { idle: "Sign Up", loading: "Signing Up...", className: "w-full bg-[#3fba96] hover:bg-[#31997f] text-white p-3 rounded-md transition duration-300" },
  links: { login: { to: "/login", label: "Login here", className: "text-[#3fba96] hover:underline" }, home: "/" }
};

// Build dynamic Yup schema from config
const buildValidationSchema = (config) =>
  Yup.object({
    name: Yup.string().required(config.name.required),
    email: Yup.string().email(config.email.invalid).required(config.email.required),
    password: Yup.string().min(config.password.min.length, config.password.min.message).required(config.password.required)
  });

export default function SignUp() {
  const navigate = useNavigate();
  const { initialValues, validation, animations, button, links } = signupConfig;

  const validationSchema = buildValidationSchema(validation);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Sign Up Values:", values);
    setSubmitting(false);
    navigate(links.home);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-100 to-white">
      <motion.div {...animations.container} className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#3fba96] mb-6">Create an Account</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3fba96] outline-none" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field name="email" type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3fba96] outline-none" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field name="password" type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3fba96] outline-none" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button type="submit" disabled={isSubmitting} className={button.className}>
                {isSubmitting ? button.loading : button.idle}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to={links.login.to} className={links.login.className}>
            {links.login.label}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
