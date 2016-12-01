/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

export default class SkinCareApp extends Component {

  render() {

    return (
      <View>
        <UserView />
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
