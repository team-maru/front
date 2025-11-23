import { colors } from "@/constants";
import { Feather, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MessagesSquare } from "lucide-react-native";
import { Fragment, ReactNode, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Popover, { PopoverPlacement } from "react-native-popover-view";
import OptionColum from "./OptionColum";
import CustomText from "./ui/CustomText";

// 상수
const ICON_SIZE = 18;

// 신고 사유 리스트
const REPORT_REASONS = [
  { text: "Sexual Content", reportType: 1 },
  { text: "Fraud", reportType: 2 },
  { text: "Spam /Trolling", reportType: 3 },
  { text: "Commercial Ads", reportType: 4 },
  { text: "Political Activity", reportType: 5 },
  { text: "Irrelevant Content", reportType: 6 },
  { text: "Illegal Content", reportType: 7 },
  { text: "Abusive Language", reportType: 8 },
];

// 구분선 컴포넌트
const Divider = () => <View style={styles.divider} />;

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
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isReportMenuVisible, setIsReportMenuVisible] = useState(false);

  // 아이콘 생성 함수
  const createIcon = (IconComponent: any, iconName?: string): ReactNode => {
    if (iconName) {
      return (
        <IconComponent
          name={iconName}
          size={ICON_SIZE}
          color={colors.GRAY_900}
        />
      );
    }
    return <IconComponent size={ICON_SIZE} />;
  };

  // Popover 스타일 계산
  const getPopoverStyle = () => {
    if (optiontype === "myProfile") return styles.menuContainerMyProfile;
    return isReportMenuVisible
      ? styles.reportReasonContainer
      : styles.menuContainerOtherProfile;
  };

  // 내 프로필 메뉴 렌더링
  const renderMyProfileMenu = () => (
    <OptionColum
      onPress={() => router.push("/")}
      icon={createIcon(Octicons, "pencil")}
      text="Edit"
    />
  );

  // 다른 사람 프로필 기본 메뉴 렌더링
  const renderOtherProfileMenu = () => (
    <>
      <OptionColum
        onPress={() => router.push("/")}
        icon={createIcon(MessagesSquare)}
        text="Message"
      />
      <Divider />
      <OptionColum
        onPress={() => setIsReportMenuVisible(true)}
        icon={createIcon(Feather, "alert-circle")}
        text="Report"
        rightIcon={createIcon(MaterialIcons, "keyboard-arrow-right")}
      />
    </>
  );

  // 신고 메뉴 렌더링
  const renderReportMenu = () => (
    <>
      <OptionColum
        onPress={() => {
          setIsReportMenuVisible(true);
          setIsPopoverVisible(false);
        }}
        icon={createIcon(Feather, "alert-circle")}
        text="Report"
        rightIcon={createIcon(MaterialIcons, "keyboard-arrow-down")}
      />
      <Divider />

      {REPORT_REASONS.map((reason, index) => (
        <Fragment key={reason.text}>
          <OptionColum
            onPress={() => setIsPopoverVisible(false)}
            text={reason.text}
          />
          {index < REPORT_REASONS.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  );

  // 메뉴 콘텐츠 렌더링
  const renderMenuContent = () => {
    if (optiontype === "myProfile") return renderMyProfileMenu();
    if (isReportMenuVisible) return renderReportMenu();
    return renderOtherProfileMenu();
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
        <Popover
          placement={PopoverPlacement.BOTTOM}
          arrowSize={{ width: 0, height: 0 }}
          isVisible={isPopoverVisible}
          onRequestClose={() => {
            setIsPopoverVisible(false);
            setTimeout(() => {
              setIsReportMenuVisible(false);
            }, 500); {/*reportReason 모달 닫힐때 갑자기 첫 모달 나오는거 방지 */}
          }}
          from={
            <TouchableOpacity
              onPress={() => setIsPopoverVisible(true)}
              style={styles.iconButton}
              activeOpacity={0.7}>
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={colors.GRAY_500}
              />
            </TouchableOpacity>
          }
          popoverStyle={[styles.menuContainer, getPopoverStyle()]}>
          {renderMenuContent()}
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
  reportReasonContainer: {
    height: 300,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
  },
});

export default Profile;
