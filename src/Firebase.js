import * as firebase from "firebase";
import firestore from "firebase/firestore";
import { YellowBox } from "react-native";
import _ from "lodash";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAIOW70Yx77NioeG7k7NeaLvqiSHLJqvEY",
  authDomain: "soccerapp2.firebaseapp.com",
  databaseURL: "https://soccerapp2.firebaseio.com",
  projectId: "soccerapp2",
  storageBucket: "soccerapp2.appspot.com",
  messagingSenderId: "923883414093"
};
firebase.initializeApp(config);

firebase.firestore();

YellowBox.ignoreWarnings(["Setting a timer"]); //menghilangkan yellowbox settime
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default firebase;
