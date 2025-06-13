import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/SharedStyles";
import AppTextInput from "../../components/input/AppTextInput";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/appText/AppText";
import AppButton from "../../components/buttons/input/AppButton";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../components/buttons/input/BackButton";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation<any>();

  const onPress = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <BackButton  style={styles.backButton} />

          <AppSaveView style={styles.container}>
            <Text style={styles.title}>Signin</Text>

            <AppText style={styles.paragraph}>
              Welcome back! Log in to access quizzes, track progress, and stay
              ahead in your A-Level studies.
            </AppText>

            <AppSaveView style={styles.formContainer}>
              <AppTextInput
                label="user name"
                value={userName}
                onChangeText={(text) => setUserName(text)}
                placeholder="Enter your user name"
                style={styles.input}
              />
              <AppTextInput
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your Password"
                style={styles.input}
              />

<TouchableOpacity
  onPress={() => navigation.navigate('ResetPassword')}
  style={styles.forgotPassword}
>
  <AppText style={styles.forgotPasswordText}>
    Forgot password ?
  </AppText>
</TouchableOpacity>

              <AppButton title="Signin" onPress={() => {}} />

              <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or Signin with</Text>
                <View style={styles.line} />
              </View>

              <AppButton
                icon={<FontAwesome5 name="facebook" size={24} color="white" />}
                title="Signin with Facebook"
                onPress={() => {}}
                style={{ backgroundColor: "#1877F2", marginBottom: vs(20) }}
                textStyle={{ fontSize: 13 }}
              />

              <AppButton
                icon={
                  <Image
                    source={require("../../assets/images/google.png")}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                }
                title="Signin with Google"
                onPress={() => {}}
                style={{
                  backgroundColor: "#FFFFFF",
                  marginBottom: vs(20),
                  borderColor: "#C3C3C3",
                  borderWidth: 2,
                }}
                textStyle={{ fontSize: 13, color: "#C3C3C3" }}
              />

              <View style={styles.bottomContainer}>
                <AppText style={styles.bottomText}>
                  Don't have an account ?
                </AppText>
                <TouchableOpacity>
                  <AppText style={styles.signUpText}>Sign up here</AppText>
                </TouchableOpacity>
              </View>
            </AppSaveView>
          </AppSaveView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: vs(40),
    paddingHorizontal: sharedPaddingHorizontal,
  },

  container: {
    paddingHorizontal: sharedPaddingHorizontal,

    // height: vs(852),
    //for testing
    alignItems: "center",
    justifyContent: "center", // testing
  },
  backButton: {},
  title: {
    fontSize: 25,
    fontFamily: "DM Sans",
    fontWeight: "500",
    color: "#1C1C1C",
    marginBottom: 15,
  },
  // paraContainer: {
  //   width: s(327),
  //   height: vs(72),
  //   marginHorizontal: 40,
  // },

  paragraph: {
    fontSize: 15,
    fontFamily: "DM Sans",
    fontWeight: "400",
    color: "#858383",
    lineHeight: 19,
    letterSpacing: 0.3,
    marginBottom: vs(20),
    // marginHorizontal: s(40),
    textAlign: "center",
  },
  input: {
    alignSelf: "center",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: vs(10),
  },
  forgotPasswordText: {
    color: "#087E8B",
    fontSize: 13,
    fontFamily: "DM Sans",
    fontWeight: 400,
  },
  formContainer: {
    alignItems: "center",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(20),
  },
  line: {
    flex: 1,
    height: 1,

    backgroundColor: "#c3c3c3",
  },
  orText: {
    marginHorizontal: 10,
    color: "#c3c3c3",
    fontSize: 13,
    fontFamily: "DM Sans",
    fontWeight: "500",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(5),
  },
  bottomText: {
    fontFamily: "DM Sans",
    fontWeight: "500",
    fontSize: 13,
    color: "#1E1E1E",
  },
  signUpText: {
    fontWeight: "500",
    fontSize: 13,
    color: "#1F738A",
  },
});
