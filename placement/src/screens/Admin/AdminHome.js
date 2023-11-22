import React, { useContext } from 'react'
import {  StyleSheet, Text, View,ImageBackground,Image, Dimensions } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext';
import { Button } from 'react-native-elements'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function AdminHome({navigation}) {

    const {state} = useContext(AuthContext);
    console.log(state);
  return (
    <View style={styles.container}>
         <ImageBackground 
        source={require('../../images/Background2.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><Text style={{fontSize:35,color:"white"}}>Hello {state.name}</Text></View>
         
        <Button 
            title='Track applications'
            buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 15,
                height:60
              }}
              containerStyle={{
                
                marginHorizontal: 40,
                marginVertical: 10,
              }}
              titleStyle={{ 
                fontWeight: 'bold',
                color:'black',
                fontSize:19
             }}
            onPress = { () => navigation.navigate('AdminTrackApplications',{userId:state.userId})}
        />
        <Button 
            title='Companies Recruiting'
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 15,
              height:60
            }}
            containerStyle={{
              
              marginHorizontal: 40,
              marginVertical: 10,
            }}
            titleStyle={{ 
              fontWeight: 'bold',
              color:'black',
              fontSize:19
           }}
            onPress = { () => navigation.navigate('AdminCurrentCompanies',{account_type : state.account_type, userId : state.userId})}
        />
        <Button 
            title='Upcoming Companies'
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 15,
              height:60
            }}
            containerStyle={{
              
              marginHorizontal: 40,
              marginVertical: 10,
            }}
            titleStyle={{ 
              fontWeight: 'bold',
              color:'black',
              fontSize:19
           }}
            
            onPress = { () => navigation.navigate('AdminUpcomingCompanies')}
        />

        <Button 
            title='Companies visited'
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 15,
              height:60
            }}
            containerStyle={{
              
              marginHorizontal: 40,
              marginVertical: 10,
            }}
            titleStyle={{ 
              fontWeight: 'bold',
              color:'black',
              fontSize:19
           }}
            
            onPress = { () => navigation.navigate('AdminVisitedCompanies')}
        />
        </ImageBackground>
    </View>
  )
}

AdminHome.navigationOptions = () => {
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