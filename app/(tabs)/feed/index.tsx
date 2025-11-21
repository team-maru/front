import FeedList from "@/components/FeedList";
import FloatingButton from "@/components/FloatingButton";
import { colors } from "@/constants";

import { StyleSheet, View } from "react-native";

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FeedList />
      </View>
      <FloatingButton destination="/post/write" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
  },
});
