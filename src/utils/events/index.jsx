import { startOfDay } from "../formatters";

const parseEvents = (events) => {
  return events.map((event) => {
    const from = new Date(event.dateFrom);
    const to = new Date(event.dateTo);

    return {
      ...event,
      from,
      to
    };
  });
};

const findEventsForDate = (events, date) => {
  const dateTime = date.getTime();

  return events.filter((event) => {
    const eventFromTime = startOfDay(event.from).getTime();
    const eventToTime = startOfDay(event.to).getTime();

    return dateTime >= eventFromTime && dateTime <= eventToTime;
  });
};

export { parseEvents, findEventsForDate };
