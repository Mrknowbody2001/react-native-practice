import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AppSaveView from "./src/views/AppSaveView";
import AppButton from "./src/components/buttons/input/AppButton";
import Signin from "./src/screens/auth/Signin";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/auth/AuthStack";
import ResetPassword from "./src/screens/auth/ResetPassword";
import "react-native-gesture-handler";
import OTPVerfication from "./src/screens/auth/OTPVerfication";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadfonts = async () => {
    try {
      await Font.loadAsync({
        "DM Sans": require("./src/assets/fonts/DMSans-VariableFont_opsz,wght.ttf"),
      });
      setFontsLoaded(true);
    } catch (e) {
      console.error("Font loading failed:", e);
    }
  };

  useEffect(() => {
    loadfonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
   <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppSaveView style={styles.container}>
          {/* <AuthStack /> */}
          <OTPVerfication />
        </AppSaveView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
