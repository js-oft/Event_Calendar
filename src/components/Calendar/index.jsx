import React, { useEffect, useState } from "react";
import { parseEvents } from "../../utils/events";
import DayLabels from "../DayLabels";
import Event from "../Event/Event";
import EventForm from "../Event/EventForm";
import Grid from "../Grid";
import Loader from "../Loader";
import Navigation from "../Navigation";
import { CustomCalendar } from "./style";

const Calendar = ({ month, year, preloadedEvents = [] }) => {
  const selectedDate = new Date(year, month - 1);

  const [date, setDate] = useState(selectedDate);
  const [viewingEvent, setViewingEvent] = useState(false);
  const [showingEventForm, setShowingEventForm] = useState({ visible: false });
  const [isLoading, setIsLoading] = useState(false);

  const parsedEvents = parseEvents(preloadedEvents);
  const [events, setEvents] = useState(parsedEvents);

  useEffect(() => {
    console.log("Date has changed... Let's load some fresh data");
  }, [date]);

  const addEvent = (event) => {
    setIsLoading(true);
    setShowingEventForm({ visible: false });

    setTimeout(() => {
      const parsedEvents = parseEvents([event]);

      const updatedEvents = [...events];
      updatedEvents.push(parsedEvents[0]);

      setEvents(updatedEvents);
      setIsLoading(false);
    });
  };

  const editEvent = (event) => {
    setIsLoading(true);
    setShowingEventForm({ visible: false });

    setTimeout(() => {
      const parsedEvent = parseEvents([event]);

      const updatedEvents = [...events].map((updatedEvent) => {
        return updatedEvent.id === event.id ? parsedEvent[0] : updatedEvent;
      });

      setEvents(updatedEvents);
      setIsLoading(false);
    });
  };

  const deleteEvent = (event) => {
    setIsLoading(true);
    setViewingEvent(null);

    setTimeout(() => {
      const updatedEvents = [...events].filter(
        (finalEvent) => finalEvent.id !== event.id
      );

      setEvents(updatedEvents);
      setIsLoading(false);
    });
  };

  return (
    <CustomCalendar>
      {isLoading && <Loader />}

      <Navigation
        date={date}
        setDate={setDate}
        setShowingEventForm={setShowingEventForm}
      />

      <DayLabels />

      <Grid
        date={date}
        events={events}
        setShowingEventForm={setShowingEventForm}
        setViewingEvent={setViewingEvent}
        actualDate={date}
        rowcount={5}
      />

      {viewingEvent && (
        <Event
          event={viewingEvent}
          setShowingEventForm={setShowingEventForm}
          setViewingEvent={setViewingEvent}
          deleteEvent={deleteEvent}
        />
      )}

      {showingEventForm && showingEventForm.visible && (
        <EventForm
          withEvent={showingEventForm.withEvent}
          preselectedDate={showingEventForm.preselectedDate}
          setShowingEventForm={setShowingEventForm}
          addEvent={addEvent}
          editEvent={editEvent}
          setViewingEvent={setViewingEvent}
          rowcount={5}
        />
      )}
    </CustomCalendar>
  );
};

export default Calendar;
