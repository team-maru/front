import { colors } from "@/constants";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "./ui/CustomText";

interface TagProps {
  icon: React.ReactNode;
  message: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
}

function Tag({
  icon,
  message,
  isSelected = false,
  isDisabled = false,
  onPress,
}: TagProps) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={isDisabled ? undefined : onPress}
      disabled={isDisabled}
    >
      {icon}
      <CustomText fontWeight="medium" style={styles.text}>
        {message}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
    borderRadius: 20,
    backgroundColor: colors.GRAY_100,
    borderColor: colors.GRAY_500,
    borderWidth: 1,
    height: 30,
  },

  selectedContainer: {
    borderColor: colors.ORANGE_600,
  },
  text: {
    color: colors.GRAY_600,
    fontSize: 12,
  },
});

export default Tag;
