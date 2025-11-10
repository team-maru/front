import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
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
        <InputField
          variant="outlined"
          placeholder="First Name"
          containerStyle={styles.inputField}
        />
        <InputField
          variant="outlined"
          placeholder="Last Name"
          containerStyle={styles.inputField}
        />
        <InputField
          variant="outlined"
          placeholder="Email Address"
          containerStyle={styles.inputField}
        />
        <InputField
          variant="outlined"
          placeholder="Password"
          secureTextEntry
          containerStyle={styles.inputField}
        />
        <InputField
          variant="outlined"
          placeholder="Confirm Password"
          secureTextEntry
          containerStyle={styles.inputField}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Next"
          shape="filled"
          labelStyle="filledText"
          style={styles.nextButton}
          onPress={() => router.push("/auth/signup/createProfile")}
        />
      </View>
      <View style={styles.signinContainer}>
        <CustomText fontWeight="medium" style={styles.signinDescriptionText}>
          Already have an account?
        </CustomText>
        <CustomButton
          label="Sign in"
          shape="large"
          labelStyle="pressedStandardText"
          textStyle={styles.signinButtonText}
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
  title: {
    alignItems: "center",
    gap: 5,
    marginTop: 80,
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
  inputField: {
    width: 355,
    height: 40,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },

  nextButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
  signinContainer: {
    flexDirection: "row",
    marginTop: 6,
    gap: 6,
    alignItems: "center",
  },
  signinDescriptionText: {
    fontSize: 10,
    color: colors.GRAY_600,
  },
  signinButtonText: {
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ORANGE_600,
    lineHeight: 16,
  },
});
