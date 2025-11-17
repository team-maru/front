import { colors } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import InputField from "./ui/InputField";

interface CommentInputButtonProps {
  content: string;
  setContent: () => void;
}

function CommentInputButton({ content, setContent }: CommentInputButtonProps) {
  return (
    <View style={styles.container}>
      <InputField
        value={content}
        onSubmitEditing={() => {}}
        onChangeText={setContent}
        placeholder="Add your comment"
        isMediumFont={true}
        containerStyle={styles.commentWriteContainer}
      />
      <Pressable
        disabled={!content}
        style={styles.inputButtonContainer}
        onPress={() => {}}>
        <MaterialCommunityIcons
          name="navigation-variant-outline"
          size={24}
          color={colors.GRAY_100}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 9,
  },
  commentWriteContainer: {
    width: 290,
    borderRadius: 20,
  },
  inputButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    padding: 14,
    borderRadius: 27,
  },
});

export default CommentInputButton;
