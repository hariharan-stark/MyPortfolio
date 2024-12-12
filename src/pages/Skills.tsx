import { motion } from 'framer-motion';
import { Code2, Database, Microscope, LineChart, Network, Terminal } from 'lucide-react';
import SkillCard from '../components/SkillCard';

const skillCategories = [
  {
    category: "Programming",
    icon: <Code2 size={24} />,
    skills: ['Python', 'Django', 'Flask', 'OOPs', 'Design Pattern']
  },
  {
    category: "Data Science",
    icon: <LineChart size={24} />,
    skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Feature Engineering"]
  },
  {
    category: "Machine Learning",
    icon: <Network size={24} />,
    skills: [ "Scikit-learn","Deep Learning","TensorFlow", "PyTorch", "NLP"]
  },
  {
    category: "Databases",
    icon: <Database size={24} />,
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Redis','MongoDB']
  },
  {
    category: "Development Tools",
    icon: <Terminal size={24} />,
    skills: ['GCP', 'GitHub, GitLab', 'Apache Kafka', 'Apache Nifi', 'Docker',"CI/CD"]
  },
  // {
  //   category: "Research Tools",
  //   icon: <Microscope size={24} />,
  //   skills: ["LaTeX", "Research Methodology", "Scientific Writing", "Data Analysis", "Literature Review"]
  // }
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Skills</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and research capabilities
            across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}