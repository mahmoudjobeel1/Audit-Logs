import React, { useState } from "react";
import moment from "moment";
import { LeftArraw } from "../../assests/svgIcons";
import { Table } from "flowbite-react";

export function LogRowTable() {
  const [showInfo, setShowInfo] = useState(false);

  const shortFormatedData = (dateText: string) => {
    const date = moment(dateText);
    const formattedDate = date.format("MMM D, h:mm A");

    return formattedDate;
  };

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>Mahmoud</Table.Cell>
        <Table.Cell>user.login_succeeded</Table.Cell>
        <Table.Cell>{shortFormatedData("2022-01-05T14:31:13.607Z")}</Table.Cell>
        <Table.Cell>
          <button type="button" onClick={() => setShowInfo(!showInfo)}>
            {LeftArraw}
          </button>
        </Table.Cell>
      </Table.Row>
    </>
  );
}
export default function LogsTable() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Actor</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell />
        </Table.Head>
        <Table.Body className="divide-y">
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
        </Table.Body>
      </Table>
    </div>
  );
}
