import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  date,
  image,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
    >
      {/* <div className="aspect-w-16 aspect-h-9"> */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-fit w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        {/* <p className="text-gray-300 mb-4">{description}</p> */}
        <p className="text-gray-300 mb-4"><span dangerouslySetInnerHTML={{ __html: description }} /></p>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}