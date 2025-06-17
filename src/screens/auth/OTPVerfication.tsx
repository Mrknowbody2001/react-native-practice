import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import BackButton from '../../components/buttons/input/BackButton'
import AppSaveView from '../../views/AppSaveView'
import AppText from '../../components/appText/AppText'
import AppButton from '../../components/buttons/input/AppButton'
import AppTextInput from '../../components/input/AppTextInput'
import { sharedPaddingHorizontal } from '../../styles/SharedStyles'
import { vs,s } from 'react-native-size-matters'


const OTPVerfication = () => {

    //
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    //

    const handleOtpCode = () => {
  const otp = otp1 + otp2 + otp3 + otp4;
  console.log('Entered OTP:', otp);
  // You can now send this otp to your backend for verification
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
            <Text style={styles.title}>OTP Verification</Text>

            <AppText style={styles.paragraph}>
                We've sent a 4-digit verification code to your phone. Enter the code below to continue
            </AppText>

            <Image
              source={require("../../assets/images/otpVeryfication.png")}
              style={styles.image}
              resizeMode="contain"/>
            </AppSaveView>
            <View style={styles.OtpContainer}>
              <AppTextInput
                label="Enter OTP"
                placeholder="1"
                // secureTextEntry
                style={styles.input}
                value={otp1}
                onChangeText={setOtp1}
              />
               <AppTextInput
               
                label="Enter OTP"
                placeholder="2"
                // secureTextEntry
                style={styles.input}
                value={otp2}
                onChangeText={setOtp2}
              />
               <AppTextInput
                label="Enter OTP"
                placeholder="3"
                // secureTextEntry
                style={styles.input}
                value={otp3}
                onChangeText={setOtp3}
              />
               <AppTextInput
                label="Enter OTP"
                placeholder="4"
                // secureTextEntry
                style={styles.input}
                value={otp4}
                onChangeText={setOtp4}
              />
            </View>
            <AppButton  title="Verify code" onPress={handleOtpCode} />
         
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  )
}

export default OTPVerfication

const styles = StyleSheet.create({
        scrollContent:{
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
            marginBottom: vs(15),
            
        },
        image: {
            width: s(318),
            height: vs(318),
            marginBottom: vs(15),
        },
        OtpContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: s(10),
        },
        input: {
            height: vs(60),
            width: s(60),
            borderRadius: vs(5),
            borderWidth: 1,
            borderColor: "#DEDEDE",
            marginBottom: vs(10),
            paddingHorizontal: s(16),
            backgroundColor: "#F4F4F4",
            fontSize: s(16),

        },
        
})