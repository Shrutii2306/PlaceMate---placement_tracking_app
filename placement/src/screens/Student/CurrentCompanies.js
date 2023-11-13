import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text,TouchableOpacity  } from 'react-native'
 
export default function CurrentCompanies({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Infosys</Text>
        <Text>$$$$$$$</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CompanyDetails')}>
        <Text>Details</Text>
        </TouchableOpacity>
        
    </View>
  )
}

CurrentCompanies.navigationOptions = () => {

    return {
        headerShown : false,
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:50
    }
    

})