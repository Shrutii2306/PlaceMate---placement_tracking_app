import React,{useState, useContext, useEffect} from 'react'
import { View, StyleSheet,FlatList,TouchableOpacity, SafeAreaView,ImageBackground,Dimensions } from 'react-native'
import { Text,Input,Button, ListItem } from 'react-native-elements'
import Spacer from '../../components/Spacer';
import { Dropdown } from 'react-native-element-dropdown';
import departmentData from '../../data/departmentData';
import { NavigationEvents } from 'react-navigation';
import { Context as CompanyContext } from '../../context/CompanyContext';
import ItemSpacer from '../../components/ItemSpacer'

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;

export default function TrackApplications({navigation}) {

    const {state,getCurrentJob} = useContext(CompanyContext);
    
  
   
    return (
      <>
      <ImageBackground 
          source={require('../../images/Background3.png')} 
          resizeMode="stretch"
          style={styles.img}> 
          <View style={styles.heading}><Text h4 style={{color:"#D48F08"}}>TRACK APPLICATIONS</Text></View>
          <Text style={{color:'white'}}>Select a company :</Text>
          <NavigationEvents onWillFocus={getCurrentJob}/>
          <FlatList
              data={state}
              keyExtractor={item => item._id}
              renderItem={({item}) => {
                  return (
                  <TouchableOpacity onPress={() => navigation.navigate('ApplicationDetails',{company: item.companyDetails.company})} >
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
          
          </ImageBackground>
      </>)}
  
  
TrackApplications.navigationOptions = () => {
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