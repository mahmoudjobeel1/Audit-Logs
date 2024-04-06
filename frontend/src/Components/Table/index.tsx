import React from "react";
import { Card, Table } from "flowbite-react";
import LogRowTable from "./LogRowTable";
import { useEventsStore } from "../../store/events";
import { EmptyIcon } from "../../assests";

const NoDataToShow: React.FC = () => {
  return (
    <tr>
      <Table.Cell colSpan={100}>
        <Card
          className="max-w flex flex-col justify-center items-center text-center p-4"
          aria-colspan={100}
        >
          <EmptyIcon />
          <p className="font-normal text-2xl text-gray-500 dark:text-gray-400 mt-2">
            No Data To Show
          </p>
        </Card>
      </Table.Cell>
    </tr>
  );
};

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
          <Table.HeadCell className="bg-gray-100" />
        </Table.Head>
        <Table.Body className="divide-y">
          {events.length > 0 ? (
            events.map((event) => <LogRowTable key={event.id} event={event} />)
          ) : (
            <NoDataToShow />
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
