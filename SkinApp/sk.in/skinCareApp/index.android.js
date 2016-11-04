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
  TouchableOpacity,
  Image
} from 'react-native';

import Journal from './Journal';
import Products from './Products';

class MyToolbar extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <ToolbarAndroid
        title={this.props.title}
        navIcon={require('./ic_menu.png')}
        style = {styles.toolbar}
        titleColor={'white'}
        onIconClicked={this.props.sidebarRef}/>
    );
  }
}

export default class SkinCareApp extends Component {

  // Open navigation drawer
  _setDrawer() {
    this.refs['DRAWER'].openDrawer();
  }

  // Changing route from clicking item in navigation drawer
  _change(route){
    this.refs['NAV'].push({id: route})
    this.refs['DRAWER'].closeDrawer();
  }

  // Render scene depending on route number
  _renderScene(route, navigator) {
    if(route.id === 1){
      return <Journal />
    } else if (route.id === 2){
      return <Products />
    }
  }

  render() {
    // Navigation menu view
    var navigationView = (
      <View style={styles.navMenu}>

        {/* Header for showing user profile picture/ name. Dummy data for now */}
        <View style={{backgroundColor: '#6fc7d1',height: 110}}>
          <View style={{backgroundColor: '#6fc7d1',height: 60, margin: 30}}>
            <Image style={{flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'}}
              source={require('./ic_user.png')}/>
          </View>
        </View>

        {/* Journal item */}
        <TouchableOpacity onPress={this._change.bind(this, 1)}>
          <Text style={styles.menuItem}>
          <Image source={require('./ic_book.png')} />  Journal</Text>
        </TouchableOpacity>

        {/* Products item */}
        <TouchableOpacity onPress={this._change.bind(this, 2)}>
          <Text style={styles.menuItem}>
          <Image source={require('./ic_product.png')} />  Products</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      // Render navigation drawer
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref={'DRAWER'}>

        {/* Render toolbar */}
        <MyToolbar
            title={'SK.IN'}
            navigator={this.props.navigator}
            sidebarRef={()=>this._setDrawer()}
        />

        {/* Render navigator (which renders the scene) */}
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
  toolbar: {
    backgroundColor: '#6fc7d1',
    height: 56,
    elevation: 10
  },
  navMenu: {
    flex: 1,
    backgroundColor: '#fff'
  },
  menuItem: {
    marginLeft: 25,
    marginTop: 20,
    fontSize: 16,
    textAlign: 'left'
  },
});

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
