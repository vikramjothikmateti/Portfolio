import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/edd.jpg"
              alt="Vikram Jothik Mateti"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
            Welcome to my portfolio! I am Vikram Jothik Mateti, a passionate software engineer with expertise in real-time Big data and cloud technologies, specializing in building scalable applications and data pipelines. With a strong background in cybersecurity and e-commerce, I thrive on solving complex challenges and delivering innovative solutions. Explore my projects to see how I leverage cutting-edge tools and frameworks to drive impactful results.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With 2+ years of hands-on experience in JavaScript, TypeScript, Python application development with a strong background in cloud technologies and microservices architecture, specializing in performance optimization. Proven record in building robust backend systems using JavaScript and TypeScript for high-traffic applications. 
               Skilled in Cloud infrastructure frameworks, Observability (O11y) frameworks and leading migrations to cloud-native solutions. Adept at collaborating with cross-functional teams to deliver data-driven business insights and optimize costs. 
               Demonstrated ability to setup scalable Big data analytic solutions with reduced infrastructure costs, using real time Big data visualization software like Grafana O.S.S., KubeCost, RedPanda, Confluent Kafka, Apache Druid.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">10+</h3>
                <p className="text-gray-600">Industry Application Projects Experience</p>
              </div>
            </motion.div> 
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
