import CustomButton from "@/components/CustomButton";
import { colors } from "@/constants";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BuddyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => router.push("/")}
        style={styles.NotificationButton}>
        <Fontisto name="bell" size={24} color={colors.BLACK} />
      </Pressable>
      <View style={styles.buttonsContainer}>
        <CustomButton
          label="Free"
          size="large"
          variant="standard"
          onPress={() => router.replace("/(tabs)/feed")}
        />
        <CustomButton
          label="Buddy"
          size="large"
          variant="pressedStandard"
          onPress={() => router.replace("/(tabs)/feed/buddy")}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
  NotificationButton: {
    position: "absolute",
    top: 32,
    right: 16,
    marginVertical: 16,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5, // Android에서는 shadow가 적용되지 않으므로
    elevation: 2, //elevation효과를 넣어줌
  },
  buttonsContainer: {
    width: 163,
    height: 36,
    top: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
    marginBottom: 18,
    gap: 12,
  },
});
