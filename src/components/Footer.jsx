import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      value: 'prakhar.dhakar.2@gmail.com',
      href: 'mailto:prakhar.dhakar.2@gmail.com'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Bengaluru, India'
    }
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/prakhar-dhakar',
      icon: <FiLinkedin className="w-6 h-6" />
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/prakhar-dhakar',
      icon: <FiGithub className="w-6 h-6" />
    }
  ]

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    {item.icon}
                    {item.href ? (
                      <a href={item.href} className="hover:text-indigo-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links and Copyright */}
            <div className="space-y-4 md:text-right">
              <div className="flex md:justify-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-500 hover:text-indigo-600 transition-colors transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date().getFullYear()} Prakhar Dhakar. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
