import React from 'react'
import { View,StyleSheet } from 'react-native'

export default function Spacer({children}) {
  return (
    <View style={styles.spacer}>{children}</View>
  )
}

const styles = StyleSheet.create({

    spacer :{
        marginHorizontal:13,
        marginVertical:15,
    }
});

