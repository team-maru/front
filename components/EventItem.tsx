import { colors } from "@/constants";
import { dummyEvents } from "@/data/dummyData";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import dayjs from "dayjs";
import "dayjs/locale/en";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";
import WishButton from "./WishButton";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("en");

interface EventItemProps {
  eventPostId: number;
}

function EventItem({ eventPostId }: EventItemProps) {
  const event = dummyEvents.find((e) => e.id === eventPostId) || dummyEvents[0];

  const formatEventDate = (dateString: string) => {
    return dayjs(dateString)
      .tz("Asia/Seoul")
      .format("dddd, MMM DD")
      .toUpperCase();
  };

  const handlePressFeed = () => {
    // router.push({ pathname: "/eventPost/[id]", params: { id: eventPostId } }); 아직 이벤트 아이템 그런 거 없음..ㅋㅋ
  };
  return (
    <Pressable style={styles.container} onPress={handlePressFeed}>
      <View style={styles.dateContainer}>
        <CustomText fontWeight="semibold" style={styles.dateText}>
          {formatEventDate(event.start_date)}
        </CustomText>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <CustomText
                fontWeight="semibold"
                style={styles.titleText}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {event.title}
              </CustomText>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoOneLineContainer}>
                <Feather name="map-pin" color={colors.GRAY_600} size={14} />
                <CustomText
                  fontWeight="medium"
                  style={styles.infoText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {event.location}
                </CustomText>
              </View>
              <View style={styles.infoOneLineContainer}>
                <FontAwesome6
                  name="won-sign"
                  color={colors.GRAY_600}
                  size={14}
                />
                <CustomText fontWeight="medium" style={styles.infoText}>
                  {event.price}
                </CustomText>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("@/assets/images/sample.jpg")}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 5 }}
            >
              <View style={styles.wishButtonContainer}>
                <WishButton />
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
    paddingBottom: 16,
  },
  itemContainer: {
    alignItems: "flex-start",
    backgroundColor: colors.GRAY_100,
    borderRadius: 15,
    height: 130,

    // iOS 스타일
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,

    // Android 스타일
    elevation: 6,
  },
  dateContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 14.5,
  },
  dateText: {
    color: colors.ORANGE_600,
    fontSize: 14,
  },
  cardContainer: {
    width: "100%",
    height: 130,
    backgroundColor: colors.GRAY_200,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 30,
  },
  textContainer: {
    paddingVertical: 13,
    flex: 1,
    justifyContent: "center",
    gap: 12,
  },
  infoContainer: {
    gap: 5,
    width: "100%",
  },
  infoOneLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    color: colors.GRAY_600,
    fontSize: 14,
  },
  imageContainer: {
    width: 94,
    height: "100%",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 94,
    height: 94,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  wishButtonContainer: {
    padding: 8,
    width: 38,
    height: 38,
  },

  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },

  titleText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 16,
    color: colors.GRAY_900,
  },
});

export default EventItem;
