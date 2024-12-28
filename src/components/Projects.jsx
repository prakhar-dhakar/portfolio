import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: 'BETIC (Medical Innovation Challenge)',
      subtitle: 'Inter IIT Tech Meet, IIT Bombay',
      period: 'Sept 2018 – Dec 2018',
      link: 'Github',
      achievements: [
        'Developed a non-invasive Glucometer based on the principle of adsorption of a specific wavelength of light by glucose',
        'Trained regression models to accurately predict and transform IR captured data into blood glucose values'
      ]
    }
  ]

  const achievements = [
    {
      year: '2024',
      title: 'Won mission 3 of startree cloud mission impossible worldwide challenge',
      link: 'https://www.linkedin.com/posts/startreedata_startree-realtimeanalytics-competition-activity-7259992426998562818-s0qm'
    },
    {
      year: '2021',
      title: 'Recipient of the prestigious Batra Gold Medal for academic excellence, MSE dept, IIT Kanpur'
    },
    {
      year: '2020',
      title: 'Awarded MITACS Globalink Research Scholarship, Canada'
    },
    {
      year: '2019',
      title: 'Team reached Quarterfinals in IICDC (India Innovation Challenge by Texas Instruments)'
    },
    {
      year: '2018',
      title: 'Secured Bronze in BETiC Medical Innovation Challenge, Inter IIT Tech Meet, IIT Bombay'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="relative py-12">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects & Achievements
            </h2>
          </motion.div>

          {/* Projects */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{project.period}</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{project.subtitle}</div>
                    {project.link && (
                      <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">{project.link}</a>
                    )}
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Scholastic Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold whitespace-nowrap">{achievement.year}</span>
                  {achievement.link ? (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {achievement.title}
                    </a>
                  ) : (
                    <span className="text-gray-700 dark:text-gray-300">{achievement.title}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
