import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "./ui/CustomButton";

interface CategoryButtonsProps {}

const CategoryButtons = ({}: CategoryButtonsProps) => {
  const categoryLabels = ["All", "Campus", "Tips", "Eats", "Ask"];
  return (
    <View style={styles.categoryContainer}>
      {categoryLabels.map((label) => (
        <CustomButton label={label} shape="outline" labelStyle="outlineText" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginTop: 6,
    marginBottom: 10,
    gap: 5,
  },
});

export default CategoryButtons;
