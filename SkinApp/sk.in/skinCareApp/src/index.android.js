/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import DrawerLayout from 'react-native-drawer-layout';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class skinCareApp extends Component {

  render: function(){
      var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
    </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
      <View style={{flex:1, alignItems:'center'}}>
        <Text style={{margin:10, fontSize:15, textAlign:'right'}}> Journal</Text>
        <Text style={{margin:10, fontSize:15, textAlign:'right'}}> Discover</Text>
        <Text style={{margin:10, fontSize:15, textAlign:'right'}}> Products</Text>
        <Text style={{margin:10, fontSize:15, textAlign:'right'}}> Progress</Text>
      </View>
      </DrawerLayoutAndroid>
      );
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('skinCareApp', () => skinCareApp);
