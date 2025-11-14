import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

type ToastVariant = "success" | "error" | "info"; // error랑 info variant는 나중에 쓸 일 생기면 스타일 수정해서 사용하세요~ 임시로 구현해 논 것임
type Position = "top" | "bottom";
type Size = "small" | "medium" | "large";

interface BottomToastProps {
  visible: boolean;
  message: string;
  variant?: ToastVariant;
  position?: Position;
  size?: Size;
}

function Toast({
  visible,
  message,
  variant = "info",
  position = "bottom",
  size = "small",
}: BottomToastProps) {
  if (!visible) return null;

  return (
    <View
      style={[
        styles.container,
        position === "top" ? styles.top : styles.bottom,
        size === "small"
          ? styles.small
          : size === "medium"
          ? styles.medium
          : styles.large,
      ]}
    >
      <CustomText style={styles.icon}>
        {variant === "success" ? "✅" : variant === "error" ? "⚠️" : ""}
      </CustomText>
      <CustomText style={styles.text}>{message}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderRadius: 10,
    backgroundColor: colors.GRAY_100,
    position: "absolute",
  },
  top: {
    // 쓸 일 생기면 위치 조정해서 사용하세요
    top: 40,
    bottom: "auto",
  },
  bottom: {
    bottom: 40,
    top: "auto",
  },
  small: {
    width: 343,
  },
  medium: {
    // 쓸 일 생기면 사이즈 조정해서 사용하세요
    width: 300,
  },
  large: {
    // 쓸 일 생기면 사이즈 조정해서 사용하세요
    width: 400,
  },
  icon: {
    fontSize: 14,
  },
  text: {
    color: colors.GRAY_900,
    fontSize: 14,
    flexShrink: 1,
    lineHeight: 16,
    flex: 1,
  },
});

export default Toast;
