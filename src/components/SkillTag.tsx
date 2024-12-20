interface SkillTagProps {
    skill: string;
  }
  
  export default function SkillTag({ skill }: SkillTagProps) {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors duration-200">
        {skill}
      </span>
    );
  }