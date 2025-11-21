import { colors } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

interface RightArrowButtonProps {
  destination: "/(tabs)/explore" | "/(tabs)/feed" | "/(tabs)/feed/buddy";
}

function RightArrowButton({ destination }: RightArrowButtonProps) {
  return (
    <Pressable
      onPress={() => router.push(destination)}
      style={styles.rightArrowButton}
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
  rightArrowButton: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RightArrowButton;
