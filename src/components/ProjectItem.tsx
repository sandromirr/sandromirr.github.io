import { ExternalLink } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  description: string;
  link: string;
}

function ProjectItem({ title, description, link }: ProjectItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-between">
        {title}
        <a href={link} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <ExternalLink className="h-5 w-5" />
        </a>
      </h3>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default ProjectItem;
