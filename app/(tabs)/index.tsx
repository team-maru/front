import CommunityList from "@/components/CommunityList";
import EventList from "@/components/EventList";
import EventTitle from "@/components/EventTitle";
import GatheringList from "@/components/GatheringList";
import NotificationButton from "@/components/NotificationButton";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.topBarContainer}>
        <Image
          source={require("@/assets/images/logo-3.png")}
          style={styles.logoImageContainer}
        />
        <NotificationButton />
      </View>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={require("@/assets/images/banner1.png")}
            style={styles.bannerImage}
            imageStyle={{ borderRadius: 10 }}
          />
          <CustomText fontWeight="semibold" style={styles.bannerText}>
            Our journey starts here,{"\n"}together with KOPLE
          </CustomText>
        </View>
        <View style={styles.communityContainer}>
          <EventTitle route="/(tabs)/feed">New in community</EventTitle>

          <View style={styles.communityList}>
            <CommunityList />
          </View>
        </View>
        <View style={styles.eventContainer}>
          <EventTitle route="/(tabs)/explore">
            Find Your KOPLE Moment
          </EventTitle>
          <EventList />
        </View>
        <View style={styles.gatheringContainer}>
          <EventTitle route="/(tabs)/feed/buddy">Join a Gathering</EventTitle>
          <GatheringList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.GRAY_100 },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 18,
    height: 24,
    justifyContent: "space-between",
  },
  logoImageContainer: {
    width: 104,
    height: 23.44,
    resizeMode: "contain",
  },
  bannerContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: 207,
    marginHorizontal: 16,
    marginBottom: 18,
    paddingHorizontal: 16,
    paddingVertical: 19,
    borderRadius: 10,
    backgroundColor: colors.BLACK,
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  bannerText: {
    color: colors.GRAY_300,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
  },
  communityContainer: {
    margin: 16,
  },
  communityTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 18,
  },
  communityList: {
    marginTop: 8,
    height: 175,
  },
  eventContainer: {
    marginHorizontal: 16,
  },
  eventTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gatheringContainer: {
    margin: 16,
  },
  gatheringTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
