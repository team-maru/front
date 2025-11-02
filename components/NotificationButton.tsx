import { colors } from "@/constants";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

function NotificationButton() {
  return (
    <Pressable
      onPress={() => router.push("/")}
      style={styles.NotificationButton}>
      <Fontisto name="bell" size={24} color={colors.BLACK} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});

export default NotificationButton;
