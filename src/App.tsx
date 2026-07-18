import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';
import {
  About,
  Skills,
  Achievements,
  Experiences,
  Educations,
  Projects,
  Contact,
  Footer,
} from './components';
import resumeData from './data/resume.json';
import type { Resume } from './models/Resume';

const resume = resumeData as Resume;

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header/Hero Section */}
      <header className="bg-gray-100 dark:bg-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <button
              onClick={toggleTheme}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <img
              className="h-48 w-48 rounded-full shadow-lg mb-8"
              src={resume.photoUrl}
              alt="Profile"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {resume.fullName}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              {resume.title}
            </p>
            <div className="mt-6 flex space-x-6">
              <a href={resume.githubUrl} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="h-7 w-7" />
              </a>
              <a href={resume.linkedInUrl} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href={`mailto:${resume.email}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <About text={resume.about} />

        {/* Skills Section */}
        <Skills skillCategories={resume.skills} />

        {/* Achievements Section */}
        <Achievements achievements={resume.achievements} />

        {/* Experience Section */}
        <Experiences jobs={resume.experiences} />

        {/* Education Section */}
        <Educations education={resume.educations} />

        {/* Projects Section */}
        <Projects projects={resume.projects} />

        {/* Contact Section */}
        <Contact email={resume.email} githubUrl={resume.githubUrl} linkedInUrl={resume.linkedInUrl} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;