import Toast from "@/components/Toast";
import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckEmailScreen() {
  const [isLinkSent, setIsLinkSent] = useState(false);

  const handleResetLink = () => {
    // TODO: 실제 비밀번호 재설정 링크 전송 API 호출
    setIsLinkSent(true);

    setTimeout(() => {
      setIsLinkSent(false);
    }, 5000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/mail.png")}
          style={styles.imageStyles}
        />
      </View>
      <View style={styles.titleContainer}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Check your mail
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          We’ve sent a confirmation link to your email. {"\n"}
          Please check your inbox and follow the{"\n"}instructions to continue
        </CustomText>
      </View>

      <View style={styles.resendContainer}>
        <CustomText fontWeight="medium" style={styles.resendDescriptionText}>
          Did not receive the email?{"\n"}Check your spam letter
        </CustomText>
        <CustomText fontWeight="medium" style={styles.resendDescriptionText}>
          or
        </CustomText>
        <CustomButton
          label="Resend link"
          shape="large"
          labelStyle="pressedStandardText"
          textStyle={styles.resendButtonText}
          onPress={handleResetLink}
        />
        <CustomButton
          label="비번찾기 페이지 버튼 ㅎㅎ 나중에 지울 겁니두"
          shape="large"
          labelStyle="pressedStandardText"
          textStyle={styles.resendButtonText}
          onPress={() => router.push("/auth/password-reset/resetPassword")}
        />
      </View>
      <Toast
        visible={isLinkSent}
        message="Please Check your email for the new link"
        variant="success"
        position="bottom"
        size="small"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 184,
    alignItems: "center",
  },
  imageStyles: {
    width: 72,
    height: 73,
  },
  titleContainer: {
    alignItems: "center",
    gap: 16,
    marginTop: 16,
    marginBottom: 35,
  },
  titleText: {
    fontSize: 28,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: "center",
  },
  resendContainer: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  resendDescriptionText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.GRAY_600,
  },
  resendButtonText: {
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.ORANGE_600,
    lineHeight: 16,
  },
});
