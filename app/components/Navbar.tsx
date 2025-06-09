"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useContactModal } from "../hooks/useContactModal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useContactModal()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg shadow-lg rounded-full px-4 py-2"
        >
          <div className="flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Convergex AI
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={openModal}
                  className="ml-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Start Your Project
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 p-2">
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  openModal()
                  setIsOpen(false)
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold py-2 px-6 rounded-full"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
