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
  container: {
    margin: 0,
    padding: 0,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    height: 36,
  },

  filled: { backgroundColor: colors.ORANGE_600 },
  outline: {
    height: 26,
    paddingHorizontal: 14,
    paddingVertical: 2,
    backgroundColor: colors.WHITE,
    borderColor: colors.GRAY_200,
    borderWidth: 1.5,
    borderRadius: 16,
  },
  disabled: {
    backgroundColor: colors.GRAY_500,
  },

  filledText: {
    color: colors.WHITE,
    fontSize: 20,
  },
  outlineText: {
    color: colors.GRAY_600,
    fontSize: 14,
    lineHeight: 14,
    opacity: 0.9,
  },
  largeText: {
    color: colors.GRAY_500,
    fontSize: 24,
    lineHeight: 28,
  },
  pressedStandardText: {
    color: colors.ORANGE_600,
    fontSize: 24,
    lineHeight: 28,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
