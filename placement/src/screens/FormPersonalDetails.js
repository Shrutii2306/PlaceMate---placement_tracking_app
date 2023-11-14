import React,{useState, useContext} from 'react'
import { Text,View, StyleSheet, SafeAreaView } from 'react-native'
import { Input,Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Dropdown } from 'react-native-element-dropdown';
import departments from '../data/departmentData';
import { Context as AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
const StudentLogin = ({navigation})  => {

    const data = departments;
    const {state, fillPersonalDetails } = useContext(AuthContext);
    const [dept, setDept] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    console.log('state active user',state.email, state.rollno);
    const email = state.email;
    const rollno = state.rollno;
    
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
      <ScrollView>
        <Text>Name</Text>
        <Input onChangeText={setName}/>
        <Text>Set Password</Text>
        <Input 
            onChangeText={setPassword}
            secureTextEntry
        />
        <Text>Registration No.</Text>
        <Input onChangeText={setRegno}/>
        <Text>Contact No.</Text>
        <Input onChangeText={setContact}/>
        <Text>Department</Text>
    
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
      <Text>Class X Percentage</Text>
        <Input onChangeText={setMarks10}/>
        <Text>Class XII Percentage</Text>
        <Input onChangeText={setMarks12}/>
        <Text>Graduation Percentage</Text>
        <Input onChangeText={setMarksGrad}/>
        <Text>Post Graduation Percentage</Text>
        <Input onChangeText={setMarksPostGrad}/>
        <Button 
            title='REGISTER'
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 75,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
            //onPress={() => navigation.navigate('FormAcadDetails')}
            onPress={() => fillPersonalDetails({email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad})}
        />


        {/* <Text>{name} , {password}, {regno}, {contact}, {dept} , {year} </Text> */}
        <Text>{userData}</Text>
        </ScrollView>
    </SafeAreaView>
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
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
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

})

StudentLogin.navigationOptions =  () => {

    return {

        headerShown : false,
    }
}

export default StudentLogin;