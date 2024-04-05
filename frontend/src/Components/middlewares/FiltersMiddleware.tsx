import { useEffect } from "react";
import { useFilterStore } from "../../store/filters";

export default function FiltersMiddleware() {
  const { filters } = useFilterStore();
  useEffect(() => {
    console.log("tessss",filters);
  }, [filters]);
  return null;
}
