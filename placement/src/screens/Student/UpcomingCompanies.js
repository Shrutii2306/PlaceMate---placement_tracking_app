import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
export default function UpcomingCompanies() {
  return (
    <View style={styles.container}>
        <Text>Infosys</Text>
        <Text>$$$$$$$</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        marginTop: 10
    }
})
