import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native'
export default function VisitedCompanies() {
  return (
    <View style={styles.container}>

        <Text>Company : ABC</Text>
        <Text>CTC Offered : $$$$$</Text>
        <Text>Number of Students Placed : 20</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        marginTop: 10
    }
})