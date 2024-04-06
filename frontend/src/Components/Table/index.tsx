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
          <Table.HeadCell>Actor</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell />
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
