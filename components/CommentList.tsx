import Profile from "@/components/Profile";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";

interface Comment {
  id: number;
  imageUri?: string;
  author: string;
  university: string;
  text: string;
}

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <>
      <CustomText fontWeight="semibold" style={styles.commentTextContainer}>
        Comment
      </CustomText>
      {comments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Profile
            onPress={() => {}}
            imageUri={comment.imageUri}
            name={comment.author}
            university={comment.university}
            option={true}
          />
          <CustomText
            fontWeight="medium"
            style={styles.commentContentContainer}>
            {comment.text}
          </CustomText>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  commentTextContainer: {
    fontSize: 16,
    color: colors.BLACK,
    marginHorizontal: 16,
    marginTop: 44,
  },
  commentContentContainer: {
    marginHorizontal: 16,
    fontSize: 14,
    color: colors.GRAY_900,
    marginLeft: 50,
    paddingTop: 20,
    gap: 12,
  },
});

export default CommentList;
