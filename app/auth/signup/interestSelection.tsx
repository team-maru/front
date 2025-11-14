import Tag from "@/components/Tag";
import CustomButton from "@/components/ui/CustomButton";
import CustomText from "@/components/ui/CustomText";
import { colors } from "@/constants";
import { INTEREST_CATEGORIES, Interest } from "@/constants/interests";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InterestSelectionScreen() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const MAX_SELECTION = 3;

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        return prev.filter((id) => id !== interestId);
      } else {
        if (prev.length >= MAX_SELECTION) {
          return prev;
        }
        return [...prev, interestId];
      }
    });
  };

  const renderInterest = (interest: Interest) => {
    const IconComponent = interest.icon.library;
    const isSelected = selectedInterests.includes(interest.id);

    return (
      <Tag
        key={interest.id}
        icon={
          <IconComponent
            name={interest.icon.name as any}
            size={16}
            color={interest.icon.color}
          />
        }
        message={interest.label}
        isSelected={isSelected}
        onPress={() => handleInterestToggle(interest.id)}
      />
    );
  };

  const renderCategory = (categoryKey: keyof typeof INTEREST_CATEGORIES) => {
    const category = INTEREST_CATEGORIES[categoryKey];

    return (
      <View key={categoryKey} style={styles.categoryContainer}>
        <CustomText fontWeight="medium" style={styles.categoryTitle}>
          {category.title}
        </CustomText>

        <View style={styles.interestsRow}>
          {category.interests.map(renderInterest)}
        </View>
      </View>
    );
  };

  const isAllValid = selectedInterests.length !== 0;

  const handleNext = () => {
    if (isAllValid) {
      router.push("/auth/signup/complete");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomText fontWeight="semibold" style={styles.titleText}>
          What do you vibe with?
        </CustomText>
        <CustomText fontWeight="medium" style={styles.descriptionText}>
          Choose your interests {"\n"}
          to find your perfect buddy.
        </CustomText>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {Object.keys(INTEREST_CATEGORIES).map((categoryKey) =>
          renderCategory(categoryKey as keyof typeof INTEREST_CATEGORIES)
        )}
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.selectedCounter}>
          <CustomText
            style={
              selectedInterests.length == 0
                ? styles.counterText
                : styles.maxCounterText
            }
            fontWeight="medium"
          >
            {selectedInterests.length}
          </CustomText>
          <CustomText fontWeight="medium" style={styles.maxCounterText}>
            /3 Selected
          </CustomText>
        </View>
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
    backgroundColor: colors.GRAY_100,
  },
  titleContainer: {
    alignItems: "flex-start",
    gap: 12,
    marginTop: 59,
    marginBottom: 40,
    paddingHorizontal: 32,
    width: "100%",
  },
  titleText: {
    fontSize: 24,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "left",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {},
  categoryContainer: {
    marginBottom: 60,
    marginHorizontal: 27,
  },
  categoryTitle: {
    fontSize: 16,
    color: colors.GRAY_900,
    marginBottom: 16,
  },
  interestsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    rowGap: 12,
  },
  footerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: colors.GRAY_500,
    backgroundColor: colors.GRAY_100,
    height: 83,
    width: "100%",
  },
  selectedCounter: {
    flexDirection: "row",
    alignItems: "center",
  },

  counterText: {
    fontSize: 16,
    color: colors.GRAY_500,
  },
  maxCounterText: {
    fontSize: 16,
    color: colors.GRAY_600,
  },
  nextButton: {
    width: 182,
    height: 48,
    borderRadius: 12,
  },
});
