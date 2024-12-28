import { motion } from 'framer-motion'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const About = () => {
  const skills = {
    'Languages': ['Go', 'Python', 'Java', 'C++', 'Bash'],
    'Tools & Technologies': ['GCP', 'AWS', 'Pytorch', 'Tensorflow', 'Beam', 'OpenCV', 'Docker', 'gRPC', 'Ansible', 'Git'],
    'Interests': ['Distributed Systems', 'ML Ops', 'Federated Learning', 'F1']
  }

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
    <section id="about" className="relative py-12">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
