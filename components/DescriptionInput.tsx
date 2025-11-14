import { colors } from "@/constants";
import { Controller, useFormContext } from "react-hook-form";
import { Dimensions } from "react-native";
import InputField from "./ui/InputField";

interface DescriptionInputProps {}

/**
 * DescriptionInput - 게시글 내용 입력 컴포넌트
 *
 * react-hook-form Controller로 "description" 필드 제어
 * - Validation: 최대 1000자
 * - multiline: 여러 줄 입력 가능
 * - 동적 높이: 화면 높이의 50% 또는 최대 320px
 */
function DescriptionInput({}: DescriptionInputProps) {
  const { control } = useFormContext();

  // 반응형 높이 계산: 화면 높이의 50% 또는 최대 320px
  const screenHeight = Dimensions.get("window").height;
  const inputHeight = Math.min(screenHeight * 0.5, 320);

  return (
    <Controller
      name="description"
      control={control}
      render={({ field: { ref, onChange, value } }) => (
        <InputField
          ref={ref}
          variant="filledOrange"
          placeholder="Share your thoughts"
          placeholderTextColor={colors.GRAY_500}
          returnKeyType="next"
          value={value}
          onChangeText={(text) => {
            // 1000자 이하일 때만 입력 허용
            if (text.length <= 1000) {
              onChange(text);
            }
          }}
          maxLength={1000} // 추가 안전장치
          multiline // 여러 줄 입력 가능
          scrollEnabled={true} // 텍스트가 영역을 넘어갈 때 스크롤 활성화
          textAlignVertical="top" // 텍스트를 상단 정렬
          containerStyle={{
            height: inputHeight,
            paddingVertical: 24,
            justifyContent: "center",
          }}
        />
      )}
    />
  );
}

export default DescriptionInput;
