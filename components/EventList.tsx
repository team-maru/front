import EventItem from "./EventItem";

function EventList() {
  return (
    <>
      <EventItem eventPostId={1} />
      <EventItem eventPostId={2} />
      <EventItem eventPostId={3} />
      <EventItem eventPostId={4} />
    </>
  );
}

export default EventList;
