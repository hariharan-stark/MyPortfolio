import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import SkillTag from './SkillTag';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills: string[];
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  location,
  date,
  description,
  skills,
  index
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // className="bg-white/0 rounded-xl p-8 hover:bg-white/5 transition-all duration-300"
      className="bg-white/0 border border-white/10 rounded-xl p-8 hover:bg-white/5 hover:border-white/5 transition-all duration-300"

    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-xl text-indigo-400 mb-2">{company}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 mb-6 pl-6">
        {description.map((item, i) => (
          <li key={i} className="font-light text-gray-300">
            • {<span dangerouslySetInnerHTML={{ __html: item }} />}
          </li>
        ))}
      </ul>

      <div className="border-t border-white/10 pt-6">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Skills & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <SkillTag key={i} skill={skill} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}