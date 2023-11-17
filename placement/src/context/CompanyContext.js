import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";

const companyReducer = (state, action) => {


    switch (action.type) {
        
        case 'fetch_jobs':
            return action.payload;
        default:
            return state;
    }

}

const createJob = dispatch => async() => {

    
};

const getJob = dispatch => async() => {

    const response = await placementApi.get('./getCompany');
    console.log(response.data);
    dispatch({type:'fetch_jobs',payload: response.data})
};

const deleteJob = dispatch => () => {};

export const {Provider, Context} = createDataContext(

    companyReducer,
    {createJob, getJob, deleteJob},
    {jobs : [], errorMessage : ''},

);