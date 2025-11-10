import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Postlayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}>
      <Stack.Screen
        name="write"
        options={{
          headerShown: false,
          headerLeft: () => (
            <Link href={"/"} replace style={{ paddingRight: 10 }}>
              <Feather name="arrow-left" size={28} color={"black"} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          headerLeft: () => (
            <Pressable
              onPress={() =>
                router.canGoBack() ? router.back() : router.replace("/")
              }>
              <Feather name="arrow-left" size={28} color={"black"} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="update/[id]"
        options={{
          headerShown: false,
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={28}
              color={"black"}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
