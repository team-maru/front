import { colors } from "@/constants";
import { dummyGatherings } from "@/data/dummyData";
import { formatRelativeDate } from "@/utils/dayjsConfig";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";
import WishButton from "./WishButton";

interface GatheringItemProps {
  gatheringId: number;
}

function GatheringItem({ gatheringId }: GatheringItemProps) {
  const gathering =
    dummyGatherings.find((g) => g.id === gatheringId) || dummyGatherings[0];
  const handlePressFeed = () => {
    // router.push({ pathname: "/gathering/[id]", params: { id: GatheringItemId } });
  };
  const meetDate = formatRelativeDate(gathering.meetDate);
  return (
    <Pressable style={styles.container} onPress={handlePressFeed}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require("@/assets/images/sample.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <View style={styles.wishButtonContainer}>
              <WishButton />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <CustomText
              fontWeight="semibold"
              style={styles.titleText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {gathering.title}
            </CustomText>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoOneLineContainer}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                color={colors.GRAY_600}
                size={14}
                style={{ marginBottom: 2 }} // 중앙정렬 맞추기
              />
              <CustomText fontWeight="medium" style={styles.infoText}>
                {meetDate}
              </CustomText>
            </View>
            <View style={styles.infoOneLineContainer}>
              <Feather
                name="map-pin"
                color={colors.GRAY_600}
                size={14}
                style={{ marginBottom: 2 }} // 중앙정렬 맞추기
              />
              <CustomText
                fontWeight="medium"
                style={styles.infoText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {gathering.location
                  .split(", ")
                  .filter((part) => !part.includes("-dong"))
                  .join(", ")}
              </CustomText>
            </View>
            <View style={styles.infoOneLineContainer}>
              <Ionicons
                name="person-outline"
                color={colors.GRAY_600}
                size={14}
                style={{ marginBottom: 2 }} // 중앙정렬 맞추기
              />
              <CustomText fontWeight="medium" style={styles.infoText}>
                {gathering.currentMembers}/{gathering.maxMembers}
              </CustomText>
            </View>
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
  },
  itemContainer: {
    flex: 1,
    height: 300,
    width: 200,

    alignItems: "flex-start",
    backgroundColor: colors.GRAY_100,
    borderRadius: 20,
    marginVertical: 8,
  },
  textContainer: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 20,
    flex: 1,
    gap: 11,
    backgroundColor: colors.GRAY_300,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },

  titleText: {
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 16,
    color: colors.GRAY_900,
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
    width: "100%",
    height: 160,
    justifyContent: "center",
  },
  backgroundImage: {
    width: 200,
    height: 160,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  wishButtonContainer: {
    padding: 16,
  },
});

export default GatheringItem;
