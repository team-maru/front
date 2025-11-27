import CalendarBox from "@/components/CalendarBox";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateContainer from "./DateContainer";

export default function CalendarModal() {
  const today = new Date();
  const [checkDate, setCheckDate] = useState("");
  const [selectedDate, setSelectedDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dataContainer}>
        <DateContainer
          showMonthPicker={showMonthPicker}
          setShowMonthPicker={setShowMonthPicker}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <CalendarBox
        checkDate={checkDate}
        setCheckDate={setCheckDate}
        year={selectedDate.year}
        month={selectedDate.month}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  dataContainer: {
    width: 120,
    height: 48,
  },
});
