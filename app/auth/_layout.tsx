import { colors } from "@/constants";
import { Stack } from "expo-router";

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
        name="password-reset/index"
        options={{
          title: "비밀번호 재설정 요청",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="password-reset/checkEmail"
        options={{
          title: "이메일 확인 안내",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="password-reset/resetPassword"
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
