import FeedItem from "@/components/FeedItem";
import CustomText from "@/components/ui/CustomText";
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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAppendView
        contentContainerStyle={styles.awareScrollViewContainer}
        behavior="height"
        keyboardVerticalOffset={
          Platform.OS === "ios" || isKeyboardVisible ? 100 : insets.bottom
        }>
        <ScrollView
          ref={scrollRef} // 새로운 댓글을 작성했을때 화면이 해당 댓글에 맞춰서 위치하도록 (2)
          style={{ marginBottom: 75 }}
          contentContainerStyle={styles.scrollViewContainer}>
          <FeedItem post={1} isDetail />
          <CustomText>Comments</CustomText>
        </ScrollView>
        <View style={styles.inputFieldContainer}>
          <InputField
            value={content}
            onSubmitEditing={() => {}}
            onChangeText={(text) => setContent(text)}
            placeholder="Add your comment"
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
  },
  awareScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.GRAY_200,
  },
  scrollViewContainer: {
    backgroundColor: colors.GRAY_200,
  },
  commentCount: {
    marginTop: 12,
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "semibold",
  },
  commentInputContainer: {
    bottom: 0,
    position: "absolute",
    padding: 16,
    backgroundColor: colors.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_200,
    width: "100%",
  },
  inputFieldContainer: {
    height: "30%",
    paddingVertical: 10,
  },
  inputButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    padding: 14,
    borderRadius: 27,
  },
});
