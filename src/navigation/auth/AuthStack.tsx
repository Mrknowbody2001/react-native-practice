import Signin from "../../screens/auth/Signin";
import ResetPassword from "../../screens/auth/ResetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";r

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
   
  );
};

export default AuthStack;
