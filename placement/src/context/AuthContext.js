import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
import AsyncStorage from '@react-native-async-storage/async-storage';
const authReducer = (state, action) => {


    switch (action.type) {
        

        case 'checkUser' : 
        return {email : action.payload.email, rno : action.payload.rno};
        case 'signin':
            return {errorMessage:'',token: action.payload};
        case 'add_error' :
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }

}

const checkUser = (dispatch) =>  async ({email, rno}) => {
        console.log("inside check fn");
        try{
            console.log(email,rno);
            const response = await placementApi.post('./checkUser',{rno,email} );
            console.log(response.data)
            const actuser = [{email: email, rno: rno}]

            console.log(response.data)
            if(response.data=='success')
            {
                dispatch({type: "checkUser", payload : {email,rno}});
                navigate('FormPersonalDetails');
            }
            console.log(response.data);
        }catch(err){
            console.error("outer",err.response);
            dispatch({type:'add_error', payload: 'No Match Found!'});
        }
}

const fillPersonalDetails = (dispatch) => async ({email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad}) => {

    console.log("inside fill fun",email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad);
    try{

        const response = await placementApi.post('./signupUser',{email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad});

        console.log(response.data);
        if(response.data != 'could not sign up')
        {
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin', payload : response.data.token})
            navigate('studentFlow');
        }

    }catch(err){

        console.log(err.message);

    }
}

const signup = (dispatch) => {

    return async ({email, rollno}) => {

        try{
            console.log(email,rollno);
            const response = await placementApi.post('./checkUser',{email,rollno});
            navigate('FormPersonalDetails')
            console.log(response.data);
        }catch(err){
            console.log(err.response.data);
        }

    };
}

const signin = (dispatch)  =>  async ({email, password}) => {
    console.log("inside signin fn");
    try{
        console.log(email,password);
        const response = await placementApi.post('./signinUser',{email, password} );
        const actuser = [{email: email, password:password}]

        console.log(response.data)
        if(response.data.token)
        {
            console.log(response.data.token);
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type : 'signin',payload : response.data.token});
            navigate('studentFlow');
        }
        console.log(response.data);
    }catch(err){
        console.error("outer",err.response);
    }
}

const adminSignin = (dispatch)  =>  async ({email, password}) => {
    console.log("inside signin fn");
    try{
        console.log(email,password);
        const response = await placementApi.post('./adminSignin',{email, password} );
        const actuser = [{email: email, password:password}]

        console.log(response.data)
        if(response.data=='success')
        {
            
            navigate('adminFlow');
        }
        console.log(response.data);
    }catch(err){
        console.error("outer",err.response);
    }
}


const signout = (dispatch) => {

    return () =>{

    }
}


export const {Provider, Context} = createDataContext(

    authReducer,
    {signin, signout, signup,checkUser, fillPersonalDetails,adminSignin},
    {token : null, errorMessage : ''},

);