import { colors } from "@/constants";
import { Category } from "@/types";
import { StyleSheet, View } from "react-native";
import CustomButton from "./ui/CustomButton";

/**
 * CategoryButtons - 제어 컴포넌트 (Controlled Component)
 *
 * 카테고리 버튼들을 렌더링하는 순수 UI 컴포넌트
 * - 상태 관리는 부모 컴포넌트에서 처리
 * - FeedHeader: 다중 선택 (All 버튼 포함, 여러 카테고리 동시 선택 가능)
 * - PostWriteOptions: 단일 선택 (0개 또는 1개만 선택 가능)
 */

interface CategoryButtonsProps {
  categoryLabels: Category[]; // 표시할 카테고리 목록
  selectedCategories: Category[]; // 선택된 카테고리들 (단일 선택이면 배열에 1개만)
  onPress: (label: Category) => void; // 버튼 클릭 시 호출되는 콜백
}

const CategoryButtons = ({
  categoryLabels,
  selectedCategories,
  onPress,
}: CategoryButtonsProps) => {
  const isSelected = (label: Category): boolean => {
    return selectedCategories.includes(label);
  };

  return (
    <View style={styles.categoryContainer}>
      {categoryLabels.map((label: Category) => {
        const selected = isSelected(label);
        return (
          <CustomButton
            key={label}
            label={label}
            shape="outline"
            labelStyle="outlineText"
            // 선택된 버튼은 텍스트를 흰색으로 표시 (opacity도 1로 override)
            style={selected ? { borderColor: colors.ORANGE_600 } : undefined}
            fontWeight="medium"
            onPress={() => onPress(label)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 10,
    gap: 5,
  },
});

export default CategoryButtons;
