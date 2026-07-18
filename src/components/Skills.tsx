import { Code } from 'lucide-react';
import SkillItem from './SkillItem';
import type { SkillCategory } from '../models/SkillCategory';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

function Skills({ skillCategories }: SkillsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Code className="mr-2" /> Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillItem key={index} category={category.category} skills={category.skills} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
