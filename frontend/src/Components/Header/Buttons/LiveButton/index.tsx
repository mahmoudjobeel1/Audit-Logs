import { GenericButton } from "..";
import React, { useState } from "react";
import { GreenLiveIcon, RedLiveIcon } from "../../../../assests/svgIcons";

export default function LiveButton() {
  const [isLive, setIsLife] = useState(false);
  return (
    <GenericButton
      icon={!isLive ? RedLiveIcon : GreenLiveIcon}
      text="Live"
      onClick={() => {
        setIsLife(!isLive);
      }}
    />
  );
}
