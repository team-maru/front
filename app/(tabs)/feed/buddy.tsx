import TitleWithNavigation from "@/components/TitleWithNavigation";
import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";

export default function BuddyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gatheringContainer}>
        <TitleWithNavigation route="/(tabs)/feed/gathering">
          Join a Gathering
        </TitleWithNavigation>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
    marginHorizontal: 16,
  },
  gatheringContainer: {
    marginTop: 20,
  },
});
