import React from "react";
import { Table } from "flowbite-react";
import LogRowTable from "./LogRowTable";
import { useEventsStore } from "../../store/events";

export default function LogsTable() {
  const { arrayOfEvents } = useEventsStore();
  const events = arrayOfEvents || [];

  return (
    <div className="overflow-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="bg-gray-100">Actor</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Action</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100">Date</Table.HeadCell>
          <Table.HeadCell className="bg-gray-100"/>
        </Table.Head>
        <Table.Body className="divide-y">
          {events.map((event) => (
            <LogRowTable key={event.id} event={event} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
