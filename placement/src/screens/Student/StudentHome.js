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
         <Text>Hello {state.name}</Text>
         
        <Button 
            title='Track your applications'
            buttonStyle={{
                borderColor: 'black',
            }}
            type="outline"
            titleStyle={{ color: 'black' }}
            containerStyle={{
                marginVertical: 10,
                marginHorizontal:20
            }}
            
            onPress = { () => navigation.navigate('TrackApplication',{userId:state.userId})}
        />
        <Button 
            title='Companies Recruiting'
            buttonStyle={{
                borderColor: 'black',
            }}
            type="outline"
            titleStyle={{ color: 'black' }}
            containerStyle={{
                marginVertical: 10,
                marginHorizontal:20
            }}
            
            onPress = { () => navigation.navigate('CurrentCompanies',{account_type : state.account_type, userId : state.userId})}
        />
        <Button 
            title='Upcoming Companies'
            buttonStyle={{
                borderColor: 'black',
            }}
            type="outline"
            titleStyle={{ color: 'black' }}
            containerStyle={{
                marginVertical: 10,
                marginHorizontal:20
            }}
            
            onPress = { () => navigation.navigate('UpcomingCompanies')}
        />

        <Button 
            title='Companies visited'
            buttonStyle={{
                borderColor: 'black',
            }}
            type="outline"
            titleStyle={{ color: 'black' }}
            containerStyle={{
                marginVertical: 10,
                marginHorizontal:20
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
    }
})