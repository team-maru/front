import { colors } from "@/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "./ui/CustomText";

interface ProfileProps {
  name: string;
  imageUri?: string;
  university: string;
  optiontype?: "myProfile" | "otherProfile";
}

function Profile({
  imageUri,
  name = "Name",
  university = "university name",
  optiontype = "otherProfile",
}: ProfileProps) {
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });

  const handleMenuPress = (action?: () => void) => {
    setVisible(false);
    if (action) {
      setTimeout(() => action(), 100);
    }
  };

  const handleIconPress = (event: any) => {
    event.currentTarget?.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number
      ) => {
        const iconCenterY = pageY + height / 2;
        const iconRight = pageX + width / 2;

        setMenuPosition({
          top: iconCenterY,
          right: 20,
        });
        setVisible(true);
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            imageUri ? { uri: imageUri } : require("@/assets/images/Earth.png")
          }
          style={styles.avatar}
        />
      </View>

      <View style={styles.textContainer}>
        <CustomText style={styles.name} fontWeight="semibold">
          {name}
        </CustomText>
        <CustomText style={styles.university} fontWeight="medium">
          {university}
        </CustomText>
      </View>

      <View style={styles.optionContainer}>
        {optiontype === "myProfile" && (
          <>
            <TouchableOpacity
              onPress={handleIconPress}
              style={styles.iconButton}
              activeOpacity={0.7}>
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={colors.GRAY_500}
              />
            </TouchableOpacity>

            <Modal
              visible={visible}
              transparent
              animationType="fade"
              onRequestClose={() => setVisible(false)}>
              <Pressable
                style={styles.modalOverlay}
                onPress={() => setVisible(false)}>
                <View
                  style={[
                    styles.menuContainer,
                    {
                      position: "absolute",
                      top: menuPosition.top,
                      right: menuPosition.right,
                    },
                  ]}>
                  <Pressable
                    style={styles.menuItem}
                    onPress={() => alert("누름")}>
                    <MessagesSquare size={24} />

                    <CustomText fontWeight="medium" style={styles.menuText}>
                      Message
                    </CustomText>
                  </Pressable>
                  <View style={{ height: 1, backgroundColor: "#E0E0E0" }} />

                  <Pressable style={styles.menuItem}>
                    <Feather
                      name="alert-circle"
                      size={18}
                      color={colors.GRAY_900}
                    />
                    <CustomText fontWeight="medium" style={styles.menuText}>
                      Report
                    </CustomText>
                  </Pressable>
                  <View style={{ height: 1, backgroundColor: "#E0E0E0" }} />

                  <Pressable style={styles.menuItem}>
                    <CustomText fontWeight="medium" style={styles.menuText}>
                      Edit
                    </CustomText>
                  </Pressable>
                </View>
              </Pressable>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "70%",
    justifyContent: "center",
    paddingLeft: 6,
  },
  optionContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    color: colors.BLACK,
    includeFontPadding: false,
    lineHeight: 16,
  },
  university: {
    fontSize: 14,
    color: colors.BLACK,
    includeFontPadding: false,
    lineHeight: 14,
    marginTop: 4,
  },
  iconButton: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  menuContainer: {
    width: 186,
    height: 97,
    backgroundColor: colors.GRAY_100,
    borderRadius: 12,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 17,
    height: 31,
    alignItems: "center",
    gap: 10,
  },
  menuText: {
    fontSize: 12,
    color: colors.GRAY_900,
  },
});

export default Profile;
