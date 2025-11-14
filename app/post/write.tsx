import DescriptionInput from "@/components/DescriptionInput";
import PostWriteOptions from "@/components/PostWriteOptions";
import TitleInput from "@/components/TitleInput";
import CustomButton from "@/components/ui/CustomButton";
import { colors } from "@/constants";
import { Category, ImageUri } from "@/types";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
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

  /**
   * 폼 제출 핸들러 (현재 테스트용)
   * TODO: 실제 API 호출로 변경 필요
   */
  const onSubmit = (formValues: FormValues) => {
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
  };

  // 헤더 오른쪽에 "Post" 버튼 추가
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label="Post"
          textStyle={styles.updateButtonContainer}
          fontWeight="medium"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FormProvider {...postForm}>
          <TitleInput />
          <DescriptionInput />
          <PostWriteOptions />
        </FormProvider>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  updateButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    paddingHorizontal: 18,
    borderRadius: 26,
    fontSize: 15,
    color: colors.WHITE,
  },
});

export default PostWriteScreen;
