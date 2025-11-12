import FeedHeader from "@/components/FeedHeader";
import FeedList from "@/components/FeedList";
import FloatingButton from "@/components/FloatingButton";
import { colors } from "@/constants";

import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.contentContainer}>
        <FeedHeader feedtype="free" />
        <FeedList />
      </View>
      <FloatingButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 1,
  },
});
