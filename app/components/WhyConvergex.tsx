"use client"

import { motion } from "framer-motion"
import { CheckIcon } from "@heroicons/react/24/solid"

const benefits = [
  "Elite full-stack developers with AI expertise",
  "End-to-end development from concept to deployment",
  "Proven track record with startups and mid-market companies",
  "Rapid prototyping and iterative development",
  "Scalable architecture built for growth",
  "Ongoing support and maintenance",
]

export function WhyConvergex() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-sky-400">Convergex AI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We don't just build software – we craft intelligent solutions that give you a competitive edge in the
              AI-driven future.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
                  { step: "02", title: "Design", desc: "Creating the perfect solution architecture" },
                  { step: "03", title: "Develop", desc: "Building with cutting-edge AI technology" },
                  { step: "04", title: "Deploy", desc: "Launching and scaling your solution" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
