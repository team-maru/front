import { colors } from "@/constants";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import CreatedAt from "./CreatedAt";
import CustomText from "./ui/CustomText";

interface CommunityItemProps {
  postId: number;
}

function CommunityItem({ postId }: CommunityItemProps) {
  const handlePressFeed = () => {
    router.push({ pathname: "/post/[id]", params: { id: postId } });
  };
  return (
    <Pressable style={styles.container} onPress={handlePressFeed}>
      <View style={styles.itemContainer}>
        <View style={styles.categoryContainer}>
          <CustomText fontWeight="medium" style={styles.feedTag}>
            Campus
          </CustomText>
        </View>
        <View style={styles.titleContainer}>
          <CustomText fontWeight="semibold" style={styles.titleText}>
            Midterm season already… 😵‍💫
          </CustomText>
        </View>

        <View style={styles.createdAtContainer}>
          <CreatedAt createdAt="2025-11-03 14:03" />
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
    flex: 1,

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
    paddingTop: 16,
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
    marginTop: 12,
    paddingLeft: 16,
    height: 53,
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
    marginTop: 17,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default CommunityItem;
