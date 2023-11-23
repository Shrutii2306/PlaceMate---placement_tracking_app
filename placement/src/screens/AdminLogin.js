import React, { useContext, useState } from 'react'
import { Text,View, StyleSheet,ImageBackground,Dimensions,Image } from 'react-native';
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
export default function AdminLogin({navigation}) {

  const {state, adminSignin, clearErrorMessage,tryLocalSignin} = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

//   useEffect(() => {
//     tryLocalSignin();
// },[]);

    return (
      <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <ImageBackground 
        source={require('../images/Background1.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.heading}>
            <Image
                source={require('../images/mortarboard-96.png') }
            />
        </View>
        <View style={styles.heading}>
        <Text style={{color:'#D48F08',fontSize:30,fontWeight:'bold'}}>PLACEMATE</Text>
        </View>
          <Spacer>             
              <Text style={styles.inputLabel}>Username/Email ID</Text>
              <Input style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />
          </Spacer>
  
          <Spacer>
              <Text style={styles.inputLabel} >Password</Text>
              <Input style={styles.input}
                value={password}
                onChangeText={setPassword}   
                secureTextEntry         
                autoCapitalize="none"
                autoCorrect={false}
              />
          </Spacer>

          {state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage} </Text>: null}

              <Button 
                  title='Login'
                  buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 75,
                  marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
                  onPress={() => adminSignin({email, password})}
              />
          <Spacer/>
          </ImageBackground>
      </View>
    )
  
}
const styles = StyleSheet.create({

  img: { 
    height: screenHeight+50, 
    width: screenWidth, 
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'center', 
    // alignItems: 'center', 
  }, 

inputLabel:{

    fontSize: 15,
    color:'white'
},
input : {
    borderColor: 'grey',
    marginTop:10,
    color: 'white'    
},

signupLink:{

    color: 'orange',
    textAlign:'center'
},
container:{

    flex:1,
    justifyContent: 'center'
},
errorMessage : {

    fontSize: 16,
    color:'red',
    textAlign:'center'
},
heading : {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:30

}

})

AdminLogin.navigationOptions = () => {

  return {
    headerShown : false
  }
}