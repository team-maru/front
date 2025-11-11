import { fonts } from "@/constants/fonts";
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
        return fonts.medium;
      case "semibold":
        return fonts.semibold;
      case "bold":
        return fonts.bold;
      default:
        return fonts.regular;
    }
  };

  return <Text style={[{ fontFamily: getFontFamily() }, style]} {...props} />;
}
