interface EducationItemProps {
  school: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
}

function EducationItem({ school, degree, period, description, logo }: EducationItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${school} logo`}
            className="w-12 h-12 rounded-lg object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{degree}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{school} • {period}</p>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationItem;
