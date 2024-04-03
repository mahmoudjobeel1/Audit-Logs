import React from "react";
import { Table } from "flowbite-react";
import LogRowTable from "./LogRowTable";

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
        <Table.Body
          className="divide-y"
        >
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
          <LogRowTable />
        </Table.Body>
      </Table>
    </div>
  );
}
