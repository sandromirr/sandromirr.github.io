import type { Experience } from './Experience';
import type { Achievement } from './Achievement';
import type { Education } from './Education';
import type { Project } from './Project';
import type { SkillCategory } from './SkillCategory';

export interface Resume {
  imageUrl: string;
  fullName: string;
  title: string;
  githubUrl: string;
  linkedInUrl: string;
  email: string;
  about: string;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: SkillCategory[];
  achievements: Achievement[];
}