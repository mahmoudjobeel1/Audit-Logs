import React from "react";
import moment from 'moment'

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
