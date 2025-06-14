"use client";

import { motion } from "framer-motion";
import {
  MessageCircleIcon,
  MapIcon,
  UsersIcon,
  BarChart3Icon,
} from "lucide-react";

const steps = [
  {
    title: "Project Consultation",
    description:
      "We dive deep into your business goals, technical requirements, and success metrics to understand your vision.",
    icon: MessageCircleIcon,
  },
  {
    title: "Strategic Roadmap",
    description:
      "Our experts create a detailed development roadmap with milestones, timelines, and technical architecture.",
    icon: MapIcon,
  },
  {
    title: "Team Assignment",
    description:
      "We assign our best-fit senior developers and AI specialists to your project for optimal results.",
    icon: UsersIcon,
  },
  {
    title: "Progress Monitoring",
    description:
      "Continuous monitoring, regular updates, and iterative improvements ensure we deliver on time and on budget.",
    icon: BarChart3Icon,
  },
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const arrowVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0.8,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export function WhatWeOffer() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 font-medium text-sm">
              ✨ OUR PROCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            From Idea to <span className="text-blue-600">Reality</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our proven 4-step process ensures your AI solution is delivered on
            time, on budget, and exceeds expectations.
          </motion.p>
        </div>

        {/* Step Cards */}
        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeInUpVariant}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative z-10 p-6 md:p-8 mb-16 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-16 w-full flex justify-center items-center pointer-events-none">
                    <svg width="24" height="64" viewBox="0 0 24 64" fill="none">
                      <motion.path
                        d="M12 0v44l-6-6M12 44l6-6"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={arrowVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg shadow-lg">
            <span className="mr-3 text-xl">✅</span>
            <span>
              <span className="font-bold">Our Guarantee:</span> MVP delivered in{" "}
              <span className="underline underline-offset-2 font-bold">
                4 weeks
              </span>{" "}
              or you don't pay.
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={() => {
              const modal = document.getElementById("contact-modal-trigger");
              if (modal) {
                (modal as HTMLButtonElement).click();
              }
            }}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
