import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Dev GeoLoc'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil Github'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7d40E7',
      },
      headerTitleAlign: 'center',
      
    }
  })
);

export default Routes;
