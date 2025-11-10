import { colors } from "@/constants";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import  { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ProfileProps {
  onPress: () => void;
  name: string;
  imageUri?: string;
  university: string;
  option?: ReactNode;
}

function Profile({
  onPress,
  imageUri,
  name = "Name",
  university = "university name",
  option,
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
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.university}>{university}</Text>
        </View>
      </Pressable>
      {option}
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
    width: 46,
    height: 46,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300,
    backgroundColor: colors.GRAY_300,
  },
  name: { fontSize: 15, fontWeight: "600", color: colors.BLACK },
  university: { fontSize: 12, fontWeight: "500", color: colors.BLACK },
});

export default Profile;
