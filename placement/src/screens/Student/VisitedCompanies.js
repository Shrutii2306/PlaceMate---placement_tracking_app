import React, { useContext, useEffect } from 'react'
import {TouchableOpacity,FlatList  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { View , StyleSheet,Text,Linking,ImageBackground,Image, Dimensions  } from 'react-native'
import { Text as TEXT } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;
export default function VisitedCompanies({navigation}) {

  const {state,getVisitedJob} = useContext(CompanyContext);
  const account_type = navigation.getParam('account_type');
  const userId = navigation.getParam('userId');
  console.log( "state",state);
  console.log(userId);
  
return (
  <>
  <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><TEXT h4 style={{color:'white'}}>COMPANIES VISITED</TEXT></View>
      <NavigationEvents onWillFocus={getVisitedJob}/>
      
      <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
              return (
                <ItemSpacer>
              <TouchableOpacity >
                  <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
              <ListItem.Content>
                <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.companyDetails.title}</ListItem.Title>
                <ListItem.Subtitle style={{color:'white'}}>{item.companyDetails.company}</ListItem.Subtitle>
                <ListItem.Subtitle style={{color:'white'}}>CTC Offered : {item.companyDetails.salary}</ListItem.Subtitle>
                <ListItem.Subtitle style={{color:'white'}}>Total Applicants : {item.status.app_count}                  <Text style={{color:'lightgreen'}}>Selected: {item.status.selected}</Text></ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
              </TouchableOpacity>
              </ItemSpacer>
          );
          }}
      />
      </ImageBackground>
  </>
)
}

VisitedCompanies.navigationOptions = () => {

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