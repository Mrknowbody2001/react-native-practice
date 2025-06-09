import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppSaveView from './src/views/AppSaveView';
import AppButton from './src/components/buttons/AppButton';
import Signin from './src/screens/auth/Signin';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadfonts = async ()=>{
    await Font.loadAsync({
      'DM Sans': require('./src/assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
    });
    setFontsLoaded(true);
  }
  useEffect(()=>{
    loadfonts();
  },[]);
  return (
    <AppSaveView style={styles.container}>
      <Signin />
    </AppSaveView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
