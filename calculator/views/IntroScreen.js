import React from 'react'
import { View } from 'react-native'
import logo from '../assets/cal.png'
const IntroScreen = () => {
  return (
   <View  style ={styles.container}>
        <View  style ={styles.inner}>
            <Image source={logo} style={styles.inner}/>


        </View>
   </View>
  )
}

export default IntroScreen