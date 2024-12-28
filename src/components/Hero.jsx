import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section ref={containerRef} className="relative min-h-[85vh] flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 -bottom-48">
        <div className="absolute inset-0 opacity-90">
          {/* Gentle floating blobs */}
          <div className="absolute top-1/4 -left-48 w-[40rem] h-[40rem] bg-teal-400/60 dark:bg-teal-500/40 rounded-full mix-blend-multiply filter blur-[100px] animate-float" />
          <div className="absolute top-1/3 -right-48 w-[45rem] h-[45rem] bg-blue-400/55 dark:bg-blue-500/35 rounded-full mix-blend-multiply filter blur-[100px] animate-float animation-delay-2000" />
          <div className="absolute -bottom-96 left-1/2 w-[50rem] h-[50rem] bg-purple-400/50 dark:bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[100px] animate-float animation-delay-4000" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <div className="relative inline-block">
            {/* Enhanced Splash effect */}
            <motion.div 
              style={{ scale, opacity, rotate }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            >
              <div className="absolute w-[40rem] h-[40rem] animate-splash-slow">
                <div className="absolute inset-0 bg-gradient-conic from-teal-400/75 via-blue-400/75 to-purple-400/75 dark:from-teal-400/45 dark:via-blue-400/45 dark:to-purple-400/45 rounded-full blur-[60px]" />
              </div>
              <div className="absolute w-[45rem] h-[45rem] animate-splash-slow animation-delay-2000">
                <div className="absolute inset-0 bg-gradient-conic from-purple-400/75 via-teal-400/75 to-blue-400/75 dark:from-purple-400/45 dark:via-teal-400/45 dark:to-blue-400/45 rounded-full blur-[70px]" />
              </div>
              <div className="absolute w-[50rem] h-[50rem] animate-splash-slow animation-delay-4000">
                <div className="absolute inset-0 bg-gradient-conic from-blue-400/75 via-purple-400/75 to-teal-400/75 dark:from-blue-400/45 dark:via-purple-400/45 dark:to-teal-400/45 rounded-full blur-[80px]" />
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient relative z-10">
              Prakhar Dhakar
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed relative z-10"
          >
            Software engineer proficient in maintaining, developing and deploying software, ML systems on the edge and cloud
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 relative z-10"
          >
            <a
              href="#experience"
              className="group relative px-6 py-3 text-lg font-semibold text-white overflow-hidden rounded-full bg-gradient-glow transition-all duration-300"
            >
              <span className="relative z-10">View Experience</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="#projects"
              className="group relative px-6 py-3 text-lg font-semibold overflow-hidden rounded-full transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                See Projects
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
