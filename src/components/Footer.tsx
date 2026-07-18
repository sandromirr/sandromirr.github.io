function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} All rights reserved!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
