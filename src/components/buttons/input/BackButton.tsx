import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { vs, s } from "react-native-size-matters";

interface BackButtonProps {
  style?: object;
  iconColor?: string;
  iconSize?: number;
}

const BackButton: React.FC<BackButtonProps> = ({
  style,
  iconColor = "#1C1C1C",
  iconSize = 24,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.backbutton, style]}
      activeOpacity={0.8}
    >
      <Ionicons name="arrow-back" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backbutton: {
    marginBottom: vs(15),
    width: s(24),
    height: vs(24),
    // position: "absolute",
    // top: vs(74),
    // left: s(21),

  },
});
