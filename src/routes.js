import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';
import './config/statusBarConfig';

const RootStack = createStackNavigator({
    Main: {
      screen: Main
    },
},{
     navigationOptions: {
         headerStyle: {
             backgroundColor: "#d60000"
         },
         headerTintColor: "#fff"
     } 
  });
export default createAppContainer(RootStack); 