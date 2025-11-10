import { colors } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import PostActions from "./PostActions";
import Profile from "./Profile";
import CustomText from "./ui/CustomText";

interface FeedItemProps {
  postId: number;
  isDetail?: boolean; // 피드를 눌러 상세페이지로 이동한후 또 상세페이지로 이동하는 것을 방지하기위함
}

function FeedItem({ postId, isDetail = false }: FeedItemProps) {
  const handlePressFeed = () => {
    if (!isDetail) {
      router.push({ pathname: "/post/[id]", params: { id: postId } });
    }
  };
  const ContainerComponent = isDetail ? View : Pressable;
  return (
    <ContainerComponent style={styles.container} onPress={handlePressFeed}>
      <View style={[styles.freeItemContainer, isDetail && styles.detailItem]}>
        <Profile
          onPress={() => {}}
          name={`Name`}
          university="university name"
          option={true}
        />
        <CustomText fontWeight="semibold" style={styles.titleStyle}>
          Title
        </CustomText>
        <ScrollView
          contentContainerStyle={styles.imagesContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4].map((_, idx) => (
            <Image
              key={idx}
              source={require("@/assets/images/Earth.png")}
              style={styles.imageStyle}
            />
          ))}
        </ScrollView>
        {isDetail && (
          <CustomText fontWeight="medium" style={styles.contentContainer}>
            Content Text...
          </CustomText>
        )}
        <PostActions />

        <CustomText fontWeight="medium" style={styles.feedTag}>
          Ask
        </CustomText>
      </View>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  freeItemContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: colors.WHITE,
    marginTop: 12,
    margin: 16,
    borderColor: colors.GRAY_100,
    borderRadius: 20,
    gap: 16,

    // iOS 스타일
    shadowColor: "#8e8e8eff",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 10,
  },
  detailItem: {
    marginTop: 6,
  },
  titleStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 20,
    color: colors.GRAY_900,
  },
  imagesContainer: {
    gap: 16,
  },
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  headerContentContainer: {
    paddingBottom: 16,
  },
  contentContainer: { fontSize: 16, color: colors.GRAY_900 },
  feedTag: {
    paddingHorizontal: 14,
    paddingVertical: 3,
    backgroundColor: colors.WHITE,
    borderRadius: 16,
    // iOS 스타일
    shadowColor: "#00000063",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,

    // Android 스타일
    elevation: 8,

    color: colors.GRAY_600,
    fontSize: 12,
    opacity: 0.9,
  },
});

export default FeedItem;
