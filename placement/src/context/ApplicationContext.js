import createDataContext from "./createDataContext";
import placementApi from "../api/placement";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";

const companyReducer = (state, action) => {


    switch (action.type) {

        
        case 'fetch_company_applications':
            return action.payload;
        case 'fetch_applications':
            return action.payload;
        default:
            return state;
    }

}



const getApplication = dispatch => async() => {

    console.log("inside ap fb")
    const userId =  await AsyncStorage.getItem('userId');
    console.log("app",{ userId})
    const response = await placementApi.get('./getMyApplications',{userId});
    console.log("response fetched",response.data);
    dispatch({type:'fetch_applications',payload: response.data})
};

const getCompanyApplications = dispatch => async({company}) =>{

    console.log({company});
    const comp = "Infosys";
    const response = await placementApi.get('./getCompanyApplications',{company});
    console.log("response fetched",response);
    dispatch({type:'fetch_company_applications',payload: response.data})

};

export const {Provider, Context} = createDataContext(

    companyReducer,
    { getApplication, getCompanyApplications},
    {myApplications : [], errorMessage : ''},

);