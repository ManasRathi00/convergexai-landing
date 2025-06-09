"use client"

import { motion } from "framer-motion"
import { StarIcon } from "@heroicons/react/24/solid"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechStart Inc.",
    content:
      "Convergex AI transformed our operations with a custom GPT-4 tool that reduced our onboarding time by 50%. Their expertise in AI integration is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director, ScaleUp Co.",
    content:
      "The automation workflows they built save us 30+ hours per month on sales reporting. ROI was immediate and continues to grow.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Founder, InnovateLab",
    content:
      "Working with Convergex AI was seamless. They understood our vision and delivered a scalable AI SaaS product that exceeded expectations.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from the companies we've helped transform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
