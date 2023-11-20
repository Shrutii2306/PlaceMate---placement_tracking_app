import React,{useState, useContext} from 'react'
import { Text,View, StyleSheet, SafeAreaView } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Dropdown } from 'react-native-element-dropdown';
import departments from '../data/departmentData';
import { Context as AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
const StudentLogin = ({navigation})  => {

    const data = departments;
    const {state, fillPersonalDetails,clearErrorMessage } = useContext(AuthContext);
    const [dept, setDept] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    console.log('state active user',state.email, state.rno);
    console.log("error m",state.errorMessage);
    const email = state.email;
    const rollno = state.rno;
    
    const yearData = [

        {
            id : 1,
            year : '1'
        },
        {
            id : 2,
            year :'2'
        },
        {
            id : 3,
            year : '3'
        },
        {
            id : 4,
            year : '4'
        },
    ]

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [regno, setRegno] = useState('');
    const [contact, setContact] = useState('');

    const [year, setYear] = useState(null);
    const [isFocusYear, setIsFocusYear] = useState(false);
    const [marks10,setMarks10] = useState('');
    const [marks12, setMarks12] = useState('');
    const [marksGrad, setMarksGrad] = useState('');
    const [marksPostGrad, setMarksPostGrad] = useState('');
    const [userData, setUserData] = useState('');

    const handleUserData = () =>{

        setUserData(...userData, {email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad})
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
      <ScrollView>
      <View style={styles.heading}>
        <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>REGISTER</Text>
        </View>
        <Spacer>
          <Text style={styles.inputLabel}>Name</Text>
          <Input onChangeText={setName}/>
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Set Password</Text>
          <Input 
              onChangeText={setPassword}
              secureTextEntry
          />
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Registration No.</Text>
          <Input onChangeText={setRegno}/>
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Contact No.</Text>
          <Input onChangeText={setContact}/>
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Department</Text>
      
          <View >
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
        
        <Spacer>
          <Text style={styles.inputLabel}>Year</Text>
            <View >
            <Dropdown
              style={[styles.dropdown, isFocusYear && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={yearData}
              maxHeight={300}
              labelField="year"
              valueField="id"
              placeholder={!isFocusYear ? 'Select year' : '...'}
              value={yearData}
              onFocus={() => setIsFocusYear(true)}
              onBlur={() => setIsFocusYear(false)}
              onChange={item => {
                setYear(item.id);
                setIsFocusYear(false);
              }}
            />
          </View>
        </Spacer>
      
        <Spacer>
          <Text style={styles.inputLabel}>Class X Percentage</Text>
          <Input onChangeText={setMarks10}/>
        </Spacer>
      
        <Spacer>
          <Text style={styles.inputLabel}>Class XII Percentage</Text>
          <Input onChangeText={setMarks12}/>
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Graduation Percentage</Text>
          <Input onChangeText={setMarksGrad}/>
        </Spacer>
        
        <Spacer>
          <Text style={styles.inputLabel}>Post Graduation Percentage</Text>
          <Input onChangeText={setMarksPostGrad}/>
        </Spacer>
        
        {state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage} </Text>: null}

        <Button 
            title='REGISTER'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 75,
                marginVertical: 10,
                marginBottom:20              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            //onPress={() => navigation.navigate('FormAcadDetails')}
            onPress={() => fillPersonalDetails({email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad})}
        />


        {/* <Text>{name} , {password}, {regno}, {contact}, {dept} , {year} </Text> */}
        {/* <Text style={styles.inputLabel}>{userData}</Text> */}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    inputLabel:{

        fontSize: 15,
        color:'white'
    },
    input : {
        borderColor: 'grey',
        marginTop:10,
        color:'white'    
    },
   
    signupLink:{

        color: 'blue',
        textAlign:'center'
    },
    container:{

        flex:1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
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
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30,
        marginTop:60

    },
    errorMessage : {

        fontSize: 16,
        color:'red',
        textAlign:'center'
    },

})

StudentLogin.navigationOptions =  () => {

    return {

        headerShown : false,
    }
}

export default StudentLogin;