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
  TouchableOpacity
} from 'react-native';

import Journal from './Journal';
import Products from './Products';

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

export default class SkinCareApp extends Component {

  _setDrawer() {
    this.refs['DRAWER'].openDrawer();
   }

   _change(route){
     this.refs['NAV'].push({id: route})
     this.refs['DRAWER'].closeDrawer();
   }

  _renderScene(route, navigator) {
    if(route.id === 1){
         return <Journal />
     }else if(route.id === 2){
         return <Products />
     }
   }

  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <TouchableOpacity onPress={this._change.bind(this, 1)}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._change.bind(this, 2)}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Products</Text>
            </TouchableOpacity>
        </View>
    );

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
        <Navigator
            initialRoute={{id: 1}}
            renderScene={this._renderScene}
            ref={'NAV'}
        />
      </DrawerLayoutAndroid>
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

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
