import React, { useContext, useEffect } from 'react'
import { TouchableOpacity,FlatList  } from 'react-native'
import { Context as UpcomingCompaniesContext } from '../../context/upcomingCompanyContext'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { View , StyleSheet,Text,Linking,ImageBackground,Image, Dimensions  } from 'react-native'
import { Text as TEXT } from 'react-native-elements'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function UpcomingCompanies() {

  const {state, getJob} = useContext(UpcomingCompaniesContext);
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
                  <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.title}</ListItem.Title><ListItem.Subtitle style={{color:'white'}}>{item.company}                                   CTC: {item.salary}</ListItem.Subtitle ><ListItem.Subtitle style={{color:'white'}}>Date : {item.date}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
                </TouchableOpacity>
            );
            }}
        />
        </ImageBackground>
    </>
  )
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

UpcomingCompanies.navigationOptions = () => {

  return {
      headerShown : false,
  }
}