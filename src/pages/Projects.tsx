import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import researchAiImage from '../images/researchai.webp';
import researchAiImage2 from '../images/researchai2.webp';

const projects = [
  {
    title: "Research Analyst Assistant",
    description: `Designed an AI-driven system
      for data analysis, strategic
      decision-making, and insights
      generation. Leveraged agentic
      architectures with LLMs and
      frameworks like <span class="text-red-500">LangChain,
      LangGraph</span> and techniques like
      <span class="text-red-500">ReAct</span> and <span class="text-red-500">RAG</span> to interpret the
      complex data and provide
      insights.
      Features include <span class="text-red-500">company
      profile retrieval</span> (market cap,
      earnings, margins), <span class="text-red-500">real-time
      news</span> search via Tavily, <span class="text-red-500">SQL RAG</span>
      for stock data analysis, and
      Python code execution for
      advanced analytics and charting
      all integrated as tools.`,
    date: "",
    image: researchAiImage,
    githubUrl: "https://github.com/yourusername/embeddings-research"
  },
  {
    title: "Deep Learning Applications",
    description: "Implemented deep learning models for pattern recognition in manufacturing processes, improving efficiency and reducing errors.",
    date: "",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    githubUrl: "https://github.com/yourusername/deep-learning-manufacturing"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of research projects and technical implementations
            in machine learning, optimization, and data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}