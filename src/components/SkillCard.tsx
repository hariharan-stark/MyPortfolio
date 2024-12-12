import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export default function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-indigo-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}