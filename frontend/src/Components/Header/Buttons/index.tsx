import { ReactNode } from "react";
import FilterButton from "./FilterButton";

interface IGenericButtonProps {
  icon?: ReactNode;
  text: string;
  onClick: () => void;
}

export function GenericButton({ icon, text, onClick }: IGenericButtonProps) {
  return (
    <button
      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

export default function Buttons() {
  return (
    <>
      <FilterButton />
    </>
  );
}
