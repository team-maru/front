import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Postlayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        contentStyle: { backgroundColor: colors.GRAY_100 },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="write"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Pressable
              onPress={() =>
                router.canGoBack() ? router.back() : router.replace("/")
              }>
              <Feather
                name="x"
                size={24}
                color={colors.GRAY_600}
                style={{ alignItems: "center" }}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Pressable
              onPress={() =>
                router.canGoBack() ? router.back() : router.replace("/")
              }>
              <Feather
                name="arrow-left"
                size={24}
                color={colors.BLACK}
                style={{ marginTop: 8 }}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="update/[id]"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={28}
              color={colors.BLACK}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
