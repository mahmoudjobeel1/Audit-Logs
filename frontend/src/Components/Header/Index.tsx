import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";
import FiltersButton from "./FiltersButton";
import LiveButton from "./LiveButton";

export default function Header() {
  return (
    <div className="sticky shadow bg-gray-50 dark:bg-gray-900 top-0 z-50 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <SearchInput />
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <ExportButton />
        <FiltersButton />
        <LiveButton />
      </div>
    </div>
  );
}
