import React, { useContext, useEffect } from 'react'
import { TouchableOpacity,FlatList  } from 'react-native'
import { Context as UpcomingCompaniesContext } from '../../context/upcomingCompanyContext'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { View , StyleSheet,Text,Linking,ImageBackground,Image, Dimensions  } from 'react-native'
import { Text as TEXT } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

export default function UpcomingCompaniesAdmin({navigation}) {

  const {state, getJob} = useContext(UpcomingCompaniesContext);

  
  const addLongPress = () => {

    ToastAndroid.show('Add a Job', ToastAndroid.SHORT);
  }

  return (
     <>
    <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <NavigationEvents onWillFocus={getJob}/>
        <View style={styles.heading}><TEXT h4 style={{color:'white'}}>UPCOMING COMPANIES</TEXT></View>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content>
                  <ListItem.Title style={{color:'#F8CC7B',fontSize:20,marginBottom:10}}>{item.title}</ListItem.Title><ListItem.Subtitle style={{color:'white'}}>{item.company}                                   CTC: {item.salary}</ListItem.Subtitle ><ListItem.Subtitle style={{color:'white'}}>Date : {item.date}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
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
              
                onPress={() => navigation.navigate('UpcomingCompanyForm')}
                onLongPress={addLongPress}

          >
                <Ionicons name="add" size={38} color="black" />
            </TouchableOpacity>

        </ImageBackground>
    </>
  )
}

UpcomingCompaniesAdmin.navigationOptions = () => {
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