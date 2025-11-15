import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function ExploreLayout() {
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
        options={{ headerShown: false, title: "Explore" }}
      />
    </Stack>
  );
}
