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
  isPlaceholderLarge?: boolean;
  isMediumFont?: boolean;
  error?: string;
  variant?: "standard" | "filled" | "outlined" | "filledOrange";
  leftChild?: ReactNode;
  rightChild?: ReactNode;
  containerStyle?: ViewStyle;
}

function InputField(
  {
    label,
    variant = "filled",
    isPlaceholderLarge = false,
    isMediumFont = false,
    error = "",
    leftChild = null,
    rightChild = null,
    containerStyle,
    ...props
  }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) {
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
          style={
            isPlaceholderLarge
              ? styles.placeholderLargerStyle
              : isMediumFont
              ? styles.mediumFontStyle
              : styles.input
          }
          autoCapitalize="none" // 자동 대문자 변환 비활성화
          spellCheck={false} // 맞춤법 검사 비활성화
          autoCorrect={false} // 자동 수정 비활성화
          {...props}
        />
      </View>
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
  input: { flex: 1, fontSize: 12, padding: 0, fontFamily: fonts.regular },
  mediumFontStyle: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    fontFamily: fonts.medium,
  },
  placeholderLargerStyle: {
    flex: 1,
    fontSize: 20,
    padding: 0,
    fontFamily: fonts.semibold,
    lineHeight: 26,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  multiLine: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
});

export default forwardRef(InputField);
