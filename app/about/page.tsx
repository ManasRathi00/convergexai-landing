"use client";

import { motion } from "framer-motion";
import { useContactModal } from "../hooks/useContactModal";

const team = [
  {
    name: "Manas Rathi",
    role: "Founder & Full Stack AI Engineer",
    bio: "Visionary technologist, architecting bespoke AI solutions that empower businesses to transcend the ordinary. Manas blends deep technical mastery with a relentless drive for innovation.",
    image: "/placeholder-user.jpg",
  },
];

const timeline = [
  {
    year: "2022",
    event:
      "Convergex AI is founded, driven by a passion to redefine what’s possible with AI.",
  },
  {
    year: "2023",
    event:
      "Secured the first wave of visionary clients, delivering transformative, tailor-made AI solutions.",
  },
  {
    year: "2024",
    event:
      "Scaled to 20+ clients across diverse industries, each empowered by bespoke automation and intelligent systems.",
  },
  {
    year: "2025",
    event:
      "Pioneering the next frontier—elevating businesses with cutting-edge AI, one partnership at a time.",
  },
];

export default function About() {
  const { openModal } = useContactModal();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Convergex AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Where vision meets code. Convergex AI crafts elegant, end-to-end AI
            solutions that propel businesses into the future. From our inception
            to a thriving network of 20+ forward-thinking clients, our journey
            is a testament to the power of relentless innovation.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Convergex AI was founded to bridge the gap between cutting-edge
                AI and real-world business impact. In a landscape crowded with
                generic solutions, we envisioned a studio where every line of
                code is meticulously crafted, every algorithm tailored to the
                client’s unique ambitions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a commitment to curiosity and a
                relentless pursuit of excellence. As word spread, Convergex AI
                became the trusted partner for a growing roster of
                innovators—each project a new canvas, each client a collaborator
                in redefining what’s possible.
              </p>
              <p className="text-lg text-gray-600">
                Today, with 20+ transformative client partnerships and a
                portfolio spanning automation, intelligent SaaS, and beyond,
                Convergex AI stands as a beacon for those who demand more from
                technology. The story is just beginning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Team working"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to democratize AI
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Founder
            </h2>
            <p className="text-xl text-gray-600">
              The architect behind your AI transformation
            </p>
          </motion.div>

          <div className="flex justify-center items-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl shadow-lg p-8 max-w-md w-full"
              >
                <img
                  src={member.image || "/placeholder.svg?height=300&width=300"}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-sky-200 shadow-md"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description:
                  "We stay at the cutting edge of AI technology to deliver solutions that give you a competitive advantage.",
              },
              {
                title: "Practical Focus",
                description:
                  "Every solution we build is designed to solve real business problems and deliver measurable results.",
              },
              {
                title: "Partnership Approach",
                description:
                  "We work as an extension of your team, understanding your goals and challenges deeply.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Let's discuss how we can help transform your business with AI.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={openModal}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-7 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>
    </div>
  );
}
