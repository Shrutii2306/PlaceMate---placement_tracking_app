import React,{useState} from 'react'
import { Text,View, StyleSheet } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { TouchableOpacity } from 'react-native-gesture-handler'
const StudentLogin = ({navigation})  => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <Spacer>             
            <Text style={styles.inputLabel}>Email ID</Text>
            <Input style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel} >Password</Text>
            <Input 
            style={styles.input}
            value={password}
            onChangeText={setPassword}   
            secureTextEntry         
            autoCapitalize="none"
            autoCorrect={false}
            />
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
                onPress={() => navigation.navigate('studentFlow')}
            />
        <Spacer/>
            <TouchableOpacity 
                onPress={() => navigation.navigate('StudentSignup')}
            >
            <Text style={styles.signupLink}> 
                Not Registered? Signup 
            </Text>
            </TouchableOpacity>
            
    
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

StudentLogin.navigationOptions =  () => {

    return {

        headerShown : false,
    }
}

export default StudentLogin;