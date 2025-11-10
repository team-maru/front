import CommentList from "@/components/CommentList";
import FeedItem from "@/components/FeedItem";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import useKeyboard from "@/hooks/useKeyboard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { isKeyboardVisible } = useKeyboard();
  const insets = useSafeAreaInsets();

  const KeyboardAppendView: React.ComponentType<any> =
    Platform.OS === "ios" ? KeyboardAwareScrollView : KeyboardAvoidingView;

  const [content, setContent] = useState("");
  const scrollRef = useRef<ScrollView | null>(null); // 새로운 댓글을 작성했을때 화면이 해당 댓글에 맞춰서 위치하도록 (1)

  const commentList = [
    {
      id: 1,
      imageUri: undefined,
      author: "Name",
      university: "university name",
      text: "A lot of people are struggling with exams right now, so you're not alone! If you're looking for a good spot to study near Sinchon, here are some great cafés to consider:",
    },
    {
      id: 2,
      imageUri: undefined,
      author: "Name",
      university: "university name",
      text: "A lot of people are struggling with exams right now, so you're not alone! If you're looking for a good spot to study near Sinchon, here are some great cafés to consider:",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <KeyboardAppendView
        contentContainerStyle={styles.awareScrollViewContainer}
        behavior="height"
        keyboardVerticalOffset={
          Platform.OS === "ios" || isKeyboardVisible ? 100 : insets.bottom
        }>
        <ScrollView
          ref={scrollRef} // 새로운 댓글을 작성했을때 화면이 해당 댓글에 맞춰서 위치하도록 (2)
          contentContainerStyle={styles.scrollViewContainer}>
          <FeedItem post={1} isDetail />
          <CommentList comments={commentList} />
        </ScrollView>
        <View style={styles.inputFieldContainer}>
          <InputField
            value={content}
            onSubmitEditing={() => {}}
            onChangeText={(text) => setContent(text)}
            placeholder="Add your comment"
            containerStyle={styles.commentWriteContainer}
            rightChild={
              <Pressable
                disabled={!content}
                style={styles.inputButtonContainer}
                onPress={() => {}}>
                <MaterialCommunityIcons
                  name="navigation-variant-outline"
                  size={24}
                  color={colors.WHITE}
                />
              </Pressable>
            }
          />
        </View>
      </KeyboardAppendView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 60,
  },
  awareScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollViewContainer: {
    paddingBottom: 0,
  },
  inputFieldContainer: {
    paddingTop: 8,
    paddingBottom: 0,
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
