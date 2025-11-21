import BottomModalSheet from "@/components/BottomModalSheet";
import FeedHeader from "@/components/FeedHeader";
import FloatingButton from "@/components/FloatingButton";
import { colors } from "@/constants";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router, Stack, usePathname } from "expo-router";
import { Fragment, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedLayout() {
  const pathname = usePathname();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

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
  const isMainPage = isFeedIndex || isBuddy || isGathering || isConnecting;

  const showWriteButton = isFeedIndex || isGathering || isConnecting;

  // FloatingButton 클릭 핸들러 (조건 체크 후 Bottom Sheet 표시)
  const handleFloatingButtonPress = () => {
    if (isGathering) {
      // gathering일 때만 bottomSheet 표시
      bottomSheetRef.current?.present();
    } else {
      // 그 외에는 바로 write 페이지로 이동
      const destination =
        writeType === "free"
          ? "/(tabs)/feed/free/write"
          : "/(tabs)/feed/connecting/write";
      router.push(destination);
    }
  };

  // 조건부 컨테이너 설정
  const Container = isMainPage ? SafeAreaView : Fragment;

  return (
    <Container
      {...(isMainPage
        ? {
            style: { flex: 1, backgroundColor: colors.GRAY_100 },
            edges: ["top"],
          }
        : {})}>
      {isMainPage && <FeedHeader feedtype={feedtype} />}
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
      {showWriteButton && (
        <FloatingButton onPress={handleFloatingButtonPress} />
      )}
      <BottomModalSheet
        ref={bottomSheetRef}
        writeType={writeType}
        warningType={1}
      />
    </Container>
  );
}
