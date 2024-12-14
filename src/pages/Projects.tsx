import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
// import researchAiImage from '../images/researchai.webp';
// import researchAiImage2 from '../images/researchai2.webp';

const projects = [
  {
    title: "Research Analyst Assistant",
    description: [`The AI-driven system you developed provides significant value by automating and streamlining data analysis for strategic decision-making. By leveraging advanced agentic architectures like <span class="text-red-500">LangChain</span>, <span class="text-red-500">LangGraph</span>, and techniques such as <span class="text-red-500">ReAct</span> and <span class="text-red-500">RAG</span>, the system efficiently interprets complex datasets and generates actionable insights that would otherwise be time-consuming to extract.`, `The real-time market insights, enabled by <span class="text-red-500">Tavily</span>’s news search, ensure that decision-makers are always up-to-date with the latest developments, allowing them to respond quickly to market fluctuations.`, 
    `Additionally, the system’s ability to retrieve detailed company profiles (e.g., market cap, earnings, margins) and perform <span class="text-red-500">SQL</span>-based stock data analysis enhances the accuracy of financial forecasts and investment decisions. With integrated <span class="text-red-500">Python</span> analytics and visualization tools, users can gain deeper insights through advanced data exploration, making it easier to spot trends and make informed business decisions.`, 
    `This combination of speed, automation, and <span class="text-red-500">data-driven intelligence</span> makes the system indispensable for executives, analysts, and decision-makers aiming to stay ahead in competitive markets.

      `],
    date: "July, 2024 - September, 2024",
    // image: researchAiImage,
    githubUrl: "https://github.com/yourusername/embeddings-research"
  },
  {
    title: "Deep Learning Applications",
    description: ["Implemented deep learning models for pattern recognition in manufacturing processes, improving efficiency and reducing errors."],
    date: "September, 2024 - Present",
    // image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
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
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Personal Projects</h1>
          <p className="text-2xl text-gray-400">
            {projects.length} projects
          </p>
          {/* <p className="text-xl text-gray-400">
            A collection of research projects and technical implementations
            in machine learning, optimization, and data analytics.
          </p> */}
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8 md:gap-12"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{project.date}</span>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed">
                {/* {project.description} */}
                {/* <span dangerouslySetInnerHTML={{ __html: project.description }} ></span> */}
                <p className="text-gray-300 mb-4">
                  {project.description.map((point, pointIndex) => (
                      <li key=  {pointIndex} className="mb-2">
                        <span dangerouslySetInnerHTML={{ __html: point }} />
                      </li>
                    ))}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}