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

const calendarDayStyles = {
  reserved: {
    borderColor: colors.ORANGE_600,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  reservedText: {
    color: colors.ORANGE_600,
  },
  eventText: {
    color: colors.ORANGE_600,
  },
};

// api 연동 후 상태에 따라 스타일 지정할 예정

const getMarkedDates = (checkDate: string) => {
  const marked: any = {};
  const reservedDates = ["2025-11-03"];
  const eventDates = ["2025-11-15", "2025-11-26"];

  reservedDates.forEach((date) => {
    marked[date] = {
      customStyles: {
        container: calendarDayStyles.reserved,
        text: calendarDayStyles.reservedText,
      },
    };
  });

  eventDates.forEach((date) => {
    // 예약된 날짜는 이미 처리됨
    if (!reservedDates.includes(date)) {
      marked[date] = {
        customStyles: {
          text: calendarDayStyles.eventText,
        },
      };
    }
  });

  // 사용자가 선택한 날짜
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
        firstDay={1}
        hideExtraDays={true}
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
