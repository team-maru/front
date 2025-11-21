import { dummyGatherings } from "@/data/dummyData";
import dayjs from "dayjs";
import EventItem from "./EventItem";

interface TheLatestGatheringListProps {}

function TheLatestGatheringList({}: TheLatestGatheringListProps) {
  const upcomingGatherings = dummyGatherings
    .filter((gathering) => dayjs(gathering.meetDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.meetDate).valueOf() - dayjs(b.meetDate).valueOf())
    .slice(0, 4);
  return (
    <>
      {upcomingGatherings.map((event) => (
        <EventItem key={event.id} isType="gathering" eventPostId={event.id} />
      ))}
    </>
  );
}


export default TheLatestGatheringList;
