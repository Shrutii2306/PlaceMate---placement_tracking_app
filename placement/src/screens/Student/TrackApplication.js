import React, { useContext } from 'react'
import { TouchableOpacity,FlatList  } from 'react-native'
import { Context as ApplicationContext } from '../../context/ApplicationContext';
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer';
import { View , StyleSheet,Text,Linking,ImageBackground,Image, Dimensions  } from 'react-native'
import { Text as TEXT } from 'react-native-elements'
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;
export default  function  TrackApplication({navigation}) {
  
  const {state,getApplication} =  useContext(ApplicationContext);
  console.log({state})
  return (
     <>
     <ImageBackground 
        source={require('../../images/Background3.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}><TEXT h4 style={{color:'white'}}>MY APPLICATIONS</TEXT></View>
        <NavigationEvents onWillFocus={getApplication}/>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
              console.log({item})
                return (
                  <ItemSpacer >
                <TouchableOpacity>
                    <ListItem containerStyle ={{backgroundColor:'#070D04',borderColor:'white',borderRadius:2,borderBottomColor:'white'}}>
                <ListItem.Content>
                  <ListItem.Title style={{color:'white',fontSize:20,marginBottom:10}}>{item.jobTitle}</ListItem.Title>
                  
                  <ListItem.Subtitle style={{color:'#F8CC7B'}}>{item.company}</ListItem.Subtitle>
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

const styles = StyleSheet.create({

    appstatus : {
        color:'green'
    },
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

TrackApplication.navigationOptions = () => {

  return {
      headerShown : false,
  }
}