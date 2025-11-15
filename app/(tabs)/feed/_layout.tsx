import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function FeedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.GRAY_100,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Feed" }}
      />
    </Stack>
  );
}
