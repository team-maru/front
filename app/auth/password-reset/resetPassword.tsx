import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Reset Password
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          Please create a new password to keep{"\n"}
          your account safe
        </CustomText>
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label="New password"
          variant="outlined"
          containerStyle={styles.inputField}
          secureTextEntry
        />
        <InputField
          label="Confirm new password"
          variant="outlined"
          containerStyle={styles.inputField}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Back to Login"
          shape="filled"
          labelStyle="filledText"
          style={styles.loginButton}
          onPress={() => router.push("/auth")}
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
    gap: 16,
    marginTop: 36,
    marginBottom: 52,
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

  loginButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
});
