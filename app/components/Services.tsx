"use client"

import { motion } from "framer-motion"
import { CpuChipIcon, CogIcon, BoltIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

const services = [
  {
    icon: CpuChipIcon,
    title: "AI SaaS Development",
    description: "Custom AI-powered applications that scale with your business needs and drive real results.",
  },
  {
    icon: CogIcon,
    title: "Internal Tooling",
    description: "Streamline operations with bespoke internal tools designed for your specific workflows.",
  },
  {
    icon: BoltIcon,
    title: "Automation Workflows",
    description: "Eliminate repetitive tasks with intelligent automation that saves time and reduces errors.",
  },
  {
    icon: CodeBracketIcon,
    title: "LLM Integration",
    description: "Seamlessly integrate large language models into your existing systems and processes.",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in building cutting-edge AI solutions that transform how businesses operate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl card-hover"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
