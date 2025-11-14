import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Forgot Password?
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          Please enter the email address you’d like your {"\n"}
          password reset information sent to
        </CustomText>
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label="Enter email address"
          variant="outlined"
          placeholder="Email"
          containerStyle={styles.inputField}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Request reset link"
          shape="filled"
          labelStyle="filledText"
          style={styles.requestButton}
          onPress={() => router.push("/auth/password-reset/checkEmail")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    gap: 16,
    marginTop: 145,
  },
  titleText: {
    fontSize: 28,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 51,
    marginBottom: 102,
  },
  inputField: {
    width: 355,
    height: 40,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 34,
    marginBottom: 18,
  },

  requestButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
});
