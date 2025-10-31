import { colors } from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "medium" | "large" | undefined;
  variant?: "filled" | "standard" | "pressedStandard" | undefined;
}

function CustomButton({
  label,
  size = "large",
  variant = "standard",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
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
  medium: {},
  filled: {
    color: colors.WHITE,
  },
  standard: {
    color: colors.GRAY_500,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
  },
  pressedStandard: {
    color: colors.ORANGE_600,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
  },
  pressed: {
    color: colors.ORANGE_600,
    opacity: 0.8,
  },
});

export default CustomButton;
