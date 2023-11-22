import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";

const companyReducer = (state, action) => {


    switch (action.type) {
        
        case 'fetch_current_jobs':
            return action.payload;
        case 'fetch_visited_jobs':
            return action.payload;
        case 'fetch_company_names':
            return action.payload;
        case 'add_error' :
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }

}

const createJob = dispatch => async({title,company,description,salary,dateToApply,link,ssc,hsc,graduation,postGraduation,recruting}) => {
    
    console.log("inside fill fun",title,company,description,salary,dateToApply,link,ssc,hsc,graduation,postGraduation,recruting);
    if( !title || !company || !description || !salary || !dateToApply || !link || !ssc || !hsc || !graduation || !postGraduation || !recruting )
    {
        dispatch({type:'add_error', payload: "One or more fields are empty!"});
        return;
    }
    try{

        const response = await placementApi.post('./addCompany',{title,company,description,salary,dateToApply,link,ssc,hsc,graduation,postGraduation,recruting});

        console.log(response.data);
        
        if(response.data == 'company saved successfully')
        {
            
            navigate('AdminCurrentCompanies');
        }
        else{

            dispatch({type:'add_error', payload: response.data});

        }

    }catch(err){

        console.log(err.message);
        dispatch({type:'add_error', payload: 'Something went wrong!'});
    }
}

    

clearErrorMessage = dispatch => () => {

    dispatch({ type : 'clear_error_message'});
};

const getCurrentJob = dispatch => async() => {

    const response = await placementApi.get('./getCompany');
    console.log("all companies",response.data);
    dispatch({type:'fetch_current_jobs',payload: response.data})
};

const deleteJob = dispatch => () => {};

const putApplicant = dispatch => async({jobTitle,company }) => {

    console.log("inside putapplicamt")
    const userId = await AsyncStorage.getItem('userId');
    console.log({userId})
    const response = await placementApi.post('./putApplicant',{userId ,jobTitle,company });
    console.log(response);
}

const getVisitedJob = dispatch => async() => {

    const response = await placementApi.get('./getVisitedCompanies');
    console.log(response.data);
    dispatch({type:'fetch_visited_jobs',payload: response.data})
}

const getCompanyNames = dispatch => async() => {

    const response = await placementApi.get('./getCompanyNames');
    console.log(response.data);
    dispatch({type:'fetch_company_names',payload: response.data})

}

export const {Provider, Context} = createDataContext(

    companyReducer,
    {createJob, getCurrentJob, deleteJob, putApplicant, getVisitedJob,getCompanyNames},
    {jobs : [], errorMessage : '',companyNames:''},

);