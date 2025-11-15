import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";
dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ProfileProps {
  onPress: () => void;
  name: string;
  imageUri?: string;
  university: string;
  option?: boolean;
}

function Profile({
  onPress,
  imageUri,
  name = "Name",
  university = "university name",
  option = false,
}: ProfileProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileContainer} onPress={onPress}>
        <Image
          source={
            imageUri ? { uri: imageUri } : require("@/assets/images/Earth.png")
          }
          style={styles.avatar}
        />
        <View>
          <CustomText style={styles.name} fontWeight="semibold">
            {name}
          </CustomText>
          <CustomText style={styles.university} fontWeight="medium">
            {university}
          </CustomText>
        </View>
      </Pressable>
      {option && (
        <View style={styles.optionContainer}>
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={colors.GRAY_500}
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    color: colors.BLACK,
    includeFontPadding: false, // Android 기본 폰트 패딩 제거
    lineHeight: 16, // 위아래 여백 최소화
  },
  university: {
    fontSize: 14,
    color: colors.BLACK,
    includeFontPadding: false, // Android 기본 폰트 패딩 제거
    lineHeight: 14, // 위아래 여백 최소화
    marginTop: 4,
  },
  optionContainer: {
    marginTop: -16,
  },
});

export default Profile;
