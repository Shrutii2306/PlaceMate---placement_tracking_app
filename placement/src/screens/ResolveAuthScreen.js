import React,{useEffect,useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { StyleSheet,Text } from 'react-native';
import { View } from 'react-native';
export default function ResolveAuthScreen() {

    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[])

 return (
    <View style={styles.container} >
        <Text style={styles.heading}>Placement Tracker</Text>
    </View>
  )
}

ResolveAuthScreen.navigationOptions = () => {

    return {

        headerShown: false,
    }
}


const styles = StyleSheet.create({

    container : {

        flex: 1,
        justifyContent: 'center',
        marginBottom:10
    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    }
})