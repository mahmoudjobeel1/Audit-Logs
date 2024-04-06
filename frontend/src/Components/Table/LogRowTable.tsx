import { Table } from "flowbite-react";
import moment from "moment";
import { useState } from "react";
import { LeftArraw } from "../../assests";
import { useTransition, animated } from "react-spring";

import { Card } from "flowbite-react";
import React from "react";
import { IEventType } from "../../store/events";

interface IEventCardType {
  label: string;
  details: { [key: string]: string };
}

const EventCard: React.FC<IEventCardType> = ({ label, details }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl dark:text-white mb-2">{label}</h2>
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="grid grid-cols-2 gap-x-6 gap-y-2 break-all">
          <div className="font-bold">{key}</div>
          <div className="text-gray-900 text-sm">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default function LogRowTable({ event }: { event: IEventType }) {
  const [showInfo, setShowInfo] = useState(false);

  const shortFormatedData = (dateText: string) => {
    const date = moment(dateText);
    const formattedDate = date.format("MMM D, h:mm A");

    return formattedDate;
  };

  const transitions = useTransition(showInfo, {
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-100%,0)" },
  });

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Table.Cell>{event.actorName}</Table.Cell>
        <Table.Cell>{event.action.name}</Table.Cell>
        <Table.Cell>{shortFormatedData(event.occurredAt)}</Table.Cell>
        <Table.Cell>
          <button type="button" onClick={() => setShowInfo(!showInfo)}>
            {LeftArraw}
          </button>
        </Table.Cell>
      </Table.Row>
      <Table.Row className={` ${showInfo ? "table-row" : "hidden"} `}>
        <Table.Cell colSpan={100}>
          <Card>
           {transitions((style, item) =>
                item ? (
             <animated.div style={style}> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-x-12 gap-y-6">              <EventCard
                label="ACTOR"
                details={{
                  Name: event.actorName,
                  Group: event.group,
                  ID: event.actorId,
                }}
              />
              <EventCard
                label="ACTION"
                details={{
                  Name: event.action.name,
                  Object: event.action.object,
                  ID: event.action.id,
                }}
              />
              <EventCard
                label="Date"
                details={{
                  Readable: shortFormatedData(event.occurredAt),
                }}
              />
              <EventCard
                label="METADATA"
                details={{
                  location: event.location,
                  ...event.metadata,
                }}
              />
              <EventCard
                label="ACTOR"
                details={{
                  Name: "Mahmoud",
                  Location: "Cairo",
                }}
              />
              <EventCard
                label="TARGET"
                details={{
                  Name: event.targetName,
                  ID: event.targetId,
                }}
              />
            </div>
            </animated.div>
                ) : null
              )}
          </Card>
        </Table.Cell>
      </Table.Row>
    </>
  );
}
