import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Routes from "./src/Routes";
import SplashScreen from "./pages/Login/SplashScreen";
import SignInScreen from "./pages/Login/LoginScreen";
import SignupScreen from "./pages/Login/SignupScreen";
import OtpScreen from "./pages/Login/OtpScreen";
import { pushNotifications } from './src/services';

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
 
const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignupScreen,
  OTP: OtpScreen
});

pushNotifications.configure();

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: SplashScreen,
    App: Routes,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));