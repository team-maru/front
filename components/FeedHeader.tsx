import { colors } from "@/constants";
import { categoryLabels } from "@/constants/categoryLabels";
import { Category } from "@/types";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BoardTabs from "./BoardTabs";
import CategoryButtons from "./CategoryButtons";
import NotificationButton from "./NotificationButton";
import InputField from "./ui/InputField";

interface FeedHeaderProps {
  feedtype: "free" | "buddy";
}

function FeedHeader({ feedtype }: FeedHeaderProps) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  /**
   * 카테고리 버튼 클릭 핸들러 (단일 선택)
   * - 기본 상태: "All" 선택
   * - 다른 버튼 클릭 시: 해당 버튼만 선택
   * - 선택된 버튼 재클릭 시: "All"로 돌아감
   */
  const handleCategoryPress = (label: Category) => {
    const newSelectedCategory = selectedCategory === label ? "All" : label;

    setSelectedCategory(newSelectedCategory);
    // TODO: 선택된 카테고리로 필터링 로직 추가
  };

  return (
    <View style={styles.headerContentContainer}>
      <View style={styles.notificationButtonContainer}>
        <NotificationButton />
      </View>
      <BoardTabs feedtype={feedtype} />
      {feedtype === "free" && (
        <View style={styles.scrollViewWrapper}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: 32,
              marginTop: 6,
              marginBottom: 10,
            }}>
            <CategoryButtons
              categoryLabels={categoryLabels}
              selectedCategory={selectedCategory}
              onPress={handleCategoryPress}
            />
          </ScrollView>
        </View>
      )}
      <View style={styles.searchBarContainer}>
        <InputField
          value={searchText}
          fontWeight="medium"
          fontSize="medium"
          onChangeText={setSearchText}
          placeholder="Search Keywords"
          containerStyle={{ backgroundColor: colors.GRAY_200 }}
          leftChild={
            <Fontisto name="search" size={18} color={colors.GRAY_600} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentContainer: {
    backgroundColor: colors.GRAY_100,
    paddingBottom: 4,
  },
  notificationButtonContainer: {
    margin: 18,
  },
  scrollViewWrapper: {
    paddingHorizontal: 12,
  },

  searchBarContainer: {
    marginHorizontal: 12,
  },
});

export default FeedHeader;
