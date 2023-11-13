import React from 'react'
import { View } from 'react-native'
import { Text, StyleSheet,  Button  } from 'react-native'

export default function StudentSettings({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Logout</Text>
            <Button title='Logout' onPress={() => navigation.navigate('LoginHome')} />
    </View>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        marginTop: 50
    }
})