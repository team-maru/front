import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

interface ErrorMessageProps {
  message: string | undefined;
}

/**
 * ErrorMessage - 폼 검증 에러 메시지 표시 컴포넌트
 *
 * 경고 아이콘과 함께 에러 메시지를 일관된 스타일로 표시
 */
function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="alert-circle-sharp"
        size={15}
        color={colors.RED}
        style={styles.icon}
      />
      <CustomText style={styles.text}>{message}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    marginBottom: 2,
    marginLeft: 2,
  },
  text: {
    fontSize: 10,
    color: colors.RED,
  },
});

export default ErrorMessage;
