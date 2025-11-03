import BoardTabs from "@/components/BoardTabs";
import CategoryButtons from "@/components/CategoryButtons";
import NotificationButton from "@/components/NotificationButton";
import PostActions from "@/components/PostActions";
import Profile from "@/components/Profile";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  const [searchText, setSearchText] = useState("");
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePressOption = () => {
    const options = ["삭제", "수정", "취소"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      { options, destructiveButtonIndex, cancelButtonIndex },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case destructiveButtonIndex: // Delete
            break;
          case 1: // Edit
            break;
          case cancelButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };

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

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.freeItemContainer}>
            <Profile
              onPress={() => {}}
              name={`Name` + item}
              university="university name"
              option={
                <Ionicons
                  name="ellipsis-vertical"
                  size={24}
                  color={colors.GRAY_500}
                  onPress={handlePressOption}
                />
              }
            />
            <Text style={styles.titleStyle}>Title</Text>
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
            <PostActions />
            <Text style={styles.feedTag}>Ask</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
  freeItemContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 16,
    paddingHorizontal: 21,
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
  titleStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 16,
    fontWeight: "600",
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
    fontWeight: "500",
    fontSize: 12,
    opacity: 0.9,
  },
});
