import { colors } from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  shape?: "large" | "filled" | "outline" | undefined;
  variant?:
    | "filledText"
    | "largeText"
    | "pressedStandardText"
    | "outlineText"
    | undefined;
}

function CustomButton({
  label,
  shape = "large",
  variant = "largeText",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[shape],
        pressed && styles.pressed,
      ]}
      {...props}>
      <Text style={styles[variant]}>{label}</Text>
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
