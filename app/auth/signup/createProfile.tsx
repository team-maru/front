import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProfileScreen() {
  return (
    <SafeAreaView>
      <CustomText>Create your profile</CustomText>
      <CustomButton
        label="Next"
        onPress={() => router.push("/auth/signup/detail")}
      />
    </SafeAreaView>
  );
}
