import { colors } from "@/constants";
import { ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "./ui/CustomText";

interface OptionColunmProps {
  onPress: () => void;
  icon?: ReactNode;
  text: string;
  rightIcon?: ReactNode;
}

function OptionColunm({ onPress, icon, text, rightIcon }: OptionColunmProps) {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      {icon}
      <CustomText
        fontWeight="medium"
        style={icon ? styles.menuTextWithIcon : styles.menuText}> {/*오른쪽 아이콘 유무에 따른 스타일 적용*/}
        {text}
      </CustomText>
      {rightIcon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 17,
    height: 32,
    alignItems: "center",
  },
  menuText: {
    fontSize: 12,
    color: colors.GRAY_900,
    flex: 1,
  },
  menuTextWithIcon: {
    fontSize: 12,
    color: colors.GRAY_900,
    flex: 1,
    marginLeft: 10,
  },
});

export default OptionColunm;
