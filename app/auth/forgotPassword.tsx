import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const [isLinkSent, setIsLinkSent] = useState(false);

  const handleResetLink = () => {
    // TODO: 실제 비밀번호 재설정 링크 전송 API 호출
    setIsLinkSent(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
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
          label={isLinkSent ? "resend link" : "request reset link"}
          shape="filled"
          labelStyle="filledText"
          style={styles.requestButton}
          onPress={handleResetLink}
        />
      </View>
      <View style={styles.signinContainer}>
        <CustomButton
          label="Back To Login"
          fontWeight="medium"
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
    gap: 23,
    marginTop: 145,
    marginBottom: 30,
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
    fontSize: 13,
  },
});
