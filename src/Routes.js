import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../pages/Home/HomeScreen";
import MatchScreen from "../pages/Match/MatchScreen";
import DetailMatch from "../pages/Match/DetailMatch";
import MeScreen from "../pages/Me/MeScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailMatch,
});

const MatchStack = createStackNavigator({
  Match: MatchScreen,
});

const MeStack = createStackNavigator({
  Me: MeScreen,
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Match: MatchStack,
    Me: MeStack,
  },
  {
    /* Other configuration remains unchanged */
  }
));

// import React from "react";
// import { Router, Stack, Scene } from "react-native-router-flux";

// import LoginScreen from "../pages/Login/LoginScreen";
// import SignupScreen from "../pages/Login/SignupScreen";
// import HomeScreen from "../pages/Home/HomeScreen";
// import MatchScreen from "../pages/Match/MatchScreen";
// import DetailMatch from "../pages/Match/DetailMatch";
// import MeScreen from "../pages/Me/MeScreen";

// export default class Routes extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Stack key="root" hideNavBar={true}>
//           <Scene key="Login" component={LoginScreen} title="Login" initial={true} />
//           <Scene key="Signup" component={SignupScreen} title="Register" />
//           <Scene key="Home" component={HomeScreen} title="HomeScreen" />
//           <Scene key="DetailMatch" component={DetailMatch} title="DetailMatch" />
//           <Scene key="Me" component={MeScreen} title="MeScreen" />
//         </Stack>
//       </Router>
//     );
//   }
// }
