import { Trophy } from 'lucide-react';
import AchievementItem from './AchievementItem';
import type { Achievement as AchievementModel } from '../models/Achievement';

interface AchievementsProps {
  achievements: AchievementModel[];
}

function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Trophy className="mr-2" /> Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            title={achievement.title}
            description={achievement.description}
            highlight={achievement.highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
