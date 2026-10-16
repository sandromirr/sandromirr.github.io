import { Briefcase } from 'lucide-react';
import ExperienceItem from './ExperienceItem';
import type { Experience } from '../models/Experience';

interface ExperiencesProps {
  jobs: Experience[];
}

function Experiences({ jobs }: ExperiencesProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Briefcase className="mr-2" /> Experience
      </h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <ExperienceItem
            key={index}
            company={job.company}
            position={job.position}
            period={job.period}
            description={job.description}
            logo={job.logo}
            logoDark={job.logoDark}
          />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
