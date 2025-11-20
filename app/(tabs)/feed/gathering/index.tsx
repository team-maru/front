import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { ScrollView, StyleSheet, View } from "react-native";

interface GatheringListScreenProps {}

export default function GatheringListScreen({}: GatheringListScreenProps) {
  return (
    <View style={styles.container}>
      <CustomText fontWeight="bold" style={styles.titleTextContainer}>
        Join new experfiences{"\n"}and meet new friends!
      </CustomText>
      <ScrollView style={styles.randomGatheringWrapper} horizontal={true}>
        <View style={styles.gatheringTitleWrapper}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.GRAY_100 },
  titleTextContainer: {
    marginLeft: 16,
    marginTop: 30,
    marginBottom: 20,
    fontSize: 18,
  },
  randomGatheringWrapper: {
    marginLeft: 16,
    gap: 16,
    marginTop: 20,
  },
  gatheringTitleWrapper: {},
});
