import GatheringList from "@/components/GatheringList";
import TheLatestGatheringList from "@/components/TheLatestGatheringList";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { ScrollView, StyleSheet, View } from "react-native";

interface GatheringListScreenProps {}

export default function GatheringListScreen({}: GatheringListScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gatheringContainer}>
        <CustomText fontWeight="bold" style={styles.titleTextContainer}>
          Join new experfiences{"\n"}and meet new friends!
        </CustomText>
        <GatheringList />
      </View>
      <View style={styles.gatheringContainer}>
        <CustomText fontWeight="bold" style={styles.titleTextContainer}>
          Ongoing Gatherings
        </CustomText>
        <TheLatestGatheringList />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
    paddingHorizontal: 16,
  },
  titleTextContainer: {
    fontSize: 18,
  },
  gatheringContainer: {
    marginTop: 16,
    backgroundColor: "colors.GRAY_100",
  },
});
