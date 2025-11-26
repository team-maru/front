import CalendarModal from "@/components/CalendarModal";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 32 }}>
        <CalendarModal />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
