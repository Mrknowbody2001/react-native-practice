import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";

interface AppTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  style: TextStyle;
}

const AppTextInput: FC<AppTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  keyboardType,
}) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
   
  },
  input: {
    height: vs(39),
    width: s(278),
    borderRadius: vs(5),
    borderWidth: 1,
    borderColor: "#979797",
    marginBottom: vs(10),
   
    paddingHorizontal: s(15),
    backgroundColor: "#fff",
    fontSize: s(16),
  },
  label: {
    fontSize: s(14),
    color: "#333",
    marginBottom: vs(5),
    fontWeight: "500",
    fontFamily: "DM Sans",
    alignSelf: "flex-start",

  },
});
