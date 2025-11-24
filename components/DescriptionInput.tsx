import { colors } from "@/constants";
import { Controller, useFormContext } from "react-hook-form";
import { Dimensions } from "react-native";
import ErrorMessage from "./ui/ErrorMessage";
import InputField from "./ui/InputField";

/**
 * DescriptionInput - 게시글 내용 입력 컴포넌트
 *
 * react-hook-form Controller로 "description" 필드 제어
 * - Validation: 최대 1000자
 * - multiline: 여러 줄 입력 가능
 * - 동적 높이: 화면 높이의 50% 또는 최대 320px
 */
function DescriptionInput() {
  const { control } = useFormContext();

  // 반응형 높이 계산: 화면 높이의 50% 또는 최대 320px
  const screenHeight = Dimensions.get("window").height;
  const inputHeight = Math.min(screenHeight * 0.5, 320);

  return (
    <Controller
      name="description"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length >= 1000) {
            return "Maximum of 1000 characters";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <>
          <InputField
            ref={ref}
            variant="filledOrange"
            placeholder="Share your thoughts"
            placeholderTextColor={colors.GRAY_500}
            returnKeyType="default"
            value={value}
            onChangeText={(text) => {
              if (text.length <= 1000) {
                onChange(text);
              }
            }}
            maxLength={1000}
            multiline
            scrollEnabled
            textAlignVertical="top"
            blurOnSubmit={false}
            containerStyle={{
              height: inputHeight,
              paddingVertical: 24,
              justifyContent: "center",
            }}
          />
          {error && <ErrorMessage message={error.message} />}
        </>
      )}
    />
  );
}

export default DescriptionInput;
