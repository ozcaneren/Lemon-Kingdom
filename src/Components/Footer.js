export default function Footer() {
  return (
    <footer className="bg-yellow-500">
      <div className="container px-6 pb-4 mx-auto">
        <div className="text-center">
          <a href="https://github.com" className="text-3xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            Lemon Kingdom
          </a>

          <div className="flex flex-wrap justify-center mt-5 -mx-4">
            <a href="https://github.com" className="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400">
              Benefits
            </a>

            <a href="https://github.com"
               className="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
               aria-label="Reddit"> Types </a>

            <a href="https://github.com"
               className="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
               aria-label="Reddit"> Reacts </a>

            <a href="https://github.com"
               className="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
               aria-label="Reddit"> Workers </a>

            <a href="https://github.com"
               className="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
               aria-label="Reddit"> Contact </a>
          </div>
        </div>
      </div>
    </footer>
  )
}