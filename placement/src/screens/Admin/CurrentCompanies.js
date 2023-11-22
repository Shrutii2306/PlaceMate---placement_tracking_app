import React, { useContext, useEffect } from 'react'
import {  StyleSheet } from 'react-native'
import { ScrollView,View,TouchableOpacity,FlatList, ToastAndroid ,ImageBackground,Image, Dimensions  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { Button, ListItem } from 'react-native-elements'
import { Text } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer'
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function CurrentCompanies({navigation}) {

  const {state,getCurrentJob} = useContext(CompanyContext);
  const userId = navigation.getParam('userId');
  console.log( "state",state);

  const addLongPress = () => {

    ToastAndroid.show('Add a Job', ToastAndroid.SHORT);
  }

 
  return (
    <>
    <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><Text h4 style={{color:"white"}}>COMPANIES RECRUITING</Text></View>
        <NavigationEvents onWillFocus={getCurrentJob}/>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('AdminCompaniesDetails',{_id: item._id})} >
                    <ItemSpacer>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content >
                  <ListItem.Title style={{color:'white'}}>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle style={{color:'#F8CC7B'}}>{item.companyDetails.company}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              </ItemSpacer>
           </TouchableOpacity>
            );
            }}
        />
         <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'orange',
                    alignItems:'center',
                    justifyContent:'center',
                    width:70,
                    height:70,
                    position:'absolute',                                 bottom:10,                                          
                    right: 10,
                    height:70,
                    backgroundColor:'orange',
                    borderRadius:100,
                }}
              
                onPress={() => navigation.navigate('CompanyForm')}
                onLongPress={addLongPress}

          >
                <Ionicons name="add" size={38} color="black" />
            </TouchableOpacity>
        </ImageBackground>
    </>)}


CurrentCompanies.navigationOptions = () => {
  return {
      headerShown : false,
  }
}

const styles = StyleSheet.create({

  img: { 
    height: screenHeight, 
    width: screenWidth, 
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'center', 
    // alignItems: 'center', 
  }, 
container : {
    flex: 1,
    justifyContent: "center",
},
heading : {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:70,
marginBottom:20},
list:{
    backgroundColor:'grey'
}
})