import { useRef, useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import InputField from "./ui/InputField";

function formatBaseYYYYMMDD(digits: string) {
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}/${digits.slice(4)}`;
  return `${digits.slice(0, 4)}/${digits.slice(4, 6)}/${digits.slice(6)}`;
}

function BirthdateInputField() {
  const [birthdate, setBirthdate] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const prevDigitsLenRef = useRef(0);

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

    // 다 입력 후 키보드 닫기
    if (currLen === 8) Keyboard.dismiss();
  };

  return (
    <InputField
      containerStyle={styles.inputField}
      label="Birthdate"
      variant="outlined"
      placeholder="YYYY/MM/DD"
      inputMode="numeric"
      maxLength={10}
      value={birthdate}
      onChangeText={handleChangeText}
      selection={selection}
      error={""} //TODO: 유효성 검사 후 에러 메시지 표시 (아직 디자인이 덜 돼써요)
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
