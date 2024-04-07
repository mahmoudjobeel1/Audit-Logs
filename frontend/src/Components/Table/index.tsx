import React from "react";
import { Card, Table } from "flowbite-react";
import LogRowTable from "./LogRowTable";
import { EmptyIcon } from "../../assests";
import { useFetchEvents } from "../../customeHooks/useFetchEvents";

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

const LoadingStatus: React.FC = () => {
  const divs = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="h-2 bg-slate-200 rounded"></div>
  ));
  return (
    <tr>
      <Table.Cell colSpan={100}>
        <div
          aria-colspan={100}
          className=" shadow rounded-md p-4 max-w w-full mx-auto"
        >
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">{divs}</div>
            </div>
          </div>
        </div>
      </Table.Cell>
    </tr>
  );
};

export default function LogsTable() {
  const { isLoading, arrayOfEvents } = useFetchEvents();
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
          {!isLoading ? (
            events.length > 0 ? (
              events.map((event) => (
                <LogRowTable key={event.id} event={event} />
              ))
            ) : (
              <NoDataToShow />
            )
          ) : (
            <LoadingStatus />
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
