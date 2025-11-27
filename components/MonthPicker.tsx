import { colors } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

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

interface MonthPickerProps {
  initialYear?: number;
  value?: { year: number; month: number };
  onChange?: (payload: { year: number; month: number }) => void;
}

export default function MonthPicker({
  initialYear = new Date().getFullYear(),
  value,
  onChange,
}: MonthPickerProps) {
  const [year, setYear] = useState(value?.year ?? initialYear);
  useEffect(() => {
    if (value?.year !== undefined && value.year !== year) {
      setYear(value.year);
    }
  }, [value?.year]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(
    value?.month ?? null
  );

  const handleSelect = (index: number) => {
    setSelectedMonth(index + 1);
    onChange?.({ year, month: index + 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setYear((y) => y - 1)}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={20}
            color={colors.GRAY_600}
          />
        </Pressable>

        <CustomText fontWeight="regular" style={styles.yearText}>
          {year}
        </CustomText>

        <Pressable onPress={() => setYear((y) => y + 1)}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color={colors.GRAY_600}
          />
        </Pressable>
      </View>

      {/* 월 리스트 */}
      <ScrollView contentContainerStyle={styles.monthList}>
        {MONTHS.map((label, idx) => {
          const selected = selectedMonth === idx + 1;

          return (
            <Pressable
              key={label}
              style={styles.monthItem}
              onPress={() => handleSelect(idx)}
            >
              <CustomText
                fontWeight="regular"
                style={[styles.monthText, selected && styles.monthTextSelected]}
              >
                {label}
              </CustomText>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    borderRadius: 10,
    backgroundColor: colors.GRAY_100,
    width: 120,
    height: 384,
    // iOS 스타일
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    height: 20,
  },
  yearText: {
    fontSize: 14,
    color: colors.GRAY_600,
  },
  monthList: { gap: 8 },
  monthItem: { height: 21 },

  monthText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.GRAY_900,
  },
  monthTextSelected: {
    color: colors.ORANGE_600,
  },
});
