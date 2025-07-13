"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Play, CheckCircle, BookOpen, Users, Zap } from "lucide-react"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]"
        >
          {/* Left Content - spans 7 columns on large screens */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
                <Zap className="w-4 h-4" />
                New: AI-Powered Note Organization
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Capture Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Thoughts
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transform your ideas into organized knowledge with intelligent note-taking, seamless synchronization, and
              powerful search. Join 50,000+ writers, students, and thinkers already building their digital brain.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Writing <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Sync across devices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Privacy focused</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - spans 5 columns on large screens */}
          <div className="lg:col-span-5 relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Main Notes Dashboard Card */}
              <motion.div
                variants={cardVariants}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative z-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">My Notes</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex items-center justify-between p-4 bg-purple-500/20 rounded-2xl border border-purple-400/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">Book Ideas & Concepts</span>
                    </div>
                    <span className="text-purple-300 text-sm">12 notes</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex items-center justify-between p-4 bg-green-500/20 rounded-2xl border border-green-400/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <span className="text-white font-medium">Daily Journal</span>
                    </div>
                    <span className="text-green-300 text-sm">Today</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="flex items-center justify-between p-4 bg-blue-500/20 rounded-2xl border border-blue-400/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                      <span className="text-white font-medium">Research Notes</span>
                    </div>
                    <span className="text-blue-300 text-sm">8 notes</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Word Count Card */}
              <motion.div
                variants={cardVariants}
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                className="absolute -top-6 -right-4 sm:-right-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 sm:p-6 text-white shadow-2xl z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6" />
                  <span className="font-bold text-lg">2,847</span>
                </div>
                <div className="text-purple-100 text-sm">Words Written</div>
                <div className="text-xs text-purple-200 mt-1">This month</div>
              </motion.div>

              {/* Recent Activity Card */}
              <motion.div
                variants={cardVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-purple-400" />
                  <span className="font-bold text-white">Recent Activity</span>
                </div>
                <div className="space-y-2 text-xs text-gray-300">
                  <div>📝 Created "Meeting Notes"</div>
                  <div>✏️ Updated "Project Ideas"</div>
                  <div>🔗 Linked 3 related notes</div>
                </div>
              </motion.div>

              {/* Search Card */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  y: {
                    duration: 4.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }}
                className="absolute top-20 -right-8 z-15 bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold text-white text-sm">Quick Search</span>
                </div>
                <div className="text-xs text-gray-300">
                  <div className="bg-white/10 rounded px-2 py-1 mb-1">"productivity tips"</div>
                  <div className="text-yellow-300">3 results found</div>
                </div>
              </motion.div>

              {/* Notification Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-16 -left-2 sm:-left-4 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg z-30"
              >
                5 new ideas
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
