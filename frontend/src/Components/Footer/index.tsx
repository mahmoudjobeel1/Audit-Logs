export default function Footer() {
  return (
    <div className="sticky shadow bg-gray-50 dark:bg-gray-900 bottom-0 z-50 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <button className="absolute bottom-0 left-0 z-30 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm text-gray-700 font-medium hover:bg-gray-200 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
        LOAD MORE
      </button>
    </div>
  );
}
