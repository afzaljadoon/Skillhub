import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

// Static config; replace with API data when available
const contactConfig = {
  sectionId: "contact-us",
  title: "Contact Us",
  animation: {
    heading: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
    left: { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
    form: { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true } }
  },
  contactDetails: [
    { icon: FaEnvelope, label: "Email", value: "support@skillhub.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+92 300 1234567" },
    { icon: FaMapMarkedAlt, label: "Location", value: "Lahore, Pakistan" }
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.714342998154!2d74.33874615!3d31.5203698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d1c3b7cb9f%3A0xd55c327ac50e5c44!2sLahore!5e0!3m2!1sen!2s!4v1683520194483!5m2!1sen!2s",
  emailjs: {
    serviceId: "service_fp3a69p",
    templateId: "template_y614lgm",
    publicKey: "4Xj6Js_zUJGu5s8d9"
  },
  formFields: [
    { name: "user_name", label: "Name", type: "text" },
    { name: "user_email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea", rows: 5 }
  ],
  submitButton: { label: "Send Message", className: "bg-[#3fba96] hover:bg-[#36a885] text-white px-6 py-2 rounded shadow-md transition" }
};

export default function ContactUs() {
  const { sectionId, title, animation, contactDetails, mapEmbedUrl, emailjs: ej, formFields, submitButton } = contactConfig;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(ej.serviceId, ej.templateId, form.current, ej.publicKey)
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      }, () => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id={sectionId} className="bg-white py-16 px-6 md:px-20 font-mono">
      <motion.h2
        className="text-4xl font-bold text-center text-[#3fba96] mb-10"
        {...animation.heading}
      >
        {title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info & Map */}
        <motion.div className="bg-gray-100 p-8 rounded-xl shadow-lg" {...animation.left}>
          <h3 className="text-2xl font-semibold text-[#3fba96] mb-6">Get in Touch</h3>
          <div className="space-y-4 text-gray-700 mb-6">
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <p key={idx} className="flex items-center gap-3">
                  <Icon className="text-[#3fba96]" /> {detail.value}
                </p>
              );
            })}
          </div>
          <div className="rounded overflow-hidden shadow-lg h-64">
            <iframe
              title="Live Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 p-8 rounded-xl shadow-lg"
          {...animation.form}
        >
          {formFields.map((field, idx) => (
            <div key={idx} className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  rows={field.rows}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3fba96]"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3fba96]"
                />
              )}
            </div>
          ))}
          <button type="submit" className={submitButton.className}>
            {submitButton.label}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
