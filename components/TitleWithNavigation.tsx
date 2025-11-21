import { colors } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface TitleWithNavigationProps {
  children: React.ReactNode;
  route:
    | "/(tabs)/explore"
    | "/(tabs)/feed"
    | "/(tabs)/feed/gathering";
}

function TitleWithNavigation({ children, route }: TitleWithNavigationProps) {
  const handlePress = () => {
    if (route) {
      router.push(route as Href);
    }
  };

  return (
    <View style={styles.gatheringTitleWrapper}>
      <CustomText fontWeight="bold" style={styles.titleTextContainer}>
        {children}
      </CustomText>
      <Pressable onPress={handlePress}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={colors.GRAY_900}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gatheringTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTextContainer: {
    fontSize: 18,
    color: colors.BLACK,
  },
});

export default TitleWithNavigation;
