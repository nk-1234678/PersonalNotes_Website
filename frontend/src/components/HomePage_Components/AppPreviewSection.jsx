"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Tablet, Monitor, Zap, Shield, Globe, ArrowRight, Play } from "lucide-react"

export default function AppPreviewSection() {
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

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Writing",
      description: "Optimized for speed with instant saving and real-time synchronization across all devices.",
      highlight: "Auto-save",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your notes are encrypted and stored securely. Only you have access to your thoughts.",
      highlight: "Encrypted",
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Access your notes from anywhere, on any device, with seamless cloud synchronization.",
      highlight: "Always synced",
    },
  ]

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            🚀 Complete Note-Taking Platform
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Second Brain
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the full power of our note-taking platform designed for writers, students, researchers, and
            creative thinkers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left side - Features */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="group flex items-start gap-6 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-500"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">{feature.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-purple-600 font-semibold flex items-center gap-2 text-sm group-hover:text-purple-700 transition-colors duration-300"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {/* Device compatibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-6 sm:p-8"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Write Everywhere</h4>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  {[
                    { icon: Smartphone, label: "Mobile" },
                    { icon: Tablet, label: "Tablet" },
                    { icon: Monitor, label: "Desktop" },
                  ].map((device, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <device.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{device.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex-1 text-right">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ml-auto transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    Try Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Notes interface */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main notes interface */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative z-10 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Note Editor</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Note title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="border-b border-gray-200 pb-3"
                >
                  <h4 className="text-xl font-bold text-gray-900">My Creative Process</h4>
                  <p className="text-sm text-gray-500 mt-1">Last edited 2 minutes ago</p>
                </motion.div>

                {/* Note content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="space-y-3 text-sm text-gray-700"
                >
                  <p>Ideas often come when we least expect them. The key is to have a system ready to capture them.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="font-medium text-yellow-800">
                      💡 Remember: Always carry a notebook or use voice memos
                    </p>
                  </div>
                  <p>Three stages of creativity:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Capture - Get the idea down</li>
                    <li>Connect - Link to related thoughts</li>
                    <li>Create - Transform into something new</li>
                  </ul>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {["creativity", "process", "ideas", "productivity"].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Floating word count */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sm:p-6 rounded-2xl shadow-2xl z-20"
            >
              <div className="text-sm font-bold mb-1">📝 Word Count</div>
              <div className="text-2xl font-bold">247</div>
              <div className="text-xs text-purple-200 mt-1">words</div>
            </motion.div>

            {/* Linked notes indicator */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl z-20 border border-gray-100"
            >
              <div className="text-sm font-bold text-gray-900 mb-3">🔗 Linked Notes</div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="bg-blue-50 px-2 py-1 rounded">Brainstorming Techniques</div>
                <div className="bg-green-50 px-2 py-1 rounded">Daily Writing Habits</div>
                <div className="bg-purple-50 px-2 py-1 rounded">Inspiration Sources</div>
              </div>
            </motion.div>

            {/* Search indicator */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-20 -left-8 w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full z-15"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
