import React,{useState, useContext} from 'react'
import { Text,View, StyleSheet, SafeAreaView,ImageBackground,Dimensions } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../../components/Spacer';
import { Dropdown } from 'react-native-element-dropdown';
import departmentData from '../../data/departmentData';
import { NavigationEvents } from 'react-navigation';

import ItemSpacer from '../../components/ItemSpacer'

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;

export default function TrackApplications({navigation}) {

    const data = departmentData;
    const [dept, setDept] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  return (
    <ImageBackground 
    source={require('../../images/Background3.png')} 
    resizeMode="stretch"
    style={styles.img}> 
    <View style={styles.heading}><Text style={{color:'white',fontSize:30}}>TRACK APPLICATIONS</Text></View>
    <Spacer>
          <Text style={styles.inputLabel}>Department</Text>
      
          <View >
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'orange' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={data}
              maxHeight={300}
              labelField="name"
              valueField="dept_id"
              placeholder={!isFocus ? 'Select department' : '...'}
              value={data}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setDept(item.name);
                setIsFocus(false);
              }}
            />
          </View>
        </Spacer>
    </ImageBackground>
  )
}

TrackApplications.navigationOptions = () => {

    return{
        headerShown : false
    }
}

const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop:20
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
        color:'white'
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'white'
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      inputLabel:{

        fontSize: 15,
        color:'white'
    },
    input : {
        borderColor: 'grey',
        marginTop:10,
        color:'white'    
    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30,
        marginTop:60

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