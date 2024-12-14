import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileimage from '../images/blac2.png'

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-white text-5xl font-light tracking-widest mb-8">Hariharan</h1>
            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
              Hello! I am an experienced product team member with over three years in web application development, specializing in Python scripting, machine learning, and backend technologies. My work has spanned industrial domains, each offering unique challenges that I have tackled with advanced analytics, machine learning, and optimization techniques. I've worked on integrating generative AI solutions with digital twins and simulation models data.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
              My expertise also extends to leveraging data insights for business optimization, such as improving customer retention and supply chain performance. I am continually driven to develop innovative, data-driven solutions to real-world challenges across multiple sectors.
              </p>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/hariharan-stark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hariharan3111/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:hariharantony341@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // className="relative"
            className="relative order-1 md:order-2"
          >
            <img
              // src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80"
              src={profileimage}
              alt="Profile"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-600/10 rounded-full -z-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">B.E - Mechanical Engineer</h3>
              <p className="text-gray-400">RMK Engineering College</p>
              <p className="text-sm text-gray-400 mb-2">Sep 2017 - Aug 2021</p>
              <p className="text-gray-400">CGPA - 8.3</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Higher Secondary School</h3>
              <p className="text-gray-400">I.V.L. Matric. Hr. Sec. School</p>
              <p className="text-sm text-gray-400 mb-2">2016 - 2017</p>
              <p className="text-gray-400">Percentage - 88%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}