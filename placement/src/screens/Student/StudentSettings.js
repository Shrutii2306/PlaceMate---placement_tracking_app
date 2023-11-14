import React, { useContext } from 'react'
import { View } from 'react-native'
import { Text, StyleSheet,  Button  } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext';
export default function StudentSettings({navigation}) {

  const {signout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
        <Text>Logout</Text>
            <Button title='Logout' onPress={signout} />
    </View>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        marginTop: 50
    }
})