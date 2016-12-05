import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  BackAndroid
} from 'react-native';

import UserView from './UserView';
import Login from './LoginView';

export default class SkinCareApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userID hardcoded to 1, later we should change it to null once we
      // finished implementing login/signup

      text: "",
      userID: 0,

    };
  }

  _setUserID(id) {
    this.setState({userID: id});
  }

  render() {

    return (
      <View style={{flex: 1}}>
        { this.state.userID ?  <UserView userID={this.state.userID} />

          : <Login setUserID={this._setUserID} text={this.text}/>}

      </View>
    );
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
