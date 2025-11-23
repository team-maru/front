import { colors } from "@/constants";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { MessagesSquare } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Popover, { PopoverPlacement } from "react-native-popover-view";
import CustomText from "./ui/CustomText";
import { router } from "expo-router";

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
        <Popover
          placement={PopoverPlacement.BOTTOM}
          arrowSize={{ width: 0, height: 0 }}
          isVisible={visible}
          onRequestClose={() => setVisible(false)}
          from={
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.iconButton}
              activeOpacity={0.7}>
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={colors.GRAY_500}
              />
            </TouchableOpacity>
          }
          popoverStyle={[
            styles.menuContainer,
            optiontype === "myProfile"
              ? styles.menuContainerMyProfile
              : styles.menuContainerOtherProfile,
          ]}>
          {optiontype === "myProfile" ? (
            <Pressable
              style={styles.menuItem}
              onPress={() => router.push("/")}>
              <Octicons name="pencil" size={18} color={colors.GRAY_900} />
              <CustomText fontWeight="medium" style={styles.menuText}>
                Edit
              </CustomText>
            </Pressable>
          ) : (
            <>
              <Pressable
                style={styles.menuItem}
                onPress={() => {
                  setVisible(false);
                  alert("누름");
                }}>
                <MessagesSquare size={18} />
                <CustomText fontWeight="medium" style={styles.menuText}>
                  Message
                </CustomText>
              </Pressable>
              <View style={{ height: 1, backgroundColor: "#E0E0E0" }} />

              <Pressable
                style={styles.menuItem}
                onPress={() => setVisible(false)}>
                <Feather
                  name="alert-circle"
                  size={18}
                  color={colors.GRAY_900}
                />
                <CustomText fontWeight="medium" style={styles.menuText}>
                  Report
                </CustomText>
              </Pressable>
            </>
          )}
        </Popover>
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
  menuContainer: {
    width: 186,
    backgroundColor: colors.GRAY_100,
    borderRadius: 12,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuContainerMyProfile: {
    height: 35,
  },
  menuContainerOtherProfile: {
    height: 71,
  },
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 17,
    height: 32,
    alignItems: "center",
    gap: 10,
  },
  menuText: {
    fontSize: 12,
    color: colors.GRAY_900,
  },
});

export default Profile;
