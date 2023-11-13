import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {


    switch (action.type) {

        case 'checkUser':
            return {email: action.payload.email, rollno: action.payload.rollno};
        default:
            return state;
    }

}

const checkUser = (dispatch) =>  async ({email, rollno}) => {
        console.log("inside check fn");
        try{
            console.log(email,rollno);
            const response = await placementApi.post('./checkUser',{rollno,email} );
            const actuser = [{email: email, rollno: rollno}]

            if(response.data=='success')
            {
                dispatch({type: "checkUser", payload : {email,rollno}});
                navigate('FormPersonalDetails');
            }
            console.log(response.data);
        }catch(err){
            console.error(err.response);
        }
}

const fillPersonalDetails = (dispatch) => async ({email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad}) => {

    console.log("inside fill fun",email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad);
    try{

        const response = await placementApi.post('./signupUser',{email,rollno, name, password, regno, contact,dept, year,marks10,marks12,marksGrad,marksPostGrad});
        

    }catch(err){

        console.log(err.message);

    }
}

const signup = (dispatch) => {

    return async ({email, rollno}) => {

        //make api request to check email and rollno
        //if record found navigate to next page

        //if check fails display error message

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

const signin = (dispatch) => {

    return ({email, password}) => {

        //try signin
        //handle success by updating state
        //i fails show erroe
    }
}

const signout = (dispatch) => {

    return () =>{

    }
}
export const {Provider, Context} = createDataContext(

    authReducer,
    {signin, signout, signup,checkUser, fillPersonalDetails},
    {isSignedIn : false, email:'', rollno:''},

);