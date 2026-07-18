import { GraduationCap } from 'lucide-react';
import EducationItem from './EducationItem';
import type { Education } from '../models/Education';

interface EducationsProps {
  education: Education[];
}

function Educations({ education }: EducationsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <GraduationCap className="mr-2" /> Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            school={edu.school}
            degree={edu.degree}
            period={edu.period}
            description={edu.description}
            logo={edu.logo}
          />
        ))}
      </div>
    </section>
  );
}

export default Educations;
