import React, { useContext } from 'react'
import { StyleSheet, View,ImageBackground,Image, Dimensions} from 'react-native'
import { Text,Button } from 'react-native-elements';
import { Context as AuthContext } from '../../context/AuthContext';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function StudentSettings({navigation}) {

  const {signout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
         <ImageBackground 
        source={require('../../images/Background2.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><Text h3 style={{color:"white"}}>SETTINGS</Text></View>
            <Button title='LOGOUT' onPress={signout}
            
             
               
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              
              marginHorizontal: 70,
              marginVertical: 240,
            }}
            titleStyle={{ 
              fontWeight: 'bold',
              color:'black'
           }}
            />
          </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  img: { 
    height: screenHeight, 
    width: screenWidth, 
    flex: 1,
    
    // justifyContent: 'center', 
    // alignItems: 'center', 
  }, 
container : {
    flex: 1,
},
heading : {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:80
}
})

StudentSettings.navigationOptions =() => {

  return {
    headerShown : false
  }
}