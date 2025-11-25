import PictureIcon from "@/assets/images/picture.svg";
import { categoryLabels } from "@/constants/categoryLabels";
import { Category, ImageUri } from "@/types";
import * as ImagePicker from "expo-image-picker";
import { Controller, useFormContext } from "react-hook-form";
import { Alert, Pressable, ScrollView, StyleSheet, View } from "react-native";
import CategoryButtons from "./CategoryButtons";
import ErrorMessage from "./ui/ErrorMessage";
import { colors } from "@/constants";

/**
 * PostWriteOptions - 게시글 작성 옵션 컴포넌트
 *
 * 게시글 작성 시 이미지 첨부와 카테고리 선택 기능 제공
 * - imageUris: setValue로 직접 폼 값 설정
 * - category: Controller로 단일 선택 제어 (0개 또는 1개)
 */
function PostWriteOptions() {
  const { control, setValue, watch } = useFormContext();
  const imageUris = watch("imageUris") as ImageUri[];

  /**
   * 이미지 선택 핸들러
   * - 갤러리 접근 권한 요청
   * - 다중 이미지 선택 가능
   * - setValue로 직접 imageUris 필드 업데이트
   */
  const handleSelectImage = async () => {
    // 권한 요청
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "권한 필요",
        "사진을 선택하려면 갤러리 접근 권한이 필요합니다."
      );
      return;
    }

    // 이미지 선택
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newImages: ImageUri[] = result.assets.map((asset) => ({
        uri: asset.uri,
      }));
      setValue("imageUris", [...imageUris, ...newImages]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.buttonsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.imageButton} onPress={handleSelectImage}>
          <PictureIcon
            width={16.5}
            height={16.5}
            style={styles.pictureButton}
          />
        </Pressable>

        {/* 카테고리 단일 선택 (0개 또는 1개) */}
        <Controller
          name="category"
          control={control}
          defaultValue=""
          rules={{
            validate: (data: Category | "") => {
              if (data === "") {
                return "1 category can be selected.";
              }
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View style={styles.categoryContainer}>
              <CategoryButtons
                categoryLabels={categoryLabels.slice(1, 6)}
                selectedCategory={value}
                onPress={(label) => {
                  onChange(value === label ? "" : label);
                }}
              />
              {error && <ErrorMessage message={error?.message} />}
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  buttonsContainer: {
    marginTop: 7,
    gap: 5,
    alignItems: "flex-start",
  },
  imageButton: {
    height: 26,
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: colors.GRAY_100,
    borderColor: colors.GRAY_500,
    borderWidth: 1.5,
    borderRadius: 16,
    justifyContent: "center",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 3,
  },
  pictureButton: {
    justifyContent: "center",
  },
});

export default PostWriteOptions;
