import React from 'react'
import { View , StyleSheet} from 'react-native'
import { Button,Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
const LoginHome = ({navigation}) => {
  return (
    <View style={styles.container} >
        <Spacer>
            <View style={styles.heading}><Text h3>Login as </Text></View>
        </Spacer>
        <Spacer>
            <Button 
                title='Student' 
                onPress={() => navigation.navigate('StudentLogin')}
                
                type='outline'
                buttonStyle={{
                    borderColor: 'black',
                  }}
                titleStyle={{

                    color:'black'
                }}
            />
        </Spacer>
        <Spacer>
            <Button 
                title='Admin' 
                onPress={() => navigation.navigate('AdminLogin')} style = {styles.buttonStyle}
                type='outline'
                buttonStyle={{
                    borderColor: 'black',
                  }}
                titleStyle={{

                    color:'black'
                }}
            />
        </Spacer>
        
        <Spacer>
        <Button title='Faculty' 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('FacultyLogin')}  
            type='outline'
            buttonStyle={{
                borderColor: 'black',
              }}
            titleStyle={{

                color:'black'
            }}
        />
        </Spacer> 
    </View>
  )
}

LoginHome.navigationOptions = () => {

    return {

        headerShown: false,
    }
}


const styles = StyleSheet.create({

    container : {

        flex: 1,
        justifyContent: 'center',
        marginBottom:10
    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    }
})

export default LoginHome;