
import React,{useState, useContext} from 'react'
import { Text,View, StyleSheet } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context as AuthContext } from '../context/AuthContext'

const StudentSignup = ({navigation})  => {

    const {state, checkUser} = useContext(AuthContext);    
    const [email,setEmail] = useState('');
    const [rno, setRno] = useState('');

  return (
    <View style={styles.container}>
        <Spacer>
            <Text>
                Enter your Registered Email ID                
            </Text>
            <Input 
                 value={email}
                 onChangeText={setEmail}
                 autoCapitalize="none"
                 autoCorrect={false}
            />
        </Spacer>
        <Spacer>
            <Text>Enter your Roll Number</Text>
            <Input 
                value={rno}
                onChangeText={setRno}
                autoCapitalize='none'
                autoCorrect={false}
            
            />
        </Spacer>
        {state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage} </Text>: null}
        <Button 
            title='NEXT'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 75,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={() => checkUser({email, rno})}
        />

            <TouchableOpacity 
                    onPress={() => navigation.navigate('StudentLogin')}
            >
                <Text style={styles.signupLink}> 
                    Have an account? Signin instead!
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
    },
    errorMessage : {

        fontSize: 16,
        color:'red',
        textAlign:'center'
    }

})

StudentSignup.navigationOptions =  () => {

    return {

        headerShown : false,
    }
}

export default StudentSignup;