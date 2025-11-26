import { colors } from "@/constants";
import { StyleSheet, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["en"] = {
  monthNames: [
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
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
};
LocaleConfig.defaultLocale = "en";

interface CalendarModalProps {
  checkDate: string;
  setCheckDate: (date: string) => void;
  year: number;
  month: number;
}

const getMarkedDates = (checkDate: string) => {
  // 실제로 마킹이 필요한 날짜만 customStyles로 지정
  const marked: any = {
    "2025-11-03": {
      customStyles: {
        container: {
          borderColor: colors.ORANGE_600,
          borderWidth: 1,
          backgroundColor: "transparent",
        },
        text: {
          color: colors.ORANGE_600,
        },
      },
    },
    "2025-11-15": {
      customStyles: {
        text: {
          color: colors.ORANGE_600,
        },
      },
    },
    "2025-11-26": {
      customStyles: {
        text: {
          color: colors.ORANGE_600,
        },
      },
    },
  };
  if (checkDate) {
    marked[checkDate] = {
      selected: true,
      selectedColor: colors.ORANGE_600,
    };
  }
  return marked;
};

const CalendarBox = ({
  checkDate,
  setCheckDate,
  year,
  month,
}: CalendarModalProps) => {
  const onDayPress = (day: { dateString: string }) => {
    setCheckDate(day.dateString);
  };
  const currentDate = `${year}-${month.toString().padStart(2, "0")}-01`;

  return (
    <View style={styles.container}>
      <Calendar
        key={`${year}-${month}`}
        style={styles.boxStyle}
        onDayPress={onDayPress}
        hideArrows={true}
        renderHeader={() => <></>}
        markingType={"custom"}
        markedDates={getMarkedDates(checkDate)}
        current={currentDate}
        theme={{
          selectedDayBackgroundColor: colors.ORANGE_600,
          todayTextColor: colors.GRAY_600,
          todayBackgroundColor: colors.GRAY_500,
          textDayFontFamily: "Poppins-Medium",
          textDisabledColor: colors.GRAY_600,
          dayTextColor: colors.GRAY_600,
          textDayFontSize: 12,
          textSectionTitleColor: colors.GRAY_600,
          textDayHeaderFontFamily: "Poppins-Medium",
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327,

    // iOS 스타일
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 6,
  },
  boxStyle: {
    borderRadius: 16,
    padding: 16,
  },
});

export default CalendarBox;
