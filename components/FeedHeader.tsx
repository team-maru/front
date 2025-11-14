import { colors } from "@/constants";
import { Category } from "@/types";
import { categoryLabels } from "@/utils/categoryLabels";
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
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  /**
   * 카테고리 버튼 클릭 핸들러 (다중 선택 지원)
   * - "All" 버튼: 다른 모든 선택 해제, 재클릭 시 선택 해제
   * - 일반 카테고리: 중복 선택 가능, 선택 시 "All" 자동 해제
   */
  const handleCategoryPress = (label: Category) => {
    let newSelectedCategories: Category[];

    if (label === "All") {
      // "All"을 클릭하면 다른 모든 선택 해제
      newSelectedCategories =
        selectedCategories.length === 1 && selectedCategories[0] === "All"
          ? [] // "All"만 선택된 상태에서 다시 클릭하면 선택 해제
          : ["All"]; // 그 외의 경우 "All"만 선택
    } else {
      // 다른 카테고리 클릭
      if (selectedCategories.includes(label)) {
        // 이미 선택된 경우 제거 (토글)
        newSelectedCategories = selectedCategories.filter(
          (cat) => cat !== label
        );
      } else {
        // 선택되지 않은 경우 추가하고 "All" 제거
        newSelectedCategories = selectedCategories
          .filter((cat) => cat !== "All")
          .concat(label);
      }
    }

    setSelectedCategories(newSelectedCategories);
    // TODO: 선택된 카테고리로 필터링 로직 추가
  };

  return (
    <View style={styles.headerContentContainer}>
      <NotificationButton />
      <BoardTabs feedtype={feedtype} />
      {feedtype === "free" && (
        <View style={styles.scrollViewWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategoryButtons
              categoryLabels={categoryLabels}
              selectedCategories={selectedCategories}
              onPress={handleCategoryPress}
            />
          </ScrollView>
        </View>
      )}
      <View style={styles.searchBarContainer}>
        <InputField
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search Keywords"
          leftChild={
            <Fontisto name="search" size={16} color={colors.GRAY_600} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentContainer: {
    backgroundColor: colors.WHITE,
    paddingBottom: 4,
  },
  scrollViewWrapper: {
    paddingHorizontal: 12,
  },

  searchBarContainer: {
    marginHorizontal: 12,
  },
});

export default FeedHeader;
