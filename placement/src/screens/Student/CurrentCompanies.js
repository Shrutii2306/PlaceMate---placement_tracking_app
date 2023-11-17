import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text,TouchableOpacity,FlatList  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
export default function CurrentCompanies({navigation}) {

    const {state,getJob} = useContext(CompanyContext);
    const account_type = navigation.getParam('account_type');
    const userId = navigation.getParam('userId');
    console.log( "state",state);
    console.log(userId);
    
  return (
    <>
        <NavigationEvents onWillFocus={getJob}/>
        <Text style={{fontSize:48}}>Companies recruiting{account_type}</Text>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('CompanyDetails',{_id: item._id})}>
                    <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle>{item.companyDetails.company}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
                </TouchableOpacity>
            );
            }}
        />
    </>
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
