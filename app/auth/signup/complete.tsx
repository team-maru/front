import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, View } from "react-native";

export default function CompleteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText fontWeight="semibold" style={styles.title}>
        Welcome to Kople
      </CustomText>

      <Image
        source={require("@/assets/images/welcome.png")}
        style={styles.imageStyles}
      />
      <CustomText fontWeight="medium" style={styles.description}>
        Ready to discover events and {"\n"}
        connect with people? {"\n"}
        Let's dive in!
      </CustomText>
      <CustomButton
        label="Start"
        shape="filled"
        labelStyle="filledText"
        style={styles.startButton}
        onPress={() => router.push("/auth")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    width: 262,
    height: 262,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 22,
  },
  startButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
});
