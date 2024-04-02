import { Table } from "flowbite-react";
import moment from "moment";
import { useState } from "react";
import { LeftArraw } from "../../assests";
import { useTransition, animated } from "react-spring";

import { Card } from "flowbite-react";
import React from "react";

interface IEventCardType {
  label?: string;
  details?: { [key: string]: string };
}

const EventCard: React.FC<IEventCardType> = ({ label, details }) => {
  return (
    <Card>
      <div className=" flex flex-wrap flex-row gap-x-8 gap-y-6">
        <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actor
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="font-bold text-left">Name</span>
            <span className="text-left">Mahmoud</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actor
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="font-bold text-left">Name</span>
            <span className="text-left">Mahmoud</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actor
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="font-bold text-left">Name</span>
            <span className="text-left">Mahmoud</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actor
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="font-bold text-left">Name</span>
            <span className="text-left">Mahmoud</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Actor
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="font-bold text-left">Name</span>
            <span className="text-left">Mahmoud</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
            <span className="font-bold text-left">Location</span>
            <span className="text-left">Cairo</span>
          </div>
        </div>
      </div>
    </Card>
  );
  // return (
  // <div className="flex flex-col gap-y-2 border-2 border-dashed p-4 rounded-3xl">
  //   <h2 className="text-xl tracking-tight dark:text-white">{label}</h2>
  //   <div className="grid grid-cols-2 gap-x-8 gap-y-2">
  //     {Object.entries(details).map(([key, value]) => (
  //       <React.Fragment key={key}>
  //         <span className="font-bold text-left">{key}</span>
  //         <span className="text-left text-gray-900">{value}</span>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // </div>
  // );
};

export default function LogRowTable() {
  const [showInfo, setShowInfo] = useState(false);

  const shortFormatedData = (dateText: string) => {
    const date = moment(dateText);
    const formattedDate = date.format("MMM D, h:mm A");

    return formattedDate;
  };

  const transitions = useTransition(showInfo, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
  });

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Table.Cell>Mahmoud</Table.Cell>
        <Table.Cell>user.login_succeeded</Table.Cell>
        <Table.Cell>{shortFormatedData("2022-01-05T14:31:13.607Z")}</Table.Cell>
        <Table.Cell>
          <button type="button" onClick={() => setShowInfo(!showInfo)}>
            {LeftArraw}
          </button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell colSpan={100}>
          <EventCard />
        </Table.Cell>
      </Table.Row>
      {/* <Table.Row className={` ${showInfo ? "table-row" : "hidden"} `}>
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <Table.Cell colSpan={100}>
                <Card>
                  <div className="flex flex-wrap flex-row gap-x-12 gap-y-6">
                    <EventCard
                      label="ACTOR"
                      details={{
                        Name: "Mahmoud",
                        Location: "Cairo",
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
                      label="ACTOR"
                      details={{
                        Name: "Mahmoud",
                        Location: "Cairo",
                      }}
                    />
                    <EventCard
                      label="ACTOR"
                      details={{
                        Name: "Mahmoud",
                        Location: "Cairo",
                        Location2: "Cairo",
                      }}
                    />
                    <EventCard
                      label="ACTOR"
                      details={{
                        Name: "Mahmoud",
                        Location: "Cairo",
                      }}
                    />
                  </div>
                </Card>
              </Table.Cell>
            </animated.div>
          ) : null
        )}
      </Table.Row> */}
    </>
  );
}
