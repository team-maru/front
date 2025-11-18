import { colors } from "@/constants";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import InputField from "./ui/InputField";

interface TitleInputProps {}

/**
 * TitleInput - 게시글 제목 입력 컴포넌트
 *
 * react-hook-form Controller로 "title" 필드 제어
 * - Validation: 최대 80자
 * - autoFocus: 화면 로드 시 자동 포커스
 * - returnKeyType: "next" - 엔터키로 다음 필드(description)로 이동
 */
function TitleInput({}: TitleInputProps) {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      render={({ field: { ref, onChange, value } }) => (
        <View style={styles.container}>
          <InputField
            ref={ref}
            autoFocus // 화면 로드 시 자동 포커스
            variant="standard"
            fontSize="large"
            fontWeight="semibold"
            placeholder="Write a Title"
            placeholderTextColor={colors.BLACK}
            returnKeyType="next" // 엔터키 모양: "다음"
            submitBehavior="submit"
            onSubmitEditing={() => setFocus("description")} // 엔터 시 description 필드로 포커스 이동
            value={value}
            onChangeText={(text) => {
              // 80자 이하일 때만 입력 허용
              if (text.length <= 80) {
                onChange(text);
              }
            }}
            maxLength={80} // 추가 안전장치
          />
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: { zIndex: 200 },
});
export default TitleInput;
