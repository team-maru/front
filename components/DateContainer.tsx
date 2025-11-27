import MonthPicker from "@/components/MonthPicker";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { YearMonth } from "@/types";
import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

interface DateContainerProps {
  showMonthPicker: boolean;
  setShowMonthPicker: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: YearMonth;
  setSelectedDate: React.Dispatch<React.SetStateAction<YearMonth>>;
}

function DateContainer({
  showMonthPicker,
  setShowMonthPicker,
  selectedDate,
  setSelectedDate,
}: DateContainerProps) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Pressable
          style={styles.monthContainer}
          onPress={() => setShowMonthPicker((prev) => !prev)}
        >
          <CustomText fontWeight="semibold" style={styles.monthText}>
            {MONTHS[selectedDate.month - 1]}
          </CustomText>
          <Entypo name="triangle-down" size={12} color={colors.BLACK} />
        </Pressable>

        <CustomText fontWeight="medium" style={styles.yearText}>
          {selectedDate.year}
        </CustomText>
      </View>

      {showMonthPicker && (
        <View style={styles.overlay}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setShowMonthPicker(false)}
          />
          <View style={styles.monthPickerOverlay}>
            <MonthPicker
              value={selectedDate}
              onChange={(payload) => {
                setSelectedDate(payload);
                setShowMonthPicker(false);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    width: 120,
    height: 48,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    zIndex: 1000,
  },
  monthText: {
    fontSize: 20,
    color: colors.BLACK,
  },
  yearText: {
    fontSize: 15,
    color: colors.GRAY_900,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
  },
  monthPickerOverlay: {
    marginTop: 25,

    zIndex: 10000,
  },
});

export default DateContainer;
