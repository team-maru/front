import WarningIcon from "@/assets/images/Warning-Circle.svg";
import { colors } from "@/constants";
import { warningContentData } from "@/data/dummyData";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { forwardRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./ui/CustomText";

interface PostingLimitationModalProps {
  warningType: number;
}

const PostingLimitationModal = forwardRef<BottomSheetModal, PostingLimitationModalProps>(
  ({ warningType }, ref) => {
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

    const warningData = warningContentData.find(
      (data) => data.id === warningType
    );
    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["30%"]} //어디까지 올라올지 높이를 지정
        handleComponent={null} //"막대기(핸들바)" 부분 제거
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
  },
  contentContainer: {
    alignItems: "center",
  },
  warningTitleStyle: {
    fontSize: 20,
    color: colors.GRAY_900,
    textAlign: "center",
  },
  warningContentStyle: {
    fontSize: 12,
    color: colors.GRAY_900,
    textAlign: "center",
  },
});

export default PostingLimitationModal;
