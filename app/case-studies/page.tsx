"use client";

import { motion } from "framer-motion";
import { useContactModal } from "../hooks/useContactModal";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Onboarding",
    client: "TechStart Inc.",
    industry: "SaaS",
    challenge: "Manual onboarding process taking 2+ hours per customer",
    solution:
      "Custom GPT-4 powered onboarding assistant with intelligent form filling and document processing",
    results: [
      "50% reduction in onboarding time",
      "90% customer satisfaction increase",
      "30% reduction in support tickets",
    ],
    image: "/placeholder.svg?height=300&width=400",
    tags: ["GPT-4", "Automation", "Customer Success"],
  },
  {
    id: 2,
    title: "Automated Sales Reporting System",
    client: "ScaleUp Co.",
    industry: "E-commerce",
    challenge: "Sales team spending 30+ hours monthly on manual reporting",
    solution:
      "Intelligent automation system with real-time data processing and AI-generated insights",
    results: [
      "30+ hours saved monthly",
      "95% accuracy improvement",
      "Real-time insights delivery",
    ],
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Automation", "Analytics", "Reporting"],
  },
  {
    id: 3,
    title: "LLM-Powered Content Platform",
    client: "InnovateLab",
    industry: "Marketing",
    challenge: "Need for scalable content generation and optimization",
    solution:
      "Multi-model LLM platform with content optimization and A/B testing capabilities",
    results: [
      "300% content output increase",
      "40% engagement improvement",
      "60% cost reduction",
    ],
    image: "/placeholder.svg?height=300&width=400",
    tags: ["LLM", "Content", "Optimization"],
  },
];

export default function CaseStudies() {
  const { openModal } = useContactModal();

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Real results from real clients. See how we've transformed businesses
            with AI-powered solutions.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    <strong>Client:</strong> {study.client} ({study.industry})
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Solution
                      </h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-2 h-2 bg-sky-500 rounded-full mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss how we can build a custom AI solution for your
            specific needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={openModal}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Book Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
}
