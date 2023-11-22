import React, {useState,useContext} from "react";
import { Text,View, StyleSheet,ImageBackground, Dimensions } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "../../components/Spacer";
import { NavigationEvents } from "react-navigation";
import { ScrollView, SafeAreaView } from "react-native";
import { Context as UpcomingCompaniesContext } from '../../context/upcomingCompanyContext'

export default function UpcomingCompanyForm({navigation}) {

    const {state, createUpcomingJob,clearErrorMessage} = useContext(UpcomingCompaniesContext);
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
       

  return (
     
    <SafeAreaView style={styles.container}>
      <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />    
        <View style={styles.heading}><Text style={{fontSize:28,color:"white"}}>ADD A NEW COMPANY</Text></View>
    <ScrollView>
        <Spacer>
            <Text style={styles.inputLabel}>Job Title</Text>
            <Input style={styles.input}
                onChangeText={setTitle} />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Company</Text>
            <Input style={styles.input}
            onChangeText={setCompany} />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Description</Text>
            <Input style={styles.input}  onChangeText={setDescription}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>CTC Offered</Text>
            <Input style={styles.input}  onChangeText={setSalary}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Date</Text>
            <Input style={styles.input}  onChangeText={setDate}
            />
        </Spacer>

       
        {state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage} </Text>: null}

        <Button 
            title='ADD'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 100,
                marginHorizontal: 125,
                marginVertical: 10,
                marginBottom:20              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            onPress={() => createUpcomingJob({title,company,description,salary,date}) }
        />

        </ScrollView>
        {/* <Text>{name} , {password}, {regno}, {contact}, {dept} , {year} </Text> */}
        {/* <Text style={styles.inputLabel}>{userData}</Text> */}
        
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'black'
    },
    heading : {
  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30,
        marginTop: 70
  
    }, 
    inputLabel:{

        fontSize: 15,
        color: "white"
    },
    input : {
        borderColor: 'grey',
        marginTop:10,
        color: 'white'    
    },
    errorMessage : {

        fontSize: 16,
        color:'red',
        textAlign:'center'
    },

})

UpcomingCompanyForm.navigationOptions = () => {

    return {

        headerShown : false
    }
}