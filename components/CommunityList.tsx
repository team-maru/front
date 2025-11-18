import { FlatList } from "react-native";

import CommunityItem from "./CommunityItem";

function CommunityList() {
  return (
    <FlatList
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
      renderItem={({ item }) => <CommunityItem postId={item.id} />}
      keyExtractor={(item) => String(item.id)} // 키로써 식별자 역할
      horizontal
      onEndReachedThreshold={0.5} //0.5일때 목록 절반에서 다음 페이지 미리 불러오기
    />
  );
}

export default CommunityList;
