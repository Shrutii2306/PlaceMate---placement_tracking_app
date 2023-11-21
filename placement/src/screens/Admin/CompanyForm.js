import React, {useState,useContext} from "react";
import { Text,View, StyleSheet,ImageBackground, Dimensions } from "react-native";
import { Button, Text as TEXT } from "react-native-elements";
import Spacer from "../../components/Spacer";
import { NavigationEvents } from "react-navigation";

export default function CompanyForm({navigation}) {
  return (
    <View style={styles.container}>
        
        <View style={styles.heading}><Text style={{fontSize:35,color:"white"}}>COMPANIES RECRUITING </Text></View>

        <Spacer>
            <Text style={styles.inputLabel}>Job Title</Text>
            <Input style={styles.input}
                onChangeText={abc} />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Company</Text>
            <Input style={styles.input}
            onChangeText={abc} />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Description</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>CTC Offered</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Last date to apply</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Application Link</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Text style={{color:'white',fontWeight:'bold'}}>CRITERIA</Text>
        <Spacer>
            <Text style={styles.inputLabel}>SSC</Text>
            <Input style={styles.input}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>HSC</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Graduation</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Post Graduation</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>

        <Spacer>
            <Text style={styles.inputLabel}>Currently Recruiting(yes/no)</Text>
            <Input style={styles.input}  onChangeText={abc}
            />
        </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        justifyContent: "center",
    },
    heading : {
  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30
  
    }, 
    inputLabel:{

        fontSize: 15,
        color: "white"
    },
    input : {
        borderColor: 'grey',
        marginTop:10,
        color: 'white'    
    }
})

CompanyForm.navigationOptions = () => {

    return {

        headerShown : false
    }
}