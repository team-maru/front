import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import CustomButton from "./ui/CustomButton";
import { colors } from "@/constants";

interface BoardTabsProps {
  feedtype: "free" | "buddy";
}

function BoardTabs({ feedtype }: BoardTabsProps) {
  return (
    <View style={styles.buttonsContainer}>
      <CustomButton
        label="Free"
        shape="large"
        labelStyle={feedtype === "free" ? "pressedStandardText" : "largeText"}
        onPress={() => router.replace("/(tabs)/feed")}
      />
      <CustomButton
        label="Buddy"
        shape="large"
        labelStyle={feedtype === "free" ? "largeText" : "pressedStandardText"}
        onPress={() => router.replace("/(tabs)/feed/buddy")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: 163,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    marginBottom: 8,
    gap: 12,
    backgroundColor: colors.GRAY_100
  },
});

export default BoardTabs;
