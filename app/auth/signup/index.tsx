import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  return (
    <SafeAreaView>
      <CustomText>Join Kople</CustomText>
      <CustomButton
        label="Next"
        onPress={() => router.push("/auth/signup/createProfile")}
      />
    </SafeAreaView>
  );
}
