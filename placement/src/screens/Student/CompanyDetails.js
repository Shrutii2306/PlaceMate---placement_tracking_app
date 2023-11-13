import React from 'react'
import { Button } from 'react-native'
import { View , StyleSheet,Text} from 'react-native'

export default function CompanyDetails({navigation}) {
  return (
    <View style={styles.container}>
        
        <Text style={styles.headtitle} >INFOSYS</Text>
        <Text>Location : Pune</Text>
        <Text>Package : $$$$$</Text>
        <Text>Last date to apply : 10/10/10</Text>
        <Text>Eligibilty Criteria : ........</Text>
        <Text style={styles.eligible}>ELIGIBLE/NOT ELIGIBLE</Text>
        <Button title='Apply' />
    </View>
  )
}

CompanyDetails.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'flex-start',
        marginTop:50
    },
    headtitle:{
        fontSize:15,
        textAlign: 'center'
    },
    eligible:{
        color: 'green'

    }
})