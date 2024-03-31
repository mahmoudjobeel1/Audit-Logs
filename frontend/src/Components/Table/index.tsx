import React from "react";
import moment from "moment";

export function RowTable() {
  const shortFormatedData = (dateText: string) => {
    const date = moment(dateText);
    const formattedDate = date.format("MMM D, h:mm A");

    return formattedDate;
  };

  return (
    <>
      <tr className="border-b dark:border-gray-700">
        <td className="px-4 py-3 flex items-center justify-cente space-x-2">
          <span className="inline-flex items-center justify-center size-[46px] text-sm font-semibold leading-none rounded-full border border-gray-500 text-gray-500 dark:text-gray-400">
            AC
          </span>
          <div>Mahmoud</div>
        </td>
        <td className="px-4 py-3">user.login_succeeded</td>
        <td className="px-4 py-3">
          {shortFormatedData("2022-01-05T14:31:13.607Z")}
        </td>
        <td className="px-4 py-3 flex items-center justify-end">
          <button
            id="apple-imac-20-dropdown-button"
            data-dropdown-toggle="apple-imac-20-dropdown"
            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10 7L15 12L10 17"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}
export default function Table() {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">
            Actor
          </th>
          <th scope="col" className="px-4 py-3">
            Action
          </th>
          <th scope="col" className="px-4 py-3">
            Date
          </th>
          <th scope="col" className="px-4 py-3" />
        </tr>
      </thead>
      <tbody>
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
      </tbody>
    </table>
  );
}
