import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeadingXL, BodyText } from '../components/Typography';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl"
        >
          <HeadingXL className="mb-6 text-7xl">
            Product Engineer at
            <span className="block text-indigo-400">
            TCS for Digital twin Systems and Analytics
            </span>
          </HeadingXL>
          
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300"
          >
          <BodyText className="mt-8">
            Designing to help organizations simulate and analyze business scenarios for better decision-making and operational efficiency
          </BodyText>
          </motion.p> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="mailto:hariharantony341@gmail.com"
              className="inline-flex items-center px-7 py-3 text-lg backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}