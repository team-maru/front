import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "./ui/CustomButton";

interface CategoryButtonsProps {}

const CategoryButtons = ({}: CategoryButtonsProps) => {
  return (
    <View style={styles.categoryContainer}>
      <CustomButton label="All" shape="outline" labelStyle="outlineText" />
      <CustomButton label="Campus" shape="outline" labelStyle="outlineText" />
      <CustomButton label="Tips" shape="outline" labelStyle="outlineText" />
      <CustomButton label="Eats" shape="outline" labelStyle="outlineText" />
      <CustomButton label="Ask" shape="outline" labelStyle="outlineText" />
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
