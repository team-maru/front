import { dummyEvents } from "@/data/dummyData";
import dayjs from "dayjs";
import EventItem from "./EventItem";

function EventList() {
  const upcomingEvents = dummyEvents
    .filter((event) => dayjs(event.start_date).isAfter(dayjs()))
    .sort(
      (a, b) => dayjs(a.start_date).valueOf() - dayjs(b.start_date).valueOf()
    )
    .slice(0, 4);

  return (
    <>
      {upcomingEvents.map((event) => (
        <EventItem key={event.id} eventPostId={event.id} />
      ))}
    </>
  );
}

export default EventList;
