import FeedList from "@/components/FeedList";
import FeedHeader from "@/components/ui/FeedHeader";
import { colors } from "@/constants";

import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FeedHeader feedtype="free" />
      <FeedList />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
