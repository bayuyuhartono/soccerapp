import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const data = await this.performTimeConsumingTask();
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if (data !== null) {
      this.props.navigation.navigate(userToken ? "App" : "Auth");
    }
  };

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Blitz Reading</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange"
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
};

export default SplashScreen;
