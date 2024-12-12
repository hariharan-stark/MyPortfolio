import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
              alt="Research Lab"
              className="rounded-lg shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-600/10 rounded-full -z-10" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Hariharan</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I am an experienced product team member with over three years in web application development, specializing in Python scripting, machine learning, and backend technologies. My work has spanned industrial domains, each offering unique challenges that I have tackled with advanced analytics, machine learning, and optimization techniques. I've worked on integrating generative AI solutions with digital twins and simulation models data.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            My expertise also extends to leveraging data insights for business optimization, such as improving customer retention and supply chain performance. I am continually driven to develop innovative, data-driven solutions to real-world challenges across multiple sectors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}