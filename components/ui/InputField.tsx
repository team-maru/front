import { colors } from "@/constants";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  variant?: "filled" | "outlined";
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

function InputField(
  {
    label,
    variant = "filled",
    error = "",
    leftChild = null,
    rightChild = null,
    ...props
  }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
      }}
    >
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          props.multiline && styles.multiLine,
        ]}
      >
        {leftChild}
        <TextInput
          ref={ref}
          placeholderTextColor={colors.GRAY_600}
          style={styles.input}
          autoCapitalize="none" // 자동 대문자 변환 비활성화
          spellCheck={false} // 맞춤법 검사 비활성화
          autoCorrect={false} // 자동 수정 비활성화
          {...props}
        />
        {rightChild}
      </View>
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
    fontSize: 12,
    color: colors.GRAY_200,
    marginBottom: 5,
  },
  filled: {
    backgroundColor: colors.GRAY_300,
    borderRadius: 24,
    paddingHorizontal: 20,
    gap: 8,
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
  input: { flex: 1, fontSize: 14, padding: 0, fontWeight: "500" },
  multiLine: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
});

export default forwardRef(InputField);
