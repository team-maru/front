import WarningIcon from "@/assets/images/Warning-Circle.svg";
import { colors } from "@/constants";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { router } from "expo-router";
import { forwardRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface BottomModalSheetProps {
  writeType: "free" | "connecting" | "gathering";
}

const BottomModalSheet = forwardRef<BottomSheetModal, BottomModalSheetProps>(
  ({ writeType }, ref) => {
    // Backdrop 렌더 함수
    const renderBackdrop = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
        />
      ),
      []
    );
    const handleNavigate = () => {
      const destination =
        writeType === "free"
          ? "/(tabs)/feed/free/write"
          : writeType === "gathering"
          ? "/(tabs)/feed/gathering/write"
          : "/(tabs)/feed/connecting/write";

      // Bottom Sheet 닫기
      if (ref && typeof ref !== "function") {
        ref.current?.dismiss();
      }

      // 네비게이션
      router.push(destination);
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["30%"]} //어디까지 올라올지 높이를 지정
        handleComponent={null} //"막대기(핸들바)" 부분 제거
        enablePanDownToClose={false}
        backgroundStyle={styles.bottomSheetBackground}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.contentWrapper}>
          <View style={styles.contentContainer}>
            <WarningIcon width={48} height={48} />
            <CustomText fontWeight="semibold" style={styles.warningTitleStyle}>
              Posting is limited
            </CustomText>
            <CustomText fontWeight="regular" style={styles.warningContentStyle}>
              Only members who've joined at least{"\n"}
              one KOPLE event can write a post.
            </CustomText>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  handleIndicator: {
    backgroundColor: colors.GRAY_300,
    width: 40,
    height: 4,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: "15%",
    paddingTop: "12%",
    paddingBottom: "20%",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  warningTitleStyle: {
    fontSize: 20,
    color: colors.GRAY_900,
  },
  warningContentStyle: {
    fontSize: 12,
    color: colors.GRAY_900,
  },
});

export default BottomModalSheet;
