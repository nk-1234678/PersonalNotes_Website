"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Download, Star, Apple, Smartphone } from "lucide-react"

export default function MobileAppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left side - Enhanced Phone mockup */}
          <motion.div variants={slideInLeft} className="relative flex justify-center lg:justify-start">
            {/* Phone frame with enhanced design */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative w-80 sm:w-96 h-[600px] sm:h-[700px]"
            >
              {/* Phone shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-[3rem] blur-2xl transform translate-y-8 scale-105" />

              {/* Phone body */}
              <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-900">9:41</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border-2 border-gray-400 rounded-sm">
                        <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">NotesApp</h3>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-purple-100 text-sm mt-1">Capture your thoughts ✨</p>
                  </div>

                  {/* App content */}
                  <div className="p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { label: "Notes", value: "127", color: "purple" },
                        { label: "Words", value: "8.2K", color: "blue" },
                        { label: "Ideas", value: "43", color: "green" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                          className={`bg-${stat.color}-50 p-3 rounded-2xl text-center border border-${stat.color}-100`}
                        >
                          <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                          <div className={`text-xs text-${stat.color}-500 font-medium`}>{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Recent notes */}
                    <div className="space-y-3">
                      {[
                        {
                          title: "Morning Thoughts",
                          preview: "Today I realized that...",
                          time: "2m ago",
                          color: "purple",
                        },
                        { title: "Book Ideas", preview: "A story about time travel...", time: "1h ago", color: "blue" },
                        {
                          title: "Meeting Notes",
                          preview: "Key points from today's...",
                          time: "3h ago",
                          color: "green",
                        },
                      ].map((note, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                          className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 text-sm">{note.title}</h4>
                            <span className="text-xs text-gray-500">{note.time}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{note.preview}</p>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 bg-${note.color}-400 rounded-full`}></div>
                            <span className="text-xs text-gray-500">
                              #{note.color === "purple" ? "thoughts" : note.color === "blue" ? "ideas" : "work"}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-bold text-lg">4.9</span>
              </div>
              <div className="text-green-100 text-xs">App Store Rating</div>
              <div className="text-green-200 text-xs">15K+ reviews</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100"
            >
              <div className="text-sm font-bold text-gray-900 mb-2">📝 Writing Streak</div>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-xs text-gray-600">days in a row</div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Content */}
          <motion.div variants={slideInRight} className="text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-500/30 mb-6">
                📱 Mobile Writing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Capture Ideas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                  On The Go
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            >
              Never lose a brilliant idea again. Our mobile app makes it effortless to capture thoughts, voice memos,
              and quick notes wherever inspiration strikes.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {["Voice-to-text transcription", "Offline writing mode", "Smart auto-sync", "Quick capture widget"].map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ),
              )}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Free
              </motion.button>

              <motion.button
                className="border-2 border-gray-500 text-gray-300 hover:border-purple-500 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Features <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* App store badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {[
                { icon: Apple, store: "App Store", subtitle: "Download on the" },
                { icon: Smartphone, store: "Google Play", subtitle: "Get it on" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <badge.icon className="w-8 h-8" />
                  <div>
                    <div className="text-xs text-gray-300">{badge.subtitle}</div>
                    <div className="font-bold">{badge.store}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
