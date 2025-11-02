import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "./ui/CustomButton";

interface BoardTabsProps {}

function BoardTabs({}: BoardTabsProps) {
  return (
    <View style={styles.buttonsContainer}>
      <CustomButton
        label="Free"
        shape="large"
        labelStyle="pressedStandardText"
        onPress={() => router.replace("/(tabs)/feed")}
      />
      <CustomButton
        label="Buddy"
        shape="large"
        labelStyle="largeText"
        onPress={() => router.replace("/(tabs)/feed/buddy")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 60,
    width: 163,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    marginBottom: 8,
    gap: 12,
  },
});

export default BoardTabs;
