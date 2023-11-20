import React,{useEffect,useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { StyleSheet,Text , ImageBackground, Dimensions, Image} from 'react-native';
import { View } from 'react-native';
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function ResolveAuthScreen() {

    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[])

 return (
    <View style={styles.container} >
         <ImageBackground 
        source={require('../images/Background1.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        
        <View style={styles.heading}><Image source={require('../images/mortarboard-96.png')}/>
        <Text h2 style={{color:'white'}}>PLACEMEATHER</Text>
        </View>
        </ImageBackground>
    </View>
  )
}

ResolveAuthScreen.navigationOptions = () => {

    return {

        headerShown: false,
    }
}


const styles = StyleSheet.create({

    img: { 
        height: screenHeight+50, 
        width: screenWidth, 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
      }, 

    container : {

        flex: 1,
        justifyContent: 'center',
        
    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flex:1

    }
})