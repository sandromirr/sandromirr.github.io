interface SkillItemProps {
  category: string;
  skills: string[];
}

function SkillItem({ category, skills }: SkillItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
