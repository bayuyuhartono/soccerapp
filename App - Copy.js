import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Routes from "./src/Routes";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

// import LoginScreen from "./pages/Login/LoginScreen";
// import SignupScreen from "./pages/Login/SignupScreen";
// import HomeScreen from "./pages/Home/HomeScreen";
// import MatchScreen from "./pages/Match/MatchScreen";
// import DetailMatch from "./pages/Match/DetailMatch";
// import MeScreen from "./pages/Me/MeScreen";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailMatch,
// });

// const MatchStack = createStackNavigator({
//   Match: MatchScreen,
// });

// const MeStack = createStackNavigator({
//   Me: MeScreen,
// });

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Match: MatchStack,
//     Me: MeStack,
//   },
//   {
//     /* Other configuration remains unchanged */
//   }
// ));

import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Routes from "./src/Routes";
import SplashScreen from "./pages/Login/SplashScreen";
import SignInScreen from "./pages/Login/LoginScreen";
import SignupScreen from "./pages/Login/SignupScreen";
import OtpScreen from "./pages/Login/OtpScreen";

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
 
const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignupScreen,
  OTP: OtpScreen
});

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