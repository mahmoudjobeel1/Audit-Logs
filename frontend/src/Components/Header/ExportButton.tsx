import { ExportIcon } from "../../assests";

import { saveAs } from "file-saver";
import { IEventType, useEventsStore } from "../../store/events";

export default function ExportButton() {
  const { arrayOfEvents } = useEventsStore();

  const escapeCSV = (value: any): string => {
    if (value == null) return "";
    if (typeof value === "object")
      return JSON.stringify(value).replace(/"/g, '""');
    return String(value).replace(/"/g, '""');
  };

  const convertToCSV = (data: IEventType[]): string => {
    if (data.length === 0) return "";

    const headers = Object.keys(data[0])
      .map((key) =>
        key === "action"
          ? Object.keys(data[0][key])
              .map(
                (subKey) =>
                  `action${subKey.charAt(0).toUpperCase() + subKey.slice(1)}`
              )
              .join(",")
          : key
      )
      .join(",");

    const csvRows = data.map((row) => {
      return Object.entries(row)
        .map(([key, value]) => {
          if (key === "action") {
            return Object.values(value).map(escapeCSV).join(",");
          }
          return escapeCSV(value);
        })
        .join(",");
    });

    return [headers, ...csvRows].join("\n");
  };

  const handleExportClick = () => {
    const csvData = convertToCSV(arrayOfEvents);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "data.csv");
  };

  return (
    <>
      <button
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        onClick={handleExportClick}
      >
        {ExportIcon}
        Export
      </button>
    </>
  );
}
