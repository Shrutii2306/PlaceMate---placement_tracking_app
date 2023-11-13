import React from 'react'
import { Text,View,StyleSheet  } from 'react-native'
import { Input,Button } from 'react-native-elements'

export default function FormAcadDetails({navigation}) {
  return (
    <View style = {styles.container}>
        <Text>Class X Percentage</Text>
        <Input />
        <Text>Class XII Percentage</Text>
        <Input />
        <Text>Graduation Percentage</Text>
        <Input />
        <Text>Post Graduation Percentage</Text>
        <Input />
        <Button 
            title='REGISTER'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 75,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={() => navigation.navigate('studentFlow')}
        />
    </View>
    
  )
}

FormAcadDetails.navigationOptions = () => {
    return{

        headerShown : false
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center'
    }
})