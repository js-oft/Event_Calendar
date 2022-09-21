import React from "styled-components";
import { findEventsForDate } from "../../utils/events";
import { startOfDay } from "../../utils/formatters";
import EventPoint from "../Event/EventPoint";
import { Cell, PointsWrapper } from "./style";

const Grid = ({
  date,
  events,
  setViewingEvent,
  setShowingEventForm,
  actualDate,
  rowcount
}) => {
  const ROWS_COUNT = rowcount;
  const currentDate = startOfDay(new Date());

  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startingDate.setDate(startingDate.getDate() - startingDate.getDay());

  const dates = [];
  for (let i = 0; i < ROWS_COUNT * 7; i++) {
    const date = new Date(startingDate);
    dates.push({ date, events: findEventsForDate(events, date) });
    startingDate.setDate(startingDate.getDate() + 1);
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <Cell key={index}>
            <Cell.Date
              current={
                date.date.getTime() === currentDate.getTime() ? "current" : ""
              }
            >
              {date.date.getMonth() === actualDate.getMonth() &&
                date.date.getDate()}
            </Cell.Date>
            <Cell.PointsWrapper>
              {date.events.map((event, index) => (
                <EventPoint
                  key={index}
                  event={event}
                  setViewingEvent={setViewingEvent}
                />
              ))}
            </Cell.PointsWrapper>
          </Cell>
        );
      })}
    </>
  );
};

export default Grid;
