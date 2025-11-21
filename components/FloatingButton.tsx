import PencilIcon from "@/assets/images/pencil.svg";
import { colors } from "@/constants";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

interface FloatingButtonProps {
  writeType: "free"|"connecting"|"gathering";
}

function FloatingButton({ writeType }: FloatingButtonProps) {
const destination = writeType === "free" ? "/post/write" : writeType === "gathering" ? "/(tabs)/feed/gathering/write" : "/(tabs)/feed/connecting/write";

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(destination)}>
      <PencilIcon width={22} height={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.ORANGE_600,
    width: 59,
    height: 59,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatingButton;
