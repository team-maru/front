import { colors } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

function RightArrowButton() {
  return (
    <Pressable
      onPress={() => router.push("/")}
      style={styles.notificationButton}
    >
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color={colors.GRAY_900}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  notificationButton: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RightArrowButton;
