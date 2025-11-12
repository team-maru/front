import BirthdateInputField from "@/components/BirthdateInputField";
import GenderDropdown from "@/components/GenderDropdown";
import NationalityDropdown from "@/components/NationalityDropdown";
import NicknameInputField from "@/components/NicknameInputField";
import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { DropdownProvider } from "@/contexts/DropdownContext";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProfileScreen() {
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  // 각 필드의 유효성 상태 관리
  const [validationStatus, setValidationStatus] = useState({
    nickname: false,
    nationality: false,
    gender: false,
    birthdate: false,
  });

  // 모든 필드가 유효한지 확인
  const isAllValid = Object.values(validationStatus).every((status) => status);

  // 각 필드의 유효성 상태 업데이트
  const handleNicknameValidation = (isValid: boolean) => {
    setValidationStatus((prev) => ({ ...prev, nickname: isValid }));
  };

  const handleNationalityChange = (nationality: string) => {
    setSelectedNationality(nationality);
    setValidationStatus((prev) => ({ ...prev, nationality: !!nationality }));
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setValidationStatus((prev) => ({ ...prev, gender: !!gender }));
  };

  const handleBirthdateValidation = (isValid: boolean) => {
    setValidationStatus((prev) => ({ ...prev, birthdate: isValid }));
  };

  const handleNext = () => {
    if (isAllValid) {
      router.push("/auth/signup/detail");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Create your profile
        </CustomText>
      </View>

      <DropdownProvider>
        <View style={styles.inputContainer}>
          <NicknameInputField onValidationChange={handleNicknameValidation} />
          <NationalityDropdown
            selectedValue={selectedNationality}
            onSelect={handleNationalityChange}
          />
          <GenderDropdown
            selectedValue={selectedGender}
            onSelect={handleGenderChange}
          />

          <BirthdateInputField onValidationChange={handleBirthdateValidation} />
        </View>
      </DropdownProvider>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Next"
          shape={isAllValid ? "filled" : "disabled"}
          labelStyle="filledText"
          style={styles.nextButton}
          onPress={handleNext}
          disabled={!isAllValid}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.GRAY_100,
  },
  title: {
    alignItems: "center",
    gap: 5,
    marginTop: 80,
  },
  titleText: {
    fontSize: 34,
  },
  inputContainer: {
    marginTop: 32,
    marginBottom: 57,
    width: "100%",
    alignItems: "center",
    gap: 22,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  nextButton: {
    width: 299,
    height: 48,
    borderRadius: 12,
  },
});
