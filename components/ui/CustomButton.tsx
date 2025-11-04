import { colors } from "@/constants";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  shape?: "large" | "filled" | "outline" | undefined;
  labelStyle?:
    | "filledText"
    | "largeText"
    | "pressedStandardText"
    | "outlineText"
    | undefined;
  width?: number;
  height?: number;
  borderRadius?: number;
  textStyle?: TextStyle;
}

function CustomButton({
  label,
  shape = "large",
  labelStyle = "largeText",
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
      <Text style={[styles[labelStyle], textStyle]}>{label}</Text>
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

  filledText: {
    color: colors.WHITE,
    fontWeight: "600",
    fontSize: 16,
  },
  outlineText: {
    color: colors.GRAY_600,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 14,
    opacity: 0.9,
  },
  largeText: {
    color: colors.GRAY_500,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
  },
  pressedStandardText: {
    color: colors.ORANGE_600,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
