import React, { useContext } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,FlatList  } from 'react-native'
import { Context as ApplicationContext } from '../../context/ApplicationContext';
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer';
export default  function  TrackApplication({navigation}) {
  
  const {state,getApplication} =  useContext(ApplicationContext);
  console.log({state})
  return (
     <>
        <NavigationEvents onWillFocus={getApplication}/>
        <Text style={{fontSize:48}}>My Applications</Text>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              console.log({item})
                return (
                  <ItemSpacer >
                <TouchableOpacity>
                    <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.jobTitle}</ListItem.Title>
                  
                  <ListItem.Subtitle>{item.company}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
                </TouchableOpacity>
                </ItemSpacer>
            );
            }}
        />
    </>

  )
}

const styles = StyleSheet.create({

    appstatus : {
        color:'green'
    }
})

TrackApplication.navigationOptions = () => {

  return {
      headerShown : false,
  }
}