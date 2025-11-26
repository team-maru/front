import { colors } from "@/constants";
import { fonts } from "@/constants/fonts";
import { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import CustomText from "./CustomText";

interface InputFieldProps extends TextInputProps {
  label?: string;
  size?: "small" | "medium" | "large";
  fontSize?: "small" | "medium" | "large";
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  error?: string;
  success?: string;
  variant?: "standard" | "filled" | "outlined" | "filledOrange";
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  containerStyle?: ViewStyle;
}

function InputField(
  {
    label,
    variant = "filled",
    size = "small",
    fontSize = "small",
    fontWeight = "regular",
    error = "",
    success = "",
    leftChild = null,
    rightChild = null,
    containerStyle,
    ...props
  }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) {
  const getFontFamily = () => {
    switch (fontWeight) {
      case "medium":
        return fonts.medium;
      case "semibold":
        return fonts.semibold;
      case "bold":
        return fonts.bold;
      default:
        return fonts.regular;
    }
  };

  return (
    <View>
      {label && (
        <CustomText fontWeight="regular" style={styles.label}>
          {label}
        </CustomText>
      )}
      <View
        style={[
          styles.container,
          styles[variant],
          props.multiline && styles.multiLine,
          containerStyle,
        ]}>
        {leftChild}
        <TextInput
          ref={ref}
          placeholderTextColor={colors.GRAY_600}
          style={[
            styles.baseInput,
            styles[`fontSize_${fontSize}`],
            { fontFamily: getFontFamily() },
          ]}
          autoCapitalize="none" // 자동 대문자 변환 비활성화
          spellCheck={false} // 맞춤법 검사 비활성화
          autoCorrect={false} // 자동 수정 비활성화
          {...props}
        />
      </View>
      {error ? (
        <>
          <CustomText style={styles.errorText}>
            {error}
          </CustomText>
        </>
      ) : null}
      {success ? (
        <CustomText style={styles.successText}>{success}</CustomText>
      ) : null}
      {rightChild}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 10,
    color: colors.GRAY_600,
    marginBottom: 5,
  },
  standard: {
    flex: 1,
    height: 46,
    paddingHorizontal: 4,
  },
  filled: {
    backgroundColor: colors.GRAY_300,
    borderRadius: 24,
    paddingHorizontal: 20,
    gap: 8,
  },
  filledOrange: {
    backgroundColor: colors.ORANGE_700,
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.GRAY_500,
    paddingHorizontal: 14,
    gap: 4,
    width: 299,
    height: 35,
    borderRadius: 12,
  },
  baseInput: {
    flex: 1,
    padding: 0,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  fontSize_small: {
    fontSize: 12,
  },
  fontSize_medium: {
    fontSize: 16,
    lineHeight: 22,
  },
  fontSize_large: {
    fontSize: 20,
    lineHeight: 28,
  },
  multiLine: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
  errorText: {
    fontSize: 10,
    color: colors.RED,
    marginTop: 4,
  },
  successText: {
    fontSize: 10,
    color: colors.GREEN,
    marginTop: 4,
  },
});

export default forwardRef(InputField);
