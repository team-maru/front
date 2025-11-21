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
import { StyleSheet } from "react-native";

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
        <BottomSheetView style={styles.contentContainer}>
          <WarningIcon width={48} height={48} style={{ marginBottom: 16 }} />
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handleIndicator: {
    backgroundColor: colors.GRAY_300,
    width: 40,
    height: 4,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    zIndex: 10000,
  },
  title: {
    fontSize: 24,
    color: colors.GRAY_900,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.GRAY_600,
    marginBottom: 32,
  },
  buttonContainer: {
    gap: 12,
  },
  actionButton: {
    backgroundColor: colors.ORANGE_600,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  actionButtonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: colors.GRAY_200,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  cancelButtonPressed: {
    opacity: 0.8,
  },
  cancelText: {
    color: colors.GRAY_600,
    fontSize: 16,
  },
});

export default BottomModalSheet;
