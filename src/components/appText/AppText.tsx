import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

interface AppTextProps {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const AppText: React.FC<AppTextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "DM Sans",
  },
});
