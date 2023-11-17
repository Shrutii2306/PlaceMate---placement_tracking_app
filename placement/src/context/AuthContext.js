import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
import AsyncStorage from '@react-native-async-storage/async-storage';
const authReducer = (state, action) => {


    switch (action.type) {
        
        case 'auto_signin':
            return {errorMessage:'',token: action.payload.token, name : action.payload.name,account_type: action.payload.accountType, userId: action.payload.userId};
        case 'signout':
            return {token :'null', errorMessage:'null',name:'null',account_type:'null'};
        case 'checkUser' : 
        return {email : action.payload.email, rno : action.payload.rno};
        case 'signin':
            return {errorMessage:'',token: action.payload.token, name : action.payload.name,account_type: action.payload.account_type, userId: action.payload.userId};
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
        const token = response.data.token;
        const name = response.data.name;
        const account_type = response.data.account_type;
        if(response.data != 'could not sign up')
        {
            await AsyncStorage.multiSet([['token',response.data.token],['name',response.data.name],['accountType',response.data.account_type],['userId',response.data.userId]]);
            dispatch({type:'signin', payload : {token,name, account_type}})
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
        
        const token = response.data.token; 
        const name = response.data.name; 
        const account_type = response.data.account_type;
        const userId = response.data.userId; 
        console.log(response.data)
        if(token)
        {
            console.log(token);
            await AsyncStorage.multiSet([['token',response.data.token],['name',response.data.name],['accountType',response.data.account_type],['userId',response.data.userId]]);
            dispatch({type : 'signin',payload : {token,name,account_type,userId}});
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

const tryLocalSignin = dispatch => async() => {

    const token = await AsyncStorage.getItem('token');
    const name = await AsyncStorage.getItem('name');
    const accountType = await AsyncStorage.getItem('accountType');
    const userId = await AsyncStorage.getItem('userId');
    if(token){

        console.log("auto sigin",token,name)
        dispatch({type: 'auto_signin', payload:{token,name,accountType, userId}});
        navigate('studentFlow');
    }else{
        navigate('loginFlow');
    }
}
const signout = (dispatch) =>async () =>{
    await AsyncStorage.removeItem('token');
    dispatch({type :'signout'})
    navigate('loginFlow');
};

const getUserDetails = (dispatch)  =>  async () => {

    const _id = await AsyncStorage.getItem('userId');
    console.log("inside getdetails fn",_id)
    try{
        console.log("iniside try")
        const response = await placementApi.post('./getUserDetails',{_id});
        console.log("context response",response.data);
        return(response.data);

    }catch(err){
        console.log(err);
    }
}


export const {Provider, Context} = createDataContext(

    authReducer,
    {signin, signout, signup,checkUser, fillPersonalDetails,adminSignin,tryLocalSignin,getUserDetails},
    {token : null, errorMessage : '',name:'', account_type : '', userId:''},

);