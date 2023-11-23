import React from 'react'
import { View , ImageBackground,StyleSheet, Dimensions,Image} from 'react-native'
import { Button,Text } from 'react-native-elements'
import Spacer from '../components/Spacer'

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
const LoginHome = ({navigation}) => {
  return (
    <View style={styles.container} >
        <ImageBackground 
        source={require('../images/Background1.png')} 
        resizeMode="stretch"
        style={styles.img}> 
        <View style={styles.subHeading}>
            <Image
                source={require('../images/mortarboard-96.png') }
            />
        </View>
        <View style={styles.heading}>
        <Text h2 style={{color:'#D48F08'}}>PLACEMATE</Text>
        </View>
        <Spacer>
            <View style={styles.subHeading}><Text h3 style={{color:'white'}}>Login as </Text></View>
        </Spacer>
        <Spacer>
            <Button 
                title='STUDENT' 
                onPress={() => navigation.navigate('StudentLogin')}
                
               
                buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ 
                fontWeight: 'bold',
                color:'black'
             }}
            />
        </Spacer>
        <Spacer>
            <Button 
                title='ADMIN' 
                onPress={() => navigation.navigate('AdminLogin')} style = {styles.buttonStyle}
                type='outline'
                buttonStyle={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  titleStyle={{ 
                    fontWeight: 'bold',
                    color:'black'
                 }}
            />
        </Spacer>
        
        <Spacer>
        {/* <Button title='Faculty' 
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('FacultyLogin')}  
            type='outline'
            buttonStyle={{
                borderColor: 'black',
              }}
            titleStyle={{

                color:'black'
            }}
        /> */}
        </Spacer> 
        
        </ImageBackground> 
    </View>
  )
}

LoginHome.navigationOptions = () => {

    return {

        headerShown: false,
    }
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
    container : {

        flex: 1,
        justifyContent: 'center',
        marginBottom:10,
        color: 'white'
    },
    subHeading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30

    },
})

export default LoginHome;




