import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Postlayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        contentStyle: { backgroundColor: colors.WHITE },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="write"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Link href={"/"} replace style={{ paddingRight: 10 }}>
              <Feather name="arrow-left" size={28} color={colors.BLACK} />
            </Link>
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
