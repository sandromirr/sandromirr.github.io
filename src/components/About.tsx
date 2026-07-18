interface AboutProps {
  text: string;
}

function About({ text }: AboutProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
}

export default About;
