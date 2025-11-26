import CalendarModal from "@/components/CalendarModal";
import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background} />
      <View style={styles.calendarContainer}>
        <CalendarModal />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: 230,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colors.ORANGE_700,
  },
  calendarContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
});
