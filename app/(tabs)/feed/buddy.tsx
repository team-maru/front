import BoardTabs from "@/components/BoardTabs";
import NotificationButton from "@/components/NotificationButton";
import FeedHeader from "@/components/ui/FeedHeader";
import { colors } from "@/constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BuddyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedHeader feedtype="buddy" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.WHITE },
});
