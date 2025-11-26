import { colors } from "@/constants";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import ImageList, { ImageListProps } from "./ImageList";
import PostActions from "./PostActions";
import Profile from "./Profile";
import CustomText from "./ui/CustomText";

interface FeedItemProps {
  postId: number;
  isDetail?: boolean; // 피드를 눌러 상세페이지로 이동한후 또 상세페이지로 이동하는 것을 방지하기위함
}

function FeedItem({ postId, isDetail = false }: FeedItemProps) {
  const dummyImages: ImageListProps = {
    imageList: [
      { id: 1, url: "https://picsum.photos/200/300?random=1" },
      { id: 2, url: "https://picsum.photos/200/300?random=2" },
      { id: 3, url: "https://picsum.photos/200/300?random=3" },
      { id: 4, url: "https://picsum.photos/200/300?random=4" },
    ],
  };
  const handlePressFeed = () => {
    if (!isDetail) {
      router.push({
        pathname: "/(tabs)/feed/free/[id]",
        params: { id: postId },
      });
    }
  };
  const ContainerComponent = isDetail ? View : Pressable;
  return (
    <ContainerComponent
      style={styles.container}
      {...(!isDetail && { onPress: handlePressFeed })}> 
      <View style={[styles.freeItemContainer, isDetail && styles.detailItem]}>
        <View style={styles.profileContainer}>
          <Profile
            name={`Name`}
            university="university name"
            optiontype={"otherProfile"}
          />
        </View>
        <CustomText fontWeight="semibold" style={styles.titleStyle}>
          Title
        </CustomText>
        <ImageList {...dummyImages} />
        {isDetail && (
          <CustomText fontWeight="medium" style={styles.contentContainer}>
            Content Text...
          </CustomText>
        )}
        <PostActions isDetail={isDetail} />

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
    backgroundColor: colors.GRAY_100,
  },
  freeItemContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: colors.GRAY_100,
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
  profileContainer: {
    marginHorizontal: -8,
    width: "110%",
  },
  titleStyle: {
    fontSize: 20,
    color: colors.GRAY_900,
  },
  headerContentContainer: {
    paddingBottom: 16,
  },
  contentContainer: { fontSize: 12, color: colors.GRAY_900 },
  feedTag: {
    height: 28,
    paddingHorizontal: 16,
    paddingVertical: 2.5,
    backgroundColor: colors.GRAY_100,
    borderRadius: 14,
    textAlignVertical: "center",
    // iOS 스타일
    shadowColor: "#00000063",
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,

    // Android 스타일
    elevation: 8,

    color: colors.GRAY_600,
    fontSize: 14,
    opacity: 0.9,
  },
});

export default FeedItem;
