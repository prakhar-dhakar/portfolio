import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer 2',
      company: 'JP Morgan Chase',
      location: 'Bengaluru, India',
      period: 'July 2023 – present',
      achievements: [
        'Designed and implemented transformations and pipeline modules for a cloud-agnostic feature store, enabling seamless feature processing across diverse cloud providers (e.g., AWS, GCP)',
        'Extended data ingestion capabilities by integrating Apache Beam pipelines with sources like Google PubSub, BigQuery, and CockroachDB, broadening data accessibility by supporting various file formats (CSV, Avro, Parquet, JSON)',
        'Pioneered seamless Python UDF integration in the Java Beam pipeline, leveraging a custom python expansion service, bridging the data science and core Java processing gap'
      ]
    },
    {
      title: 'ML Engineer',
      company: 'ExaWizards Inc',
      location: 'Hyderabad, India',
      period: 'July 2021 – Jun 2023',
      subtitle: 'Japan based firm specializing in development of AI-enabled services',
      achievements: [
        'Led development of major features in ATP (Auto-Training-Pipeline), an AI pipeline utilizing micro-services architecture to create Synthetic Data using Unity3D, train ML Algorithms, and deploy them on the cloud',
        'Reduced ATP\'s running costs by 70% through AWS resource migration, enabling scalable multi-user access',
        'Built vision models using the U-Net architecture to predict depth image noises and trained Cycle-GAN models to simulate RGB noises, improving the realism of synthetic images',
        'Contributed to the development of a real-time software pipeline for pick-and-place robots, incorporating a deep learning-based perception system and deploying it on a UR5e robot using ROS, MoveIt, gRPC, and Docker',
        'Supervised internship students to build a Cloud Infrastructure Management repository, automating cloud resources management using Terraform and a Github Actions CI-CD pipeline'
      ]
    },
    {
      title: 'ML Intern',
      company: 'ExaWizards Inc',
      location: 'Remote',
      period: 'Apr 2020 – Aug 2020',
      achievements: [
        'Achieved 97% accuracy in predicting relative height, with a 5% error margin, using an InceptionV3 network with LDL (Label Distribution Learning) and Expectation Regression',
        'Proposed a new method for pre-processing images that reduced joint loss by 7% in a pose estimation algorithm',
        'Built a ResNet based classifier with 93% accuracy to differentiate between children and adults, to be integrated into an AI camera product: Milcube'
      ]
    },
    {
      title: 'Research Intern',
      company: 'Concordia University',
      location: 'Montreal, Canada',
      period: 'Jun 2020 – Sept 2020',
      subtitle: 'Research Intern under Dr. Mazdak Nik-Bakht',
      achievements: [
        'Analyzed citizens\' comfort levels in different areas surrounding Montreal using mined comments and reviews from websites like Trip Advisor, Twitter, and Plantogether.city',
        'Utilized NLP techniques, including LDA, BERT, and sentiment analysis, to extract valuable insights from data'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Elucidata',
      location: 'New Delhi, India',
      period: 'May 2019 – July 2019',
      subtitle: 'Biomedical data company that provides curated biomolecular data prepared for ML applications',
      achievements: [
        'Automated Omics data pipelines, reducing analysis time from days to minutes for Data Scientists',
        'Implemented the Abstract Factory Pattern to deliver a Shiny app written in Python and R, ensuring scalability and reproducibility'
      ]
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
    <section id="experience" className="relative py-12">
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
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 mt-1 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <div className="space-y-4 w-full">
                    <div>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.period}</span>
                      </div>
                      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{exp.company}</div>
                      <div className="text-gray-600 dark:text-gray-400">{exp.location}</div>
                      {exp.subtitle && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">{exp.subtitle}</div>
                      )}
                    </div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
