import { colors } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

interface WishButtonProps {
  wished?: boolean;
}

function WishButton({ wished = false }: WishButtonProps) {
  const [isWished, setIsWished] = useState(wished);
  return (
    <Pressable
      onPress={() => {
        setIsWished(!isWished);
      }}
      style={styles.wishButtonContainer}
    >
      <FontAwesome
        name={isWished ? "star" : "star-o"}
        color={isWished ? colors.ORANGE_600 : colors.GRAY_500}
        size={16}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wishButtonContainer: {
    backgroundColor: colors.GRAY_100,
    width: 22,
    height: 22,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WishButton;
