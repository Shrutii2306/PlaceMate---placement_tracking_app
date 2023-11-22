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

const createUpcomingJob = dispatch => async({title,company,description,salary,date}) => {

    console.log("inside fill fun",title,company,description,salary,date);
    if( !title || !company || !description || !salary || !date )
    {
        dispatch({type:'add_error', payload: "One or more fields are empty!"});
        return;
    }
    try{

        const response = await placementApi.post('./addUpcomingCompanies',{title,company,description,salary,date});

        console.log(response.data);
        
        if(response.data == 'saved successfully')
        {
            
            navigate('AdminUpcomingCompanies');
        }
        else{

            dispatch({type:'add_error', payload: response.data});

        }

    }catch(err){

        console.log(err.message);
        dispatch({type:'add_error', payload: 'Something went wrong!'});
    }

}


const getJob = dispatch => async() => {

    const response = await placementApi.get('./getUpcomingCompanies');
    console.log(response.data);
    dispatch({type:'fetch_jobs',payload: response.data})
};

export const {Provider, Context} = createDataContext(

    upcomingCompanyReducer,
    {getJob,createUpcomingJob},
    {companies : [], errorMessage : ''},

);