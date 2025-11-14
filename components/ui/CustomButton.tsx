import { colors } from "@/constants";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import CustomText from "./CustomText";

/**
 * CustomButton Props
 *
 * shape: 버튼 모양
 *   - large: 큰 버튼 (36px, borderRadius 8)
 *   - filled: 채워진 작은 버튼 (26px, ORANGE 배경, borderRadius 16)
 *   - outline: 테두리 버튼 (26px, WHITE 배경, borderRadius 16)
 *
 * labelStyle: 텍스트 스타일
 *   - largeText: 큰 텍스트 (24px, GRAY_500)
 *   - pressedStandardText: 눌린 텍스트 (24px, ORANGE_600)
 *   - filledText: 채워진 버튼 텍스트 (20px, WHITE)
 *   - outlineText: 테두리 버튼 텍스트 (14px, GRAY_600, opacity 0.9)
 *
 * textStyle: labelStyle을 override하는 추가 텍스트 스타일
 *   예: CategoryButtons에서 선택 시 색상 변경
 */
interface CustomButtonProps extends PressableProps {
  label: string;
  shape?: "large" | "filled" | "outline" | "disabled" | undefined;
  labelStyle?:
    | "filledText"
    | "largeText"
    | "pressedStandardText"
    | "outlineText"
    | undefined;
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

function CustomButton({
  label,
  shape = "large",
  labelStyle = "largeText",
  fontWeight = "semibold",
  width,
  height,
  borderRadius,
  style,
  textStyle,
  ...props
}: CustomButtonProps) {
  const customStyle = {
    ...(width && { width }),
    ...(height && { height }),
    ...(borderRadius && { borderRadius }),
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[shape],
        customStyle,
        style,
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <CustomText
        fontWeight={fontWeight}
        style={[styles[labelStyle], textStyle]}
      >
        {label}
      </CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Base container
  container: {
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  // Button shapes
  large: {
    height: 36,
    borderRadius: 8,
  },
  filled: {
    height: 26,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: colors.ORANGE_600,
  },
  outline: {
    height: 26,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: colors.WHITE,
    borderColor: colors.GRAY_200,
    borderWidth: 1.5,
  },
  disabled: {
    backgroundColor: colors.GRAY_500,
  },

  // Button states
  pressed: {
    opacity: 0.8,
  },

  // Text styles
  largeText: {
    fontSize: 24,
    lineHeight: 28,
    color: colors.GRAY_500,
  },
  pressedStandardText: {
    fontSize: 24,
    lineHeight: 28,
    color: colors.ORANGE_600,
  },
  filledText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  outlineText: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.GRAY_600,
    opacity: 0.9,
  },
});

export default CustomButton;
