import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';


const certifications = [
  {
    category: 'Cloud Certifications',
    icon: Award,
    items: [
      'Oracle Certified Cloud Infrastructure Foundations (O.C.I.)',
    ],
  },
  {
    category: 'Programming & Development',
    icon: Award,
    items: [
      'JAVA Certificate, HackerRank',
      'Python Certificate, kaggel',
    ],
  },
  {
    category: 'Data Science & Analytics',
    icon: Award,
    items: [
      'Oracle Gen A.I. Professional Certificate (O.C.I.)',
      'Oracle A.I. Foundations Associate (O.C.I.)',
      'Machine Learning Certificate, kaggel',
    ],
  },
  {
    category: 'Security',
    icon: Award,
    items: [
      '(CCNA) Cisco Certified Network Associate 1',
      'Introduction To Cyber Security, Cisco',
      'C.S.F.P.C., CertiProf',
    ],
  },
  {
    category: 'IoT',
    icon: Award,
    items: [
      'Introduction To I.O.T., Cisco',

    ],
  },
  {
    category: 'DevSecOps',
    icon: Award,
    items: [
      'Calico Certificate Level 1 , Tigera',

    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {certifications.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                
                <ul className="list-disc pl-5 space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="text-gray-800 text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
