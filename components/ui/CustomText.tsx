import React from "react";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
}

export default function CustomText({
  style,
  fontWeight = "regular",
  ...props
}: CustomTextProps) {
  const getFontFamily = () => {
    switch (fontWeight) {
      case "medium":
        return "Poppins-Medium";
      case "semibold":
        return "Poppins-SemiBold";
      case "bold":
        return "Poppins-Bold";
      default:
        return "Poppins-Regular";
    }
  };

  return <Text style={[{ fontFamily: getFontFamily() }, style]} {...props} />;
}
