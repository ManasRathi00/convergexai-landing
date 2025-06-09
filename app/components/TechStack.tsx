"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Next.js", category: "Frontend", icon: "N" },
  { name: "Node.js", category: "Backend", icon: "N" },
  { name: "Python", category: "AI/ML", icon: "Py" },
  { name: "GPT-4", category: "AI/ML", icon: "G4" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "React", category: "Frontend", icon: "R" },
  { name: "Vercel", category: "Deployment", icon: "V" },
  { name: "PostgreSQL", category: "Database", icon: "PG" },
]

export function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <span className="text-blue-600 font-medium text-sm">POWERED BY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies to build robust, scalable solutions that drive real business results
          </p>
        </motion.div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"
            />
          </div>

          {/* Tech cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                }}
                className="relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-400 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-500">{tech.category}</p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-50 rounded-full opacity-70"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">...and many more cutting-edge tools to build your perfect solution</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
