import queryClient from "@/api/queryClient";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Pretendard: require("../assets/fonts/PretendardVariable.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ActionSheetProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
        {/* @ts-ignore: react-native-toast-message is often used without a ref when calling Toast.show() globally. */}
      </QueryClientProvider>
    </ActionSheetProvider>
  );
}

function RootNavigator() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" />
    </Stack>
  );
}
