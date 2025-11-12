import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import InputField from "./ui/InputField";

// 임시 중복 닉네임 목록 (실제로는 서버 API 호출로 대체)
const TAKEN_NICKNAMES = ["maru", "roy"];

interface NicknameInputFieldProps {
  onValidationChange?: (isValid: boolean) => void;
}

function validateNickname(nickname: string): string {
  if (!nickname.trim()) {
    return "";
  }
  //3자 미만 에러 메세지 반환
  if (nickname.length < 3) {
    return "Nickname must be at least 3 characters long.";
  }
  //15자 초과 에러 메세지 반환 (최대 입력 길이 15자로 제한해놔서 사실상 필요 없지만 안전장치 차원에서 남겨둠)
  if (nickname.length > 15) {
    return "Nickname must be at most 15 characters long.";
  }

  // 허용된 문자 체크 (영문, 숫자, '.', '_', '-')
  const allowedPattern = /^[a-zA-Z0-9._-]+$/;
  if (!allowedPattern.test(nickname)) {
    return "Only letters, numbers, '.', '_', and '-' are allowed.";
  }

  return ""; // 기본 유효성 검사 통과
}

function checkNicknameAvailability(
  nickname: string
): "available" | "taken" | "invalid" {
  const validationError = validateNickname(nickname);

  // 기본 유효성 검사 실패
  if (validationError) {
    return "invalid";
  }

  // 중복 검사 (실제로는 서버 API 호출)
  if (TAKEN_NICKNAMES.includes(nickname.toLowerCase())) {
    return "taken";
  }

  // 기본 유효성 검사, 중복 검사 다 통과하면 available 반환
  return "available";
}

function NicknameInputField({ onValidationChange }: NicknameInputFieldProps) {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | "">("");

  useEffect(() => {
    const isValid = messageType === "success" && nickname.trim() !== "";
    onValidationChange?.(isValid);
  }, [messageType, nickname, onValidationChange]);

  const handleValidation = () => {
    if (!nickname.trim()) {
      setMessage("");
      setMessageType("");
      return;
    }

    const validationError = validateNickname(nickname);

    if (validationError) {
      setMessage(validationError);
      setMessageType("error");
      return;
    }

    const availability = checkNicknameAvailability(nickname);

    switch (availability) {
      case "available":
        setMessage("Username available!");
        setMessageType("success");
        break;
      case "taken":
        setMessage("That name's already in use.");
        setMessageType("error");
        break;
      default:
        setMessage("");
        setMessageType("");
    }
  };

  const handleBlur = () => {
    handleValidation();
  };

  const handleSubmitEditing = () => {
    handleValidation();
  };

  const handleChangeText = (text: string) => {
    setNickname(text);
    // 입력 중에는 메시지 초기화
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  return (
    <InputField
      containerStyle={styles.inputField}
      autoFocus
      label="Nickname"
      variant="outlined"
      inputMode="text"
      returnKeyType="done"
      maxLength={15}
      value={nickname}
      onChangeText={handleChangeText}
      onBlur={handleBlur}
      onSubmitEditing={handleSubmitEditing}
      error={messageType === "error" ? message : ""}
      success={messageType === "success" ? message : ""}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: 355,
    height: 40,
  },
});

export default NicknameInputField;
