
import React, { useContext } from 'react'
import {  StyleSheet, Text, View,ImageBackground,Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function AdminCompaniesDetails() {
  return (
    <View style={styles.container}>
         <ImageBackground 
        source={require('../../images/Background2.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><Text style={{fontSize:35,color:"white"}}>DETAILS</Text></View>
         
        
        </ImageBackground>
    </View>
  )
}

AdminCompaniesDetails.navigationOptions = () => {
  return {
      headerShown : false,
  }
}

const styles = StyleSheet.create({

  img: { 
      height: screenHeight, 
      width: screenWidth, 
      flex: 1,
      justifyContent: 'center',
      // justifyContent: 'center', 
      // alignItems: 'center', 
    }, 
  container : {
      flex: 1,
      justifyContent: "center",
  },
  heading : {

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom:30

  }
})