import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

interface AppButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: object;
  icon?: React.ReactNode;
  textStyle?: object;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  style,
  icon,
  textStyle,
  disabled = false,
  
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      
      style={[
        styles.button,
        { backgroundColor: disabled ? "#D9D9D9" : "#1F738A" },
        style,
        textStyle
      ]}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.textTitle, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: s(278),
    height: vs(39),
    borderRadius: s(5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F738A",
    marginBottom: vs(20),
  },
  content:{
    flexDirection:"row",
    alignItems:"center",
    gap:s(8),
  },
   icon: {
    marginRight: s(8),
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: "DM Sans",
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
