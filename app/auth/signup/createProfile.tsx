import BirthdateInputField from "@/components/BirthdateInputField";
import GenderDropdown from "@/components/GenderDropdown";
import NationalityDropdown from "@/components/NationalityDropdown";
import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import InputField from "@/components/ui/InputField";
import { colors } from "@/constants";
import { DropdownProvider } from "@/contexts/DropdownContext";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProfileScreen() {
  const [selectedNationality, setSelectedNationality] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          Create your profile
        </CustomText>
      </View>

      <DropdownProvider>
        <View style={styles.inputContainer}>
          <InputField
            label="Nickname"
            variant="outlined"
            containerStyle={styles.inputField}
          />
          <NationalityDropdown
            selectedValue={selectedNationality}
            onSelect={setSelectedNationality}
          />
          <GenderDropdown
            selectedValue={selectedGender}
            onSelect={setSelectedGender}
          />

          <BirthdateInputField />
        </View>
      </DropdownProvider>

      <View style={styles.buttonContainer}>
        <CustomButton
          label="Next"
          shape="filled"
          labelStyle="filledText"
          style={styles.nextButton}
          onPress={() => router.push("/auth/signup/detail")}
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
  inputField: {
    width: 355,
    height: 40,
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
