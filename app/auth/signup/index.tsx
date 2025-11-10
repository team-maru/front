import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Join Kople
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          Be part of our community,{"\n"}explore Korea together
        </CustomText>
      </View>

      <View style={styles.inputContainer}>
        <InputField variant="outlined" placeholder="First Name" />
        <InputField variant="outlined" placeholder="Last Name" />
        <InputField variant="outlined" placeholder="Email Address" />
        <InputField variant="outlined" placeholder="Password" secureTextEntry />
        <InputField
          variant="outlined"
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>

      <CustomButton
        label="Next"
        shape="filled"
        labelStyle="filledText"
        style={styles.nextButton}
        onPress={() => router.push("/auth/signup/createProfile")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    gap: 5,
  },
  titleText: {
    fontSize: 34,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 32,
    marginBottom: 57,
    width: "100%",
    alignItems: "center",
    gap: 22,
  },
  nextButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
});
