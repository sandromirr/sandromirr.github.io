import type { Experience } from './Experience';
import type { Achievement } from './Achievement';
import type { Availability } from './Availability';
import type { Education } from './Education';
import type { Project } from './Project';
import type { SkillCategory } from './SkillCategory';

export interface Resume {
  photoUrl: string;
  fullName: string;
  title: string;
  country?: string;
  flagUrl?: string;
  githubUrl: string;
  linkedInUrl: string;
  email: string;
  availability: Availability;
  about: string;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
}