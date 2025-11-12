import { Controller, useFormContext } from "react-hook-form";
import InputField from "./ui/InputField";

interface TitleInputProps {}

function TitleInput({}: TitleInputProps) {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length <= 0) {
            return "제목을 입력해주세요";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus // 화면이 로드될 때 자동으로 포커스
          placeholder="Write a Title"
          returnKeyType="next" // 엔터키 모양을 '다음'으로 설정
          submitBehavior="submit" // 엔터키를 누르면 폼이 제출되도록 설정
          onSubmitEditing={() => setFocus("description")} // '다음'을 누르면 내용 입력란으로 포커스 이동
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
}

export default TitleInput;
