import { colors } from "@/constants";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          source={require("@/assets/images/login1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.introductionText}>
        <Text style={styles.introductionText}>
          Your Korea story starts here.
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo-3.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={colors.GRAY_600}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor={colors.GRAY_600}
        />
        <Pressable style={{ alignSelf: "flex-end" }}>
          <Text
            style={{
              color: colors.ORANGE_600,
              fontSize: 10,
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
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
  ImageContainer: {
    marginTop: 71,
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
  input: {
    borderColor: colors.GRAY_500,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    width: 299,
    height: 35,
    fontSize: 14,
    fontWeight: "400",
  },
  inputContainer: {
    gap: 15,
    marginBottom: 16,
  },
});
