import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default function TrackApplication() {
  return (
    <View>
        
            <Text>Infosys</Text>
            <Text>$$$$$$$</Text>
            <Text style={styles.appstatus}>Application Status: Applied</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    appstatus : {
        color:'green'
    }
})