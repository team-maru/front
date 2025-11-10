import { colors } from "@/constants";
import { Fontisto } from "@expo/vector-icons";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BoardTabs from "./BoardTabs";
import CategoryButtons from "./CategoryButtons";
import FeedItem from "./FeedItem";
import NotificationButton from "./NotificationButton";
import InputField from "./ui/InputField";

function FeedList() {
  const [isRefreshing, setIsRefreshing] = useState(false); // 새로고침되는중인지 아닌지
  const [searchText, setSearchText] = useState("");

  const ListHeader = () => (
    //FlatList의 헤더 컴포넌트
    <View style={styles.headerContentContainer}>
      <NotificationButton />
      <BoardTabs />
      <CategoryButtons />
      <InputField
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Search Keywords"
        leftChild={<Fontisto name="search" size={16} color={colors.GRAY_600} />}
      />
    </View>
  );

  //해당 탭 버튼 눌렀을때 상단으로 스크롤 올리기
  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  return (
    <FlatList
      ref={ref}
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)} // 키로써 식별자 역할
      //   contentContainerStyle={styles.contentContainer}
      onEndReachedThreshold={0.5} //0.5일때 목록 절반에서 다음 페이지 미리 불러오기
      refreshing={isRefreshing}
      ListHeaderComponent={ListHeader}
    />
  );
}

const styles = StyleSheet.create({
  headerContentContainer: {
    backgroundColor: colors.WHITE,
    paddingBottom: 16,
  },
});

export default FeedList;
