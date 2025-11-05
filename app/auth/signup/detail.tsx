import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  return (
    <SafeAreaView>
      <CustomText>Almost there!</CustomText>
      <CustomText>Just a few details</CustomText>
      <CustomButton
        label="Next"
        onPress={() => router.push("/auth/signup/complete")}
      />
    </SafeAreaView>
  );
}
