import React, { useContext } from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
export default function AdminHome({navigation}) {

    //const {state} = useContext(AuthContext);
    console.log(state);
  return (
    <View style={styles.container}>
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
    </View>
  )
}

AdminHome.navigationOptions = () => {
    return {
        headerShown : false,
    }
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        justifyContent: "center",
    }
})