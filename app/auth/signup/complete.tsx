import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CompleteScreen() {
  return (
    <SafeAreaView>
      <CustomText>Welcome to Kople</CustomText>
      <CustomButton label="Start" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
