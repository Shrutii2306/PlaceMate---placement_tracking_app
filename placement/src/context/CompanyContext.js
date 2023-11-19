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
        default:
            return state;
    }

}

const createJob = dispatch => async() => {

    
};

const getCurrentJob = dispatch => async() => {

    const response = await placementApi.get('./getCompany');
    console.log(response.data);
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

export const {Provider, Context} = createDataContext(

    companyReducer,
    {createJob, getCurrentJob, deleteJob, putApplicant},
    {jobs : [], errorMessage : ''},

);