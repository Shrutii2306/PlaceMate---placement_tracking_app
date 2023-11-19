import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Text,TouchableOpacity,FlatList  } from 'react-native'
import { Context as UpcomingCompaniesContext } from '../../context/upcomingCompanyContext'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
export default function UpcomingCompanies() {

  const {state, getJob} = useContext(UpcomingCompaniesContext);
  return (
    <>
        <NavigationEvents onWillFocus={getJob}/>
        <Text style={{fontSize:48}}>Companies recruiting</Text>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity>
                    <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title><ListItem.Subtitle>{item.company}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
                </TouchableOpacity>
            );
            }}
        />
    </>
  )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        marginTop: 10
    }
})

UpcomingCompanies.navigationOptions = () => {

  return {
      headerShown : false,
  }
}