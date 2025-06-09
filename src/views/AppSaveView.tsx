import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, ViewStyle} from 'react-native'
import React, { Children ,FC,ReactNode} from 'react'
import App from '../../App'
import { IS_Andriod } from '../constants/Constant'

interface AppSaveViewProps {
    children: React.ReactNode,
    style: ViewStyle
}
const AppSaveView :FC<AppSaveViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default AppSaveView

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:"#FFFFFF",
        paddingTop:IS_Andriod? StatusBar.currentHeight || 0:0
    },
    container:{
        flex:1,


    }
})