import { dummyPosts } from "@/data/dummyData";
import dayjs from "dayjs";
import { FlatList } from "react-native";

import CommunityItem from "./CommunityItem";

function CommunityList() {
  const sortedPosts = dummyPosts.sort(
    (a, b) => dayjs(b.created_at).valueOf() - dayjs(a.created_at).valueOf()
  );

  const handleLoadMore = () => {
    // TODO: 추후 API 연동 시 다음 페이지 데이터 로딩
  };

  return (
    <FlatList
      data={sortedPosts}
      renderItem={({ item }) => <CommunityItem postId={item.id} />}
      keyExtractor={(item) => String(item.id)} // 키로써 식별자 역할
      horizontal
      onEndReached={handleLoadMore} // 스크롤 끝에 도달했을 때 호출
      onEndReachedThreshold={0.5} //0.5일때 목록 절반에서 다음 페이지 미리 불러오기
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default CommunityList;
