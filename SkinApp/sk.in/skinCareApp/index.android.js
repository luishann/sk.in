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
  ScrollView
} from 'react-native';

var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im inside the Drawer!</Text>
      </View>
);

class MyToolbar extends Component {
render() {
  var navigator = this.props.navigator;
   return (
    <ToolbarAndroid
     title={this.props.title}
     navIcon={require('./ic_menu_black.png')}
     style = {styles.toolbar}
     titleColor={'white'}
     onIconClicked={this.props.sidebarRef}/>
    );
 }
}

export default class skinCareApp extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={'DRAWER'}>
        <MyToolbar style={styles.toolbar}
            title={'sk.in'}
            navigator={this.props.navigator}
            sidebarRef={()=>this._setDrawer()}
          />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>

        </View>
      </DrawerLayoutAndroid>
    );
  }

 _setDrawer() {
   this.refs['DRAWER'].openDrawer();
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
  containerToolbar: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('skinCareApp', () => skinCareApp);
