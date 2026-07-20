import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedInUrl: string;
}

function Contact({ email, githubUrl, linkedInUrl }: ContactProps) {
  const githubHandle = githubUrl.replace(/\/$/, '').split('/').pop();
  const linkedInHandle = linkedInUrl.replace(/\/$/, '').split('/').pop();

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Mail className="mr-2" /> Get In Touch
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Mail className="h-8 w-8 mb-3 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
            <span className="text-sm mt-1 text-gray-500 dark:text-gray-400">{email}</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Github className="h-8 w-8 mb-3 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
            <span className="text-sm mt-1 text-gray-500 dark:text-gray-400">@{githubHandle}</span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Linkedin className="h-8 w-8 mb-3 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
            <span className="text-sm mt-1 text-gray-500 dark:text-gray-400">@{linkedInHandle}</span>
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Available for freelance projects and full-time opportunities</p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Mail className="h-5 w-5 mr-2" />
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
