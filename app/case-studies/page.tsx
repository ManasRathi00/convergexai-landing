"use client";

import { motion } from "framer-motion";
import { useContactModal } from "../hooks/useContactModal";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Job Search Platform",
    industry: "Recruitment & HR Tech",
    challenge:
      "Traditional job search platforms failed to match candidates with the right roles, leading to 70%+ irrelevant applications and high recruiter churn.",
    solution:
      "Developed a next-generation job search engine using Django and advanced vector search over millions of job postings and candidate profiles. Leveraged semantic search and deep AI-driven matching to understand nuanced skills, experience, and intent.",
    results: [
      "4x increase in relevant job matches",
      "92% candidate satisfaction rate",
      "65% reduction in recruiter screening time",
      "Over 1 million successful placements in 12 months",
    ],
    image: "/case-studies/job_search.svg",
    tags: ["Django", "Vector Search", "Semantic AI", "Recruitment"],
  },
  {
    id: 2,
    title: "AI-Powered Sales Agent",
    industry: "Consumer SaaS",
    challenge:
      "Manual sales processes limited scalability and conversion rates, with inconsistent follow-ups and low engagement.",
    solution:
      "Engineered a fully autonomous AI sales agent from scratch, capable of personalized outreach, real-time objection handling, and dynamic product recommendations. Seamlessly integrated with CRM and messaging platforms for end-to-end automation.",
    results: [
      "Launched in under 8 weeks",
      "Generated $2.5M+ in new sales within 6 months",
      "Achieved 38% higher conversion rates vs. human agents",
      "Handled 50,000+ customer interactions autonomously",
    ],
    image: "/case-studies/sales_agent.svg",
    tags: ["AI Agent", "Sales Automation", "CRM Integration"],
  },
  {
    id: 3,
    title: "AI-Powered Customer Support Revolution",
    industry: "E-commerce",
    challenge:
      "Legacy support systems struggled with high ticket volumes, slow response times, and generic answers that frustrated customers.",
    solution:
      "Deployed a state-of-the-art AI support platform with deep contextual understanding, real-time sentiment analysis, and proactive engagement. The system learns from every interaction, delivering hyper-personalized, empathetic responses at scale.",
    results: [
      "98% first-contact resolution rate",
      "80% reduction in average response time",
      "Customer NPS soared to 75+",
      "Support costs cut by 55% while boosting loyalty",
    ],
    image: "/case-studies/customer_support.svg",
    tags: ["Customer Support", "Conversational AI", "Sentiment Analysis"],
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
