import { useState } from "react";
import { RedLiveIcon, GreenLiveIcon } from "../../assests";

export default function LiveButton() {
    const [isLive, setIsLife] = useState(false);
  
    return (
      <button
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium bg-gray-100 text-gray-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        onClick={() => {
          setIsLife(!isLive);
        }}
      >
        {!isLive ? RedLiveIcon : GreenLiveIcon}
        Live
      </button>
    );
  }
  