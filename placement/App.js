import React from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
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

import AdminHome from './src/screens/Admin/AdminHome';
import AdminProfile from './src/screens/Admin/AdminProfile';
import AdminSettings from './src/screens/Admin/AdminSettings';
import AdminCurrentCompanies  from './src/screens/Admin/CurrentCompanies';
import AdminUpcomingCompanies from './src/screens/Admin/UpcomingCompanies';
import AdminVisitedCompanies from './src/screens/Admin/VisitedCompanies';
import { Provider as UpcomingCompaniesProvider } from './src/context/upcomingCompanyContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import { Provider as CompanyProvider } from './src/context/CompanyContext';
import { Provider as ApplicationProvider } from './src/context/ApplicationContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
const switchNavigator = createSwitchNavigator({

    ResolveAuthScreen:ResolveAuthScreen,

    loginFlow : createStackNavigator({

        LoginHome : LoginHome,
        StudentLogin : StudentLogin,
        StudentSignup: StudentSignup,
        AdminLogin : AdminLogin,
        FacultyLogin : FacultyLogin,
        FormPersonalDetails: FormPersonalDetails
    }),

    studentFlow : createMaterialBottomTabNavigator({


        Home : createStackNavigator({
            StudentHome:StudentHome,
            CurrentCompanies:CurrentCompanies,
            CompanyDetails:CompanyDetails,
            TrackApplication:TrackApplication,
            UpcomingCompanies:UpcomingCompanies,
            VisitedCompanies:VisitedCompanies,           
        }),
        Settings : StudentSettings       
    }),

    adminFlow : createMaterialBottomTabNavigator({

        Home : createStackNavigator({

            AdminHome : AdminHome,
            AdminCurrentCompanies:AdminCurrentCompanies,
           
            AdminUpcomingCompanies:AdminUpcomingCompanies,
            AdminCurrentCompanies:AdminVisitedCompanies,
        })
    })
})

const App = createAppContainer(switchNavigator);

export default () => {

    return (

        <CompanyProvider>
            <AuthProvider>
                <ApplicationProvider>
                    <UpcomingCompaniesProvider>
                        <App style={{backgroundColor:'#000804'}}  ref={(navigator) => {setNavigator(navigator)}}/>
                    </UpcomingCompaniesProvider>
                </ApplicationProvider>
            </AuthProvider>
        </CompanyProvider>
    )
}

