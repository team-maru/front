import CommunityList from "@/components/CommunityList";
import EventList from "@/components/EventList";
import GatheringList from "@/components/GatheringList";
import NotificationButton from "@/components/NotificationButton";
import RightArrowButton from "@/components/RightArrowButton";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";

import { Image, ScrollView, StyleSheet, View } from "react-native";
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
          <CustomText fontWeight="semibold" style={styles.bannerText}>
            Our journey starts here,{"\n"}together with KOPLE
          </CustomText>
        </View>
        <View style={styles.communityContainer}>
          <View style={styles.communityTopBar}>
            <CustomText fontWeight="bold" style={styles.titleText}>
              New in community
            </CustomText>
            <RightArrowButton destination="/(tabs)/feed" />
          </View>
          <View style={styles.communityList}>
            <CommunityList />
          </View>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.eventTopBar}>
            <CustomText fontWeight="bold" style={styles.titleText}>
              Find Your KOPLE Moment
            </CustomText>
            <RightArrowButton destination="/(tabs)/explore" />
          </View>
          <EventList />
        </View>
        <View style={styles.gatheringContainer}>
          <View style={styles.gatheringTopBar}>
            <CustomText fontWeight="bold" style={styles.titleText}>
              Join a Gathering
            </CustomText>
            <RightArrowButton destination="/(tabs)/feed/buddy" />
          </View>
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
