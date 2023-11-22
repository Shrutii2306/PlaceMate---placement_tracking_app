import React, { useContext, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { View,TouchableOpacity,FlatList, ToastAndroid ,ImageBackground,Image, Dimensions  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { Button, ListItem } from 'react-native-elements'
import { Text } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer'
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function CurrentCompanies({navigation}) {

  const {state,getCurrentJob} = useContext(CompanyContext);
  const userId = navigation.getParam('userId');
  console.log( "state",state);

  const addLongPress = () => {

    ToastAndroid.show('Add a Job', ToastAndroid.SHORT);
  }

  const addCompany = () => {

  }
  return (
    <View style={styles.container}>
         <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        
        <View style={styles.heading}><Text h4 style={{color:"white"}}>COMPANIES RECRUITING</Text></View>
        <NavigationEvents onWillFocus={getCurrentJob}/>
        <ScrollView>
        <View >
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('CompanyDetails',{_id: item._id})} >
                    <ItemSpacer>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content >
                  <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle style={{color:'white'}}>{item.companyDetails.company}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              </ItemSpacer>
              <ItemSpacer>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content >
                  <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle style={{color:'white'}}>{item.companyDetails.company}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              </ItemSpacer>
              <ItemSpacer>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content >
                  <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.companyDetails.title}</ListItem.Title><ListItem.Subtitle style={{color:'white'}}>{item.companyDetails.company}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              </ItemSpacer>
                </TouchableOpacity>

                
            );
            }}
        />

</View>
        </ScrollView>
        
        <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:70,
                    position: 'absolute',                                          
                    bottom: 10,                                                    
                    right: 10,
                    height:70,
                    backgroundColor:'#fff',
                    borderRadius:100,
                }}
                >
                <Icon name="plus"  size={30} color="#01a699" />
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

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
marginBottom:40},
list:{
    backgroundColor:'grey'
}
})