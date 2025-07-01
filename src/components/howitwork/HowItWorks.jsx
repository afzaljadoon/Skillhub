import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, CreditCard, Rocket } from "lucide-react";
import HowItWork from "../../images/howitWork.png";

export default function HowItWorks() {
  const steps = [
    {
      title: "Select a course",
      description:
        "Non-disclosure agreement seed round seed money accelerator influencer.",
      icon: BookOpenCheck,
    },
    {
      title: "Fill it up & give payment",
      description:
        "Non-disclosure agreement seed round seed money accelerator influencer.",
      icon: CreditCard,
    },
    {
      title: "Start build yourself",
      description:
        "Non-disclosure agreement seed round seed money accelerator influencer.",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How it works
        </h2>
        <p className="mt-4 text-gray-600">
          Non-disclosure agreement seed round seed money accelerator influencer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-sm shadow-md p-12 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <IconComponent className="text-[#3fba96] mt-1" size={28} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-1 relative md:ml-20"
        >
          <div className="relative scale-105 md:scale-125 transform origin-center">
            <img
              src={HowItWork}
              alt="How It Works"
              className="w-full max-w-lg mx-auto md:mx-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
