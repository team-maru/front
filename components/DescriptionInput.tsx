import { Controller, useFormContext } from 'react-hook-form';
import InputField from './ui/InputField';

interface DescriptionInputProps {

}

function DescriptionInput({}: DescriptionInputProps) {
 const { control } = useFormContext();
  return (
    <Controller
      name="description"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 5) {
            return "내용을 5자 이상 입력해주세요";
          }
        },
      }}
      render={({ field: {ref, onChange, value }, fieldState: { error } }) => (
        <InputField
        ref={ref}
          autoFocus // 화면이 로드될 때 자동으로 포커스
          placeholder="share your thoughts"
          returnKeyType="next" // 엔터키 모양을 '다음'으로 설정
          value={value}
          onChangeText={onChange}
          error={error?.message}
          multiline
        />
      )}
    />
  );
}


export default DescriptionInput;