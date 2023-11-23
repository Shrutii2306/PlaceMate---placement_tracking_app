import React, { useContext,useEffect, useState } from 'react'
import { Button } from 'react-native-elements'
import { Context as ApplicationContext} from '../../context/ApplicationContext'
import { Text as TEXT, ListItem } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer'
import { NavigationEvents } from 'react-navigation'
import {  FlatList,StyleSheet, Text, View,ImageBackground,Image, Dimensions ,TouchableOpacity} from 'react-native'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function ApplicationDetails({navigation}) {

    const company = navigation.getParam('company');
    console.log({company})
    const { state, getCompanyApplications} = useContext(ApplicationContext);
    // const application = state.find( app => app.company ===company );
    // useEffect(async()=> {

    //     const res = await getCompanyApplications({company});
    // })
  return (

    <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><TEXT h4 style={{color:'#D48F08'}}>APPLICATIONS</TEXT></View>
        <NavigationEvents onWillFocus={()=> getCompanyApplications({company})}/>
    <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
              return (
                <ItemSpacer>
              <TouchableOpacity >
                  <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
              <ListItem.Content>
                <ListItem.Title style={{color:'#F8CC7B',fontSize:20,marginBottom:10}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{color:'white'}}>{item.jobTitle}, {item.company}</ListItem.Subtitle>
                
               
              </ListItem.Content>
            </ListItem>
              </TouchableOpacity>
              </ItemSpacer>
          );
          }}
      />
      </ImageBackground>
    
  )
}


ApplicationDetails.navigationOptions = () => {

    return {
        headerShown : false,
    }
  }
  
  
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      marginTop: 10
  },
  img: { 
    height: screenHeight, 
    width: screenWidth, 
    flex: 1,
  }, 
  heading : {
  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:60,
  marginBottom:60},
  })