interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  logoDark?: string;
}

function ExperienceItem({ company, position, period, description, logo, logoDark }: ExperienceItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${company} logo`}
            className={`w-12 h-12 rounded-lg object-cover ${logoDark ? 'dark:hidden' : ''}`}
          />
          {logoDark && (
            <img
              src={logoDark}
              alt={`${company} logo`}
              className="w-12 h-12 rounded-lg object-cover hidden dark:block"
            />
          )}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{company} • {period}</p>
          <div
            className="mt-4 space-y-3 text-gray-600 dark:text-gray-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
