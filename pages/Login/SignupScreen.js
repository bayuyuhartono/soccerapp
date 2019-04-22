import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import Logo from "../../src/components/Logo";
import { StackActions, NavigationActions } from 'react-navigation';

export default class SignupScreen extends React.Component {

    // hide navbartop
    static navigationOptions =
    {
       title: 'SignUp',
       headerStyle: {
       backgroundColor: '#FFC107'
     },
     headerTintColor: '#fff',
     header : null
    };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container1}>
        <Logo />

        <View style={styles.container2}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Nama"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          // onSubmitEditing={() => this.email.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          // onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          // onSubmitEditing={() => this.confirm.focus()}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Confirm Password"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          // ref={input => (this.confirm = input)}
        />

        <TouchableOpacity onPress={this._signInAsync} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Have an account yet?</Text>

          <TouchableOpacity onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SignIn' })
              ],
            }))
          }}>
            <Text style={styles.signupButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },

  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },

  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  container2: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },

  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
