import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { vs } from "react-native-size-matters";
import AppTextInput from "../../components/input/AppTextInput";
import AppButton from "../../components/buttons/input/AppButton";
import AppSaveView from "../../views/AppSaveView";
import BackButton from "../../components/buttons/input/BackButton";
import AppText from "../../components/appText/AppText";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import { useNavigation } from "@react-navigation/native";



const ResetPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation<any>();

  const handleSendCode = () => {
    // Validate phone and navigate to OTP screen
   
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <BackButton style={styles.backButton} />

          <AppSaveView style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>

            <AppText style={styles.paragraph}>
              No worries! Enter your registered phone number and we will send
              you a verification code to reset your password
            </AppText>

            <Image
              source={require("../../assets/images/resetPassword.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <AppTextInput
              label="Phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              style={styles.input}
              keyboardType="phone-pad"
            />

            <AppButton title="Send code" onPress={handleSendCode} />

            <View style={styles.bottomContainer}>
              <AppText style={styles.bottomText}>Remember password?</AppText>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <AppText style={styles.signinText}>sign in here</AppText>
              </TouchableOpacity>
            </View>
          </AppSaveView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: vs(40),
    paddingHorizontal: sharedPaddingHorizontal,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  backButton: {},
  title: {
    fontSize: 25,
    fontFamily: "DM Sans",
    fontWeight: "500",
    color: "#1C1C1C",
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: "DM Sans",
    fontWeight: "400",
    color: "#858383",
    lineHeight: 19,
    letterSpacing: 0.3,
    marginBottom: vs(20),
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: vs(200),
    marginBottom: vs(20),
  },
  input: {
    alignSelf: "center",
    marginBottom: vs(15),
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: vs(20),
  },
  bottomText: {
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: 13,
    color: "#1E1E1E",
  },
  signinText: {
    fontWeight: "500",
    fontSize: 13,
    color: "#1F738A",
  },
});
