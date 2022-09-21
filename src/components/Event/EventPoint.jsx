import React from "react";
import { Point } from "./style";

const EventPoint = ({ event, setViewingEvent }) => {
  return <Point status={event?.type} onClick={() => setViewingEvent(true)} />;
};

export default EventPoint;
