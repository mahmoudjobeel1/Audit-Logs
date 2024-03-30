import { GenericButton } from "..";
import React, { useState } from "react";

export default function LiveButton() {
  const [isLive, setIsLife] = useState(false);
  return (
    <GenericButton
      icon={
        <svg
          viewBox="0 0 7 7"
          className="h-4 w-4 mr-2 text-gray-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C1.3431 6 0 4.6569 0 3C0 1.3431 1.3431 0 3 0C4.6569 0 6 1.3431 6 3C6 4.6569 4.6569 6 3 6z"
              fill={!isLive ? "#f92f2f" : "#3dffb5"}
            ></path>
          </g>
        </svg>
      }
      text="Live"
      onClick={() => {
        setIsLife(!isLive);
      }}
    />
  );
}
