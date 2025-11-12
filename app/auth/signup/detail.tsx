import StatusDropdown from "@/components/StatusDropdown";
import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import UniversityDropdown from "@/components/UniversityDropdown";
import { colors } from "@/constants";
import { DropdownProvider } from "@/contexts/DropdownContext";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  // 각 필드의 유효성 상태 관리
  const [validationStatus, setValidationStatus] = useState({
    status: false,
    university: false,
  });

  // 모든 필드가 유효한지 확인
  const isAllValid = Object.values(validationStatus).every((status) => status);

  // 각 필드의 유효성 상태 업데이트
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setValidationStatus((prev) => ({ ...prev, status: !!status }));
  };

  const handleUniversityChange = (university: string) => {
    setSelectedUniversity(university);
    setValidationStatus((prev) => ({ ...prev, university: !!university }));
  };
  const handleNext = () => {
    if (isAllValid) {
      router.push("/auth/signup/interests");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DropdownProvider>
        <View style={styles.title}>
          <CustomText fontWeight="semibold" style={styles.titleText}>
            Almost there! {"\n"}Just a few details
          </CustomText>
        </View>

        <View style={styles.inputContainer}>
          <StatusDropdown
            selectedValue={selectedStatus}
            onSelect={handleStatusChange}
          />
          <UniversityDropdown
            selectedValue={selectedUniversity}
            onSelect={handleUniversityChange}
          />
        </View>

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
      </DropdownProvider>
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
    marginTop: 169,
  },
  titleText: {
    fontSize: 34,
  },
  inputContainer: {
    marginTop: 39,
    marginBottom: 130,
    width: "100%",
    alignItems: "center",
    gap: 24,
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
