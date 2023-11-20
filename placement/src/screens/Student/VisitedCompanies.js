import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text,TouchableOpacity,FlatList  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
export default function VisitedCompanies({navigation}) {

  const {state,getVisitedJob} = useContext(CompanyContext);
  const account_type = navigation.getParam('account_type');
  const userId = navigation.getParam('userId');
  console.log( "state",state);
  console.log(userId);
  
return (
  <>
      <NavigationEvents onWillFocus={getVisitedJob}/>
      <Text style={{fontSize:48}}>Companies Visited</Text>
      <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
              return (
              <TouchableOpacity >
                  <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle>{item.companyDetails.company}                  Selected: {item.status.selected}</ListItem.Subtitle>
                <ListItem.Subtitle>CTC Offered : {item.companyDetails.salary}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
              </TouchableOpacity>
          );
          }}
      />
  </>
)
}

VisitedCompanies.navigationOptions = () => {

  return {
      headerShown : false,
  }
}


const styles = StyleSheet.create({

    container : {
        flex: 1,
        marginTop: 10
    }
})