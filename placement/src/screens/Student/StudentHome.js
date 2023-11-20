import React, { useContext } from 'react'
import {  StyleSheet, Text, View,ImageBackground,Image, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
//import { RiseOutlined } from '@ant-design/icons'
import { Context as AuthContext } from '../../context/AuthContext'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function StudentHome({navigation}) {

    const {state} = useContext(AuthContext);
    console.log(state);
  return (
    <View style={styles.container}>
        <ImageBackground 
        source={require('../../images/Background2.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><Text style={{fontSize:35,color:"white"}}>Hello {state.name}!</Text></View>
         
        <Button 
            title='Track your applications'
            
               
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
            onPress = { () => navigation.navigate('TrackApplication',{userId:state.userId})}
        />
        <Button 
            title='Companies Recruiting'
            
               
            buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 15,
                height:62              }}
              containerStyle={{
                
                marginHorizontal: 30,
                marginVertical: 10,
              }}
              titleStyle={{ 
                fontWeight: 'bold',
                color:'black',
                fontSize:19
             }}
            onPress = { () => navigation.navigate('CurrentCompanies',{account_type : state.account_type, userId : state.userId})}
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
            
            onPress = { () => navigation.navigate('UpcomingCompanies')}
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
            onPress = { () => navigation.navigate('VisitedCompanies')}
        />
        </ImageBackground>
    </View>
  )
}

StudentHome.navigationOptions = () => {
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