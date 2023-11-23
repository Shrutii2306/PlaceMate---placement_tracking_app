import React,{useEffect,useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { StyleSheet , ImageBackground, Dimensions, Image} from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function ResolveAuthScreen({navigation}) {

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
            <View style={styles.subHeading}>
                <Image
                    source={require('../images/mortarboard.png') }
                />
            </View>
            <View style={styles.heading}>
            <Text h1 style={{color:'#D48F08'}}>PLACEMATE</Text>
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
        // justifyContent: 'center', 
        // alignItems: 'center', 
      }, 
    container : {

        flex: 1,
        justifyContent: 'center',
        marginBottom:10,
        color: 'white'
    },
    subHeading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30

    },
})