import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";


const upcomingCompanyReducer = (state, action) => {


    switch (action.type) {
        
        case 'fetch_jobs':
            return action.payload;
        default:
            return state;
    }

}



const getJob = dispatch => async() => {

    const response = await placementApi.get('./getUpcomingCompanies');
    console.log(response.data);
    dispatch({type:'fetch_jobs',payload: response.data})
};

export const {Provider, Context} = createDataContext(

    upcomingCompanyReducer,
    {getJob},
    {companies : [], errorMessage : ''},

);