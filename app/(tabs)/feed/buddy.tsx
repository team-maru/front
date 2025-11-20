import EventTitle from "@/components/EventTitle";
import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";

export default function BuddyScreen() {
  return (
    <View style={styles.container}>
      <EventTitle route="/(tabs)/feed/gathering">Join a Gathering</EventTitle>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.GRAY_100 },
});
