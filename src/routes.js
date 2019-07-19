import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const RootStack = createStackNavigator({
    Main: {
      screen: Main
    },
  });
export default createAppContainer(RootStack);