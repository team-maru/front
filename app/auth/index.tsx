import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/login1.png")}
            style={styles.imageStyles}
          />
        </View>
        <View style={styles.introductionText}>
          <CustomText style={styles.introductionText}>
            Your Korea story starts here.
          </CustomText>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo-3.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputField variant="outlined" placeholder="Email" />
          <InputField
            variant="outlined"
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.forgotPasswordButton}>
          <CustomButton
            label="Forgot Password?"
            shape="large"
            labelStyle="pressedStandardText"
            textStyle={{ fontSize: 10 }}
            onPress={() => router.push("/auth/forgotPassword")}
          />
        </View>

        <View style={styles.loginButtonContainer}>
          <CustomButton
            label="Login"
            shape="filled"
            labelStyle="filledText"
            style={styles.loginButton}
            onPress={() => router.push("/(tabs)")}
          />
          <CustomText style={styles.betweenLoginButtonText}>
            Or sign in with
          </CustomText>
          <Pressable onPress={() => router.push("/(tabs)")}>
            <Image
              source={require("@/assets/images/Google.png")}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.signupContainer}>
          <CustomText style={styles.signupText}>
            Don't have an account?
          </CustomText>
          <CustomButton
            label="Sign Up"
            shape="large"
            labelStyle="pressedStandardText"
            textStyle={styles.signupButtonText}
            onPress={() => router.push("/auth/signup")}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    width: 262,
    height: 262,
  },
  logo: {
    width: 100,
    height: 22,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 44,
    alignItems: "center",
  },
  introductionText: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
  },
  logoContainer: {
    marginTop: 9,
    marginBottom: 40,
    alignItems: "center",
  },

  inputContainer: {
    gap: 15,
    marginBottom: 16,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginRight: 38,
  },
  loginButtonContainer: {
    marginTop: 22,
    gap: 14,
    alignItems: "center",
  },
  loginButton: {
    width: 299,
    height: 40,
    borderRadius: 12,
  },

  betweenLoginButtonText: {
    fontSize: 10,
    color: colors.GRAY_600,
  },
  signupText: {
    fontSize: 10,
    color: colors.GRAY_600,
    fontWeight: "500",
  },
  signupButtonText: {
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.ORANGE_600,
    lineHeight: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 29,
  },
});
