import React, { useContext } from 'react'
import { Button } from 'react-native'
import { View , StyleSheet,Text} from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext'
export default function CompanyDetails({navigation}) {

    const _id = navigation.getParam('_id');
    const {getCompanyDetail, state} = useContext(CompanyContext);

    const company = state.find( comp => comp._id ===_id );

  return (
    <View style={styles.container}>
        
        <Text>{company.companyDetails.title}</Text>
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