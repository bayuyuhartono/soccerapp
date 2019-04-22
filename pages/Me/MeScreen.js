import React from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class MeScreen extends React.Component {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me!</Text>
        <Button
          title="Sign Out"
          onPress={this._signOutAsync}
        />
      </View>
    );
  }
}