import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PostActionsProps {}

function PostActions({}: PostActionsProps) {
  return (
    <View style={styles.postActionsContainer}>
      <Pressable style={styles.commentsButton}>
        <Feather name="message-circle" size={18} color={colors.GRAY_600} />
        <Text style={styles.commentsText}>comments</Text>
      </Pressable>
      <Pressable style={styles.commentsButton}>
        <Feather name="heart" size={18} color={colors.GRAY_600} />
        <Text style={styles.commentsText}>likes</Text>
      </Pressable>
      <Text style={styles.createdAt}>
        {dayjs("2025-11-03 14:03").fromNow()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postActionsContainer: {
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  commentsButton: {
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  commentsText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.GRAY_600,
  },
  createdAt: {
    fontSize: 12,
    lineHeight: 12, //글꼴 크기에 맞춰 라인 높이를 지정 ( 아이콘 크기가 비슷하게 )
    fontWeight: "500",
    color: colors.GRAY_600,
    borderLeftColor: colors.GRAY_500,
    borderLeftWidth: 1.5,
    paddingLeft: 5,
  },
});

export default PostActions;
