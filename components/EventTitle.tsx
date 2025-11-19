import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface EventTitleProps {
  children: React.ReactNode;
  route?: string;
}

function EventTitle({ children, route }: EventTitleProps) {
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
        <Feather name="arrow-right" size={24} color={colors.BLACK} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gatheringTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 20,
  },
  titleTextContainer: {
    fontSize: 18,
    color: colors.BLACK,
  },
});

export default EventTitle;
