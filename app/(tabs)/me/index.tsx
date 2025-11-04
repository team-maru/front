import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeScreen() {
  return (
    <SafeAreaView>
      <Text>Me</Text>
      <Pressable onPress={() => router.push("/auth")}>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}
