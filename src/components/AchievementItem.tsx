import type { Achievement as AchievementModel } from '../models/Achievement';

function AchievementItem({ title, description, highlight }: AchievementModel) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">
        {description}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
          {highlight}
        </p>
      </div>
    </div>
  );
}

export default AchievementItem;
