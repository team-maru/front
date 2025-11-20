import FeedHeader from "@/components/FeedHeader";
import { colors } from "@/constants";
import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedLayout() {
  const pathname = usePathname();

  // 헤더부분은 buddy, gathering, connecting 공통으로 사용
  const feedtype = pathname.includes("/buddy") || pathname.includes("/gathering") || pathname.includes("/connecting") ? "buddy" : "free";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.GRAY_100 }} edges={['top']}>
      <FeedHeader feedtype={feedtype} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.GRAY_100,
          },
        }}>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "free" }}
        />
        <Stack.Screen
          name="buddy"
          options={{ headerShown: false, title: "buddy" }}
        />
        <Stack.Screen
          name="gathering/index"
          options={{ headerShown: false, title: "gathering" }}
        />
        <Stack.Screen
          name="gathering/[id]"
          options={{ headerShown: false, title: "gathering detail" }}
        />
        <Stack.Screen
          name="gathering/write"
          options={{ headerShown: false, title: "gathering write" }}
        />
        <Stack.Screen
          name="connecting/index"
          options={{ headerShown: false, title: "connecting" }}
        />
      </Stack>
    </SafeAreaView>
  );
}
