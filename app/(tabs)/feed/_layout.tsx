import FeedHeader from "@/components/FeedHeader";
import FloatingButton from "@/components/FloatingButton";
import { colors } from "@/constants";
import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedLayout() {
  const pathname = usePathname();

  // 현재 경로 확인
  const isFeedIndex = pathname === "/feed";
  const isBuddy = pathname === "/feed/buddy";
  const isGathering = pathname === "/feed/gathering";
  const isConnecting = pathname === "/feed/connecting";

  // 피드 타입 결정 (free 또는 buddy)
  const feedtype = isBuddy || isGathering || isConnecting ? "buddy" : "free";

  // FloatingButton 이동 경로 결정
  const writeType = isGathering
    ? "gathering"
    : isConnecting
    ? "connecting"
    : "free";

  // FloatingButton은 메인 피드 페이지에서만 표시 (buddy 제외)
  const showFloatingButton = isFeedIndex || isGathering || isConnecting;


  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.GRAY_100 }}
      edges={["top"]}>
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
      {showFloatingButton && <FloatingButton writeType={writeType} />}
    </SafeAreaView>
  );
}
