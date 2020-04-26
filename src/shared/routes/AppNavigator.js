import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  Login from '../../screens/login/Login';
import Dashboard from '../../screens/dashboard/Dashboard';

const mainNavigation = createStackNavigator(
    {
      Home : { screen : Login},
      MyDashboard : { screen: Dashboard },
    },
    {
      headerMode: 'none',
    }
);
 const AppNavigator = createAppContainer(mainNavigation);
 export default AppNavigator;