import { dummyGatherings } from "@/data/dummyData";
import { FlatList } from "react-native";
import GatheringItem from "./GatheringItem";

function GatheringList() {
  const sortedGatherings = [...dummyGatherings].sort(
    (a, b) => new Date(a.meetDate).getTime() - new Date(b.meetDate).getTime()
  );

  return (
    <FlatList
      data={sortedGatherings}
      renderItem={({ item }) => <GatheringItem gatheringId={item.id} />}
      keyExtractor={(item) => String(item.id)} // number를 string으로 변환
      horizontal
      onEndReachedThreshold={0.5}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }} // 다른 list들과의 x축 위치 맞추기
    />
  );
}

export default GatheringList;
