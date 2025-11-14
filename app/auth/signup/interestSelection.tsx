import Tag from "@/components/Tag";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InterestSelectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          What do you vibe with?
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          Choose your interests {"\n"}
          to find your perfect buddy.
        </CustomText>
      </View>
      <View>
        <Tag
          icon={<AntDesign name="compass" color={colors.YELLOW} />}
          message="Exploring new city"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.GRAY_100,
  },
  titleContainer: {
    alignItems: "flex-start",
    gap: 12,
    marginTop: 59,
    paddingHorizontal: 32,
    width: "100%",
  },
  titleText: {
    fontSize: 24,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "left",
  },
});
