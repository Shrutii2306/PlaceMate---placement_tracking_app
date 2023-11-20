import React from 'react'
import { Text,View, StyleSheet } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function AdminLogin({navigation}) {


    return (
      <View style={styles.container}>
          <Spacer>             
              <Text style={styles.inputLabel}>Username/Email ID</Text>
              <Input style={styles.input}/>
          </Spacer>
  
          <Spacer>
              <Text style={styles.inputLabel} >Password</Text>
              <Input style={styles.input}/>
          </Spacer>
              <Button 
                  title='Login'
                  buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 75,
                  marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
                  onPress={() => navigation.navigate('adminFlow')}
              />
          <Spacer/>
      </View>
    )
  
}
const styles = StyleSheet.create({

  inputLabel:{

      fontSize: 20
  },
  input : {
      borderColor: 'grey',
      marginTop:10    
  },
 
  signupLink:{

      color: 'blue',
      textAlign:'center'
  },
  container:{

      flex:1,
      justifyContent: 'center'
  }

})

AdminLogin.navigationOptions = () => {

  return {
    headerShown : false
  }
}