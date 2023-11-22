import React from 'react-native';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';   
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
import CompanyForm from './src/screens/Admin/CompanyForm';
import UpcomingCompanyForm from './src/screens/Admin/UpcomingCompanyForm';
import AdminCompaniesDetails from './src/screens/Admin/AdminCompanyDetails';
import AdminTrackApplications from './src/screens/Admin/TrackApplications';
import { Provider as UpcomingCompaniesProvider } from './src/context/upcomingCompanyContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import { Provider as CompanyProvider } from './src/context/CompanyContext';
import { Provider as ApplicationProvider } from './src/context/ApplicationContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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


        Home : {screen :createStackNavigator({
            StudentHome:StudentHome,
            CurrentCompanies:CurrentCompanies,
            CompanyDetails:CompanyDetails,
            TrackApplication:TrackApplication,
            UpcomingCompanies:UpcomingCompanies,
            VisitedCompanies:VisitedCompanies,           
        }),navigationOptions :{

            tabBarIcon: ({tintColor}) => (
              <View>
                <Icon
                style={{color:tintColor}}
                name='ios-home'
                size={20}
                />
              </View>
            ),
          }
        },
        Profile : {screen : StudentSettings,
            navigationOptions :{

                tabBarIcon: ({tintColor}) => (
                  <View>
                    <Icon
                    style={{color:tintColor}}
                    name='person'
                    size={20}
                    />
                  </View>
                ),
              }}  
    },{
        initialRouteName: 'Home',
        activeColor: 'white',
        inactiveColor: 'grey',
        labelMaxFontSizeMultiplier:2,
        barStyle: { backgroundColor: '#010E07' },
      }),

    adminFlow : createMaterialBottomTabNavigator({

        Home : {screen :createStackNavigator({

            AdminHome : AdminHome,
            AdminCurrentCompanies:AdminCurrentCompanies,
            CompanyForm : CompanyForm,
            AdminUpcomingCompanies:AdminUpcomingCompanies,
            AdminVisitedCompanies:AdminVisitedCompanies,
            AdminCompaniesDetails:AdminCompaniesDetails,
            UpcomingCompanyForm:UpcomingCompanyForm,
            AdminTrackApplications:AdminTrackApplications,

        }),navigationOptions :{

            tabBarIcon: ({tintColor}) => (
              <View>
                <Icon
                style={{color:tintColor}}
                name='ios-home'
                size={20}
                />
              </View>
            ),
          }
        },
        Profile :{ screen: AdminSettings,navigationOptions :{

            tabBarIcon: ({tintColor}) => (
              <View>
                <Icon
                style={{color:tintColor}}
                name='person'
                size={20}
                />
              </View>
            ),
          }}
    },{
        initialRouteName: 'Home',
        activeColor: 'white',
        inactiveColor: 'grey',
        labelMaxFontSizeMultiplier:2,
        barStyle: { backgroundColor: '#010E07' },
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

