import { colors } from "@/constants";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface EventItemProps {
  eventPostId: number;
}

function EventItem({ eventPostId }: EventItemProps) {
  const handlePressFeed = () => {
    // router.push({ pathname: "/eventPost/[id]", params: { id: eventPostId } }); 아직 이벤트 아이템 그런 거 없음..ㅋㅋ
  };
  return (
    <Pressable style={styles.container} onPress={handlePressFeed}>
      <View style={styles.dateContainer}>
        <CustomText fontWeight="semibold" style={styles.dateText}>
          Nov 10 - Nov 12
        </CustomText>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <CustomText fontWeight="semibold" style={styles.titleText}>
                Transfer Love Party
              </CustomText>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.infoOneLineContainer}>
                <Feather name="map-pin" color={colors.GRAY_600} size={14} />
                <CustomText fontWeight="regular" style={styles.infoText}>
                  Songhui's house
                </CustomText>
              </View>
              <View style={styles.infoOneLineContainer}>
                <FontAwesome6
                  name="won-sign"
                  color={colors.GRAY_600}
                  size={14}
                />
                <CustomText fontWeight="regular" style={styles.infoText}>
                  100,000
                </CustomText>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/sample.jpg")}
              style={{ width: 94, height: 94, borderRadius: 5 }}
            />
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
    marginHorizontal: 16,

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
    paddingHorizontal: 16,
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
  },
  textContainer: {
    paddingVertical: 13,
    flex: 1,
    justifyContent: "space-between",
  },
  infoContainer: {
    gap: 5,
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

  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },

  titleText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 14,
    color: colors.GRAY_900,
  },
});

export default EventItem;
