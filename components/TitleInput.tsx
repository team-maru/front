import { colors } from "@/constants";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import ErrorMessage from "./ui/ErrorMessage";
import InputField from "./ui/InputField";

/**
 * TitleInput - 게시글 제목 입력 컴포넌트
 *
 * react-hook-form Controller로 "title" 필드 제어
 * - Validation: 최대 80자
 * - autoFocus: 화면 로드 시 자동 포커스
 * - returnKeyType: "next" - 엔터키로 다음 필드(description)로 이동
 */
function TitleInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length >= 80) {
            return "Maximum of 80 characters";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <InputField
            ref={ref}
            autoFocus
            variant="standard"
            fontSize="large"
            fontWeight="semibold"
            placeholder="Write a Title"
            placeholderTextColor={colors.BLACK}
            returnKeyType="next"
            submitBehavior="submit"
            onSubmitEditing={() => setFocus("description")}
            value={value}
            onChangeText={(text) => {
              if (text.length <= 80) {
                onChange(text);
              }
            }}
            maxLength={80}
          />
          {error && <ErrorMessage message={error.message} />}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 200,
  },
});

export default TitleInput;
