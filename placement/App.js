import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import LoginHome from './src/screens/LoginHome';
import StudentLogin from './src/screens/StudentLogin';
import StudentSignup from './src/screens/StudentSignup';
import AdminLogin from './src/screens/AdminLogin';
import FacultyLogin from './src/screens/FacultyLogin';
import FormPersonalDetails from './src/screens/FormPersonalDetails';

import StudentHome from './src/screens/Student/StudentHome';
import StudentSettings from './src/screens/Student/StudentSettings';
import CompanyDetails from './src/screens/Student/CompanyDetails';
import CurrentCompanies from './src/screens/Student/CurrentCompanies';
import TrackApplication from './src/screens/Student/TrackApplication';
import UpcomingCompanies from './src/screens/Student/UpcomingCompanies';
import VisitedCompanies from './src/screens/Student/VisitedCompanies';

import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator({

    loginFlow : createStackNavigator({

        LoginHome : LoginHome,
        StudentLogin : StudentLogin,
        StudentSignup: StudentSignup,
        AdminLogin : AdminLogin,
        FacultyLogin : FacultyLogin
    }),

    studentFlow : createMaterialBottomTabNavigator({


        studentHomeFlow : createStackNavigator({
            StudentHome:StudentHome,
            currentCompaniesFlow:createStackNavigator({
                CurrentCompanies:CurrentCompanies,
                CompanyDetails:CompanyDetails
            }),
            TrackApplication:TrackApplication,
            UpcomingCompanies:UpcomingCompanies,
            VisitedCompanies:VisitedCompanies,           
        }),
        StudentSettings : StudentSettings,
        
    })

})

const App = createAppContainer(switchNavigator);

export default () => {

    return (

        <AuthProvider>
            <App />
        </AuthProvider>
    )
}