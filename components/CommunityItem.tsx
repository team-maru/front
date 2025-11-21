import { colors } from "@/constants";
import { dummyCategories, dummyPosts } from "@/data/dummyData";
import { Pressable, StyleSheet, View } from "react-native";
import CreatedAt from "./CreatedAt";
import CustomText from "./ui/CustomText";

interface CommunityItemProps {
  postId: number;
}

function CommunityItem({ postId }: CommunityItemProps) {
  const post = dummyPosts.find((p) => p.id === postId) || dummyPosts[0];
  const category = dummyCategories.find((c) => c.id === post.category_id);
  const handlePressFeed = () => {
    // router.push({ pathname: "/(tabs)/feed/free/[id]", params: { id: postId } });
    // 더미데이터로 만들어진 포스트 상세보기 페이지는 없어서 주석처리 해놨어요 시간 되면 나중에 추가할게요
  };
  return (
    <Pressable style={styles.container} onPress={handlePressFeed}>
      <View style={styles.itemContainer}>
        <View style={styles.categoryContainer}>
          <CustomText fontWeight="medium" style={styles.feedTag}>
            {category?.category_name}
          </CustomText>
        </View>
        <View style={styles.titleContainer}>
          <CustomText
            fontWeight="semibold"
            style={styles.titleText}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {post.title}
          </CustomText>
        </View>

        <View style={styles.createdAtContainer}>
          <CreatedAt createdAt={post.created_at} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
  },
  itemContainer: {
    width: 148,
    height: 143,

    alignItems: "flex-start",
    backgroundColor: colors.GRAY_100,
    borderRadius: 15,
    marginHorizontal: 8,
    marginVertical: 16,

    // iOS 스타일
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 6,
  },

  categoryContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 14,
    paddingHorizontal: 8.5,
  },
  feedTag: {
    height: 21,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: colors.GRAY_100,
    borderRadius: 10,
    textAlignVertical: "center",
    // iOS 스타일
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 6,

    color: colors.GRAY_600,
    fontSize: 10,
  },

  titleContainer: {
    marginTop: 6,
    paddingHorizontal: 16,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  titleText: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 14,
    color: colors.GRAY_900,
  },

  createdAtContainer: {
    width: "100%",
    height: 12,
    marginVertical: 16,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default CommunityItem;
