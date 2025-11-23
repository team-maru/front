import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";
import { useActionSheet } from "@expo/react-native-action-sheet";

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
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePressOption = () => {
    const options = ["삭제", "수정", "취소"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      { options, destructiveButtonIndex, cancelButtonIndex },
      (selectedIndex?: number) => {
        console.log("선택 :", selectedIndex);
        switch (selectedIndex) {
          case destructiveButtonIndex: //삭제
            break;
          case 1: //수정
            //router.push(`/경로/${post.id}`); // 이렇게 보내줘서 useLocaleSearchParams로 조회할수 있음
            break;
          case cancelButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };

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
            onPress={handlePressOption}
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
