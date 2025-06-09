"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sky-400 mb-4">Convergex AI</h3>
            <p className="text-gray-300 mb-4">Building the future with AI-powered solutions that scale.</p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  AI SaaS Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Internal Tooling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Automation Workflows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  LLM Integration
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-sky-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>hello@convergexai.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Convergex AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
