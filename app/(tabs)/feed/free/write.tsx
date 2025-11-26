import DescriptionInput from "@/components/DescriptionInput";
import ImageList from "@/components/ImageList";
import PostWriteOptions from "@/components/PostWriteOptions";
import TitleInput from "@/components/TitleInput";
import CustomButton from "@/components/ui/CustomButton";
import { colors } from "@/constants";
import { Category, ImageUri } from "@/types";
import { useNavigation } from "expo-router";
import { useCallback, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

/**
 * 게시글 작성 폼 데이터 타입
 * - title: 제목 (최대 80자)
 * - description: 내용 (최대 1000자)
 * - category: 카테고리 (단일 선택, 빈 문자열 가능)
 * - imageUris: 첨부 이미지 URI 배열
 */
type FormValues = {
  title: string;
  description: string;
  category: Category | "";
  imageUris: ImageUri[];
};

/**
 * PostWriteScreen - 게시글 작성 화면
 *
 * react-hook-form의 FormProvider로 하위 컴포넌트들과 폼 상태 공유
 * - TitleInput: 제목 입력 (Controller)
 * - DescriptionInput: 내용 입력 (Controller)
 * - PostWriteOptions: 이미지 첨부 (setValue) + 카테고리 선택 (Controller)
 */
function PostWriteScreen() {
  const navigation = useNavigation();

  // 폼 초기화 및 기본값 설정
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      imageUris: [],
    },
  });

  // 폼 필드 값 감시
  const title = postForm.watch("title");
  const description = postForm.watch("description");
  const category = postForm.watch("category");
  const imageUris = postForm.watch("imageUris");

  /**
   * 폼 제출 핸들러 (현재 테스트용)
   * TODO: 실제 API 호출로 변경 필요
   */
  const onSubmit = useCallback((formValues: FormValues) => {
    alert(
      `제목은 ${formValues.title} 내용은 ${formValues.description} 카테고리는 ${
        formValues.category
      } 사진은 ${
        formValues.imageUris.length === 0
          ? "첨부되지 않았습니다."
          : "첨부되었습니다"
      }`
    );
    // TODO: 폼 리셋은 API 성공 후 처리
  }, []);

  /**
   * Post 버튼 활성화 조건 검사
   * - 제목: 10자 초과, 80자 이하
   * - 내용: 20자 초과, 1000자 이하
   * - 카테고리: 1개 선택 (빈 문자열이 아님)
   */
  const isFormValid = useMemo(
    () =>
      title.length > 0 &&
      title.length <= 80 &&
      description.length > 0 &&
      description.length <= 1000 &&
      category !== "",
    [title, description, category]
  );

  // 헤더 오른쪽에 "Post" 버튼 추가
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.GRAY_100,
      },
      headerRight: () => (
        <CustomButton
          label="Post"
          textStyle={
            isFormValid ? styles.enablePostButton : styles.disablePostButton
          }
          fontWeight="medium"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, [navigation, isFormValid, postForm, onSubmit]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FormProvider {...postForm}>
          <TitleInput />
          <DescriptionInput />
          <PostWriteOptions />
        </FormProvider>{" "}
        <View style={styles.imageListContainer}>
          <ImageList imageList={imageUris} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_100,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingTop: 0,
    gap:5
  },
  imageListContainer: {
    marginTop: 9,
  },
  disablePostButton: {
    backgroundColor: colors.GRAY_500,
    paddingHorizontal: 18,
    borderRadius: 26,
    fontSize: 15,
    color: colors.GRAY_100,
  },

  enablePostButton: {
    backgroundColor: colors.ORANGE_600,
    paddingHorizontal: 18,
    borderRadius: 26,
    fontSize: 15,
    color: colors.GRAY_100,
  },
});

export default PostWriteScreen;
