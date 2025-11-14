import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import InputField from "./ui/InputField";

interface BirthdateInputFieldProps {
  onValidationChange?: (isValid: boolean) => void;
}

function formatBaseYYYYMMDD(digits: string) {
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}/${digits.slice(4)}`;
  return `${digits.slice(0, 4)}/${digits.slice(4, 6)}/${digits.slice(6)}`;
}

function validateBirthdate(digits: string): string {
  if (digits.length === 0) {
    return "";
  }

  if (digits.length < 8) {
    return "Please enter your full birthdate (YYYY/MM/DD).";
  }

  const year = parseInt(digits.slice(0, 4));
  const month = parseInt(digits.slice(4, 6));
  const day = parseInt(digits.slice(6, 8));

  // 실제 존재하는 날짜인지 체크
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day ||
    year < 1900 ||
    year > new Date().getFullYear()
  ) {
    return "This date does not exist.";
  }

  // 만 18세 이상인지 체크
  const today = new Date();
  const age = today.getFullYear() - year;
  const monthDiff = today.getMonth() - (month - 1);
  const dayDiff = today.getDate() - day;

  // 만 18세 이상인지 체크하기 위해 나이 계산
  const exactAge =
    monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

  if (exactAge < 18) {
    return "You must be at least 18 years old to register.";
  }

  return ""; // 유효성 검사 통과
}

function BirthdateInputField({ onValidationChange }: BirthdateInputFieldProps) {
  const [birthdate, setBirthdate] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [error, setError] = useState("");
  const prevDigitsLenRef = useRef(0);

  useEffect(() => {
    const digits = birthdate.replace(/\D/g, "");
    const isValid = digits.length === 8 && !error;
    onValidationChange?.(isValid);
  }, [birthdate, error, onValidationChange]);

  const handleChangeText = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, 8);

    // 입력 상태인지 판별 (삽입일 때만 슬래시 자동 추가되게 하고, 삭제일 때는 추가 안 되게 하기 위해서 필요)
    const prevLen = prevDigitsLenRef.current;
    const currLen = digits.length;
    const isInsert = currLen > prevLen;

    let formatted = formatBaseYYYYMMDD(digits);

    // 삽입일 때 연, 월 입력 후 슬래시 자동 추가
    if (isInsert && (currLen === 4 || currLen === 6)) {
      if (currLen === 4) {
        formatted = `${digits}/`;
      } else if (currLen === 6) {
        formatted = `${digits.slice(0, 4)}/${digits.slice(4, 6)}/`;
      }
    }

    setBirthdate(formatted);

    const pos = formatted.length;
    if (selection.start !== pos || selection.end !== pos) {
      setSelection({ start: pos, end: pos });
    }

    prevDigitsLenRef.current = currLen;

    // 입력 중에는 에러 메시지 초기화
    if (error) {
      setError("");
    }

    // 8자리 입력 완료 시 자동으로 키보드 내림 & 유효성 검사
    if (currLen === 8) {
      const validationError = validateBirthdate(digits);
      setError(validationError);

      if (!validationError) {
        Keyboard.dismiss();
      }
    }
  };

  const runValidation = () => {
    const digits = birthdate.replace(/\D/g, "");
    const validationError = validateBirthdate(digits);
    setError(validationError);
  };

  const handleBlur = () => {
    // 키보드가 내려갈 때 유효성 검사 (8자리 미만도 체크)
    runValidation();
  };

  const handleSubmitEditing = () => {
    // Done 버튼 눌렀을 때 유효성 검사 (8자리 미만도 체크)
    runValidation();
  };

  return (
    <InputField
      containerStyle={styles.inputField}
      label="Birthdate"
      variant="outlined"
      placeholder="YYYY/MM/DD"
      inputMode="numeric"
      maxLength={10}
      returnKeyType="done"
      value={birthdate}
      onChangeText={handleChangeText}
      onBlur={handleBlur}
      onSubmitEditing={handleSubmitEditing}
      selection={selection}
      error={error}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: 355,
    height: 40,
  },
});

export default BirthdateInputField;
