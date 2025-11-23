import { colors } from "@/constants";
import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "./ui/CustomText";

interface OptionColumProps {
  onPress: () => void;
  icon?: ReactNode;
  text: string;
}

function OptionColum({ onPress, icon, text }: OptionColumProps) {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      {icon}
      <CustomText fontWeight="medium" style={styles.menuText}>
        {text}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 17,
    height: 32,
    alignItems: "center",
    gap: 10,
  },
  menuText: {
    fontSize: 12,
    color: colors.GRAY_900,
  },
});

export default OptionColum;
