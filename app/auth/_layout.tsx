import { Stack } from "expo-router";
import { colors } from "@/constants";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          title: "비밀번호 재설정",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/index"
        options={{
          title: "회원가입",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/complete"
        options={{
          title: "회원가입 완료",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/createProfile"
        options={{
          title: "프로필 생성",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/detail"
        options={{
          title: "프로필 상세 설정",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
