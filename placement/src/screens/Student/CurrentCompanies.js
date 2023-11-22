import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { View,TouchableOpacity,FlatList ,ImageBackground,Image, Dimensions  } from 'react-native'
import { Context as CompanyContext } from '../../context/CompanyContext' 
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Text } from 'react-native-elements'
import ItemSpacer from '../../components/ItemSpacer'

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function CurrentCompanies({navigation}) {

    const {state,getCurrentJob} = useContext(CompanyContext);
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
        <View style={styles.heading}><Text h4 style={{color:"white"}}>COMPANIES RECRUITING</Text></View>
        <NavigationEvents onWillFocus={getCurrentJob}/>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('CompanyDetails',{_id: item._id})} >
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
    </>
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
