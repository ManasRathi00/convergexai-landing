"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const upworkProfile = "https://www.upwork.com/freelancers/manasrathi";

const reviews = [
  {
    content:
      "It was a pleasure working with Manas on this project. He consistently put in the effort, took on new challenges with a positive attitude, and showed a strong willingness to grow. We appreciated his adaptability and commitment to delivering results.",
    rating: 5.0,
  },
  {
    content:
      "Manas was a great help on our project and showed strong dedication throughout. We asked him to take on several tasks outside his prior experience, and he was always willing to learn and adapt. His work ethic and openness to growth were much appreciated.",
    rating: 5.0,
  },
  {
    content:
      "Delivered on time, provided great output - we would hire him again should we need data management assistance again.",
    rating: 5.0,
  },
  {
    content:
      "Manas did excellent work for us on building a custom scraping solution. He goes above and beyond on his tasks to ensure everything works well, thank you!",
    rating: 5.0,
  },
  {
    content: "His work ethic and openness to growth were much appreciated.",
    rating: 5.0,
  },
  {
    content:
      "We appreciated his adaptability and commitment to delivering results.",
    rating: 5.0,
  },
  {
    content:
      "He consistently put in the effort, took on new challenges with a positive attitude, and showed a strong willingness to grow.",
    rating: 5.0,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      {/* Decorative blurred background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <span className="text-blue-600 font-medium text-sm">
              Why Choose Us?
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/upwork/upwork-logo.svg"
                alt="Upwork Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <Image
                src="/assets/upwork/top-rated.svg"
                alt="Upwork Top Rated Plus"
                width={60}
                height={60}
                className="h-10 w-10"
                priority
              />
            </div>
            <Link
              href={upworkProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-700 font-semibold underline hover:text-blue-900 transition"
            >
              View our Upwork profile
            </Link>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Top Rated Plus Upwork Agency
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-2">
            Proud to be in the{" "}
            <span className="font-bold text-blue-700">Top 1%</span> of Upwork
            agencies worldwide.
          </p>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 10px 25px -5px rgba(59, 130, 246, 0.10), 0 8px 10px -6px rgba(59, 130, 246, 0.10)",
                }}
                className="relative bg-white rounded-2xl p-8 shadow-md border border-blue-100 overflow-hidden flex flex-col items-center"
              >
                <div className="flex items-center mb-4">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg text-center italic">
                  "{review.content}"
                </p>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-50 rounded-full opacity-70"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href={upworkProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-700 hover:to-sky-500 transition-all duration-200 text-lg"
          >
            <Image
              src="/assets/upwork/upwork-logo.svg"
              alt="Upwork"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            See more reviews on Upwork
          </Link>
        </div>
      </div>
    </section>
  );
}
