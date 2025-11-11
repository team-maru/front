import { colors } from "@/constants";
import { formatAbsoluteDate, formatRelativeDate } from "@/utils/dayjsConfig";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface PostActionsProps {
  createdAt?: string | Date;
  commentCount?: number;
  likeCount?: number;
  onCommentPress?: () => void;
  onLikePress?: () => void;
  isDetail?: boolean;
}

function PostActions({
  createdAt = "2025-11-03 14:03",
  commentCount = 0,
  likeCount = 0,
  onCommentPress,
  onLikePress,
  isDetail = false,
}: PostActionsProps) {
  const actionsList = [
    {
      style: styles.commentsButton,
      onPress: onCommentPress,
      icon: "message-circle",
      count: commentCount,
      label: "comment",
    },
    {
      style: styles.commentsButton,
      onPress: onLikePress,
      icon: "heart",
      count: likeCount,
      label: "like",
    },
  ];
  const date = isDetail ? formatAbsoluteDate(createdAt) : formatRelativeDate(createdAt);

  return (
    <View style={styles.postActionsContainer}>
      {actionsList.map(({ style, onPress, icon, count, label }, index) => (
        <Pressable key={index} style={style} onPress={onPress}>
          <Feather name={icon as any} size={18} color={colors.GRAY_600} />
          <CustomText fontWeight="medium" style={styles.commentsText}>
            {count} {count === 1 ? label : label + "s"}
          </CustomText>
        </Pressable>
      ))}
      <CustomText fontWeight="medium" style={styles.createdAt}>
        {date}
      </CustomText>
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
    color: colors.GRAY_600,
  },
  createdAt: {
    fontSize: 12,
    lineHeight: 12, //글꼴 크기에 맞춰 라인 높이를 지정 ( 아이콘 크기가 비슷하게 )
    color: colors.GRAY_600,
    borderLeftColor: colors.GRAY_500,
    borderLeftWidth: 1.5,
    paddingLeft: 5,
  },
});

export default PostActions;
