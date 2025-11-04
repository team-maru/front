import { colors } from "@/constants";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

function NotificationButton() {
  return (
    <Pressable
      onPress={() => router.push("/")}
      style={styles.notificationButton}>
      <Fontisto name="bell" size={24} color={colors.BLACK} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  notificationButton: {
    margin: 18,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: colors.WHITE,
  },
});

export default NotificationButton;
