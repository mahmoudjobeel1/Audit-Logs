import { Table, Tooltip } from "flowbite-react";
import moment from "moment";
import { useState } from "react";
import { CopyIcon, LeftArraw } from "../../assests";
import { useTransition, animated } from "react-spring";

import { Card } from "flowbite-react";
import React from "react";
import { IEventType } from "../../store/events";

interface IEventCardType {
  label: string;
  details: { [key: string]: string };
}

const getGradientFromChar = (char: string) => {
  const colorCode1 = (char.charCodeAt(0) * 1) % 256;
  const colorCode2 = (char.charCodeAt(0) * 3) % 256;
  return `linear-gradient(to right, rgba(${colorCode1}, 136,229, 0.9), rgba(${colorCode2}, 30, 99, 0.9))`;
};

const CopyToClipboardButton = ({ value }: { value: string }) => {
  const [tooltipContent, setTooltipContent] = useState("copy to clipboard");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setTooltipContent("copied to clipboard");
        setTimeout(() => setTooltipContent("copy to clipboard"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Tooltip
      className="bg-gray-400 font-sans text-xs"
      arrow={false}
      content={tooltipContent}
    >
      <button type="button" onClick={handleCopy}>
        {CopyIcon}
      </button>
    </Tooltip>
  );
};

const EventCard: React.FC<IEventCardType> = ({ label, details }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl dark:text-white mb-2">{label}</h2>
      {Object.entries(details).map(([key, value]) => (
        <div key={key} className="grid grid-cols-2 gap-x-6 gap-y-2 break-all">
          <div className="flex flex-row items-center">
            {key}
            <div className="inline-flex h-6 w-6 items-center ml-2 justify-center rounded-full text-1xl text-white">
              <CopyToClipboardButton value={value} />
            </div>
          </div>
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

  const CharGradient = (char: string) => {
    return {
      background: getGradientFromChar(char),
    };
  };
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Table.Cell>
          <div className="flex flex-row items-center">
            <div
              className={`inline-flex h-6 w-6 items-center mr-2 justify-center rounded-full text-1xl text-white`}
              style={CharGradient(event.actorName[0])}
            >
              {event.actorName[0]}
            </div>

            {event.actorName}
          </div>
        </Table.Cell>
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
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-x-12 gap-y-6">
                    <EventCard
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
