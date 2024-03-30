import FilterButton from "./FilterButton";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <SearchInput />
      <FilterButton />
    </div>
  );
}
