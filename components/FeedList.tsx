import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList } from "react-native";

import FeedItem from "./FeedItem";

function FeedList() {
  const [isRefreshing, setIsRefreshing] = useState(false); // 새로고침되는중인지 아닌지

  //해당 탭 버튼 눌렀을때 상단으로 스크롤 올리기
  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  return (
    <FlatList
      ref={ref}
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
      renderItem={({ item }) => <FeedItem post={item} isDetail={false} />}
      keyExtractor={(item) => String(item.id)} // 키로써 식별자 역할
      onEndReachedThreshold={0.5} //0.5일때 목록 절반에서 다음 페이지 미리 불러오기
      refreshing={isRefreshing}
    />
  );
}

export default FeedList;
