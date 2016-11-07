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
  Image
} from 'react-native';

import Journal from './Journal';
import Products from './Products';
import AddEntry from './AddEntry';
import EntryView from './EntryView';

class MyToolbar extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <ToolbarAndroid
        title={this.props.title}
        navIcon={require('./icons/ic_menu.png')}
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
    _navigator.push({id: route})
    if (this.refs['DRAWER']) {
      this.refs['DRAWER'].closeDrawer();
    }
  }

  _changeRoute(route){
    _navigator.push({id: route})
  }

  // Render scene depending on route number
  _renderScene(route, navigator) {
    _navigator = navigator;
    if(route.id === 1){
      return <Journal changeRoute={this._changeRoute}/>
    } else if (route.id === 2){
      return <Products />
    } else if (route.id === 3) {
      return <AddEntry />
    } else if (route.id === 4) {
      return <EntryView />
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
              source={require('./icons/ic_user.png')}/>
          </View>
        </View>

        {/* Journal item */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 1)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.menuItem}>
            <Text><Image source={require('./icons/ic_book_red.png')} />  Journal</Text>
          </View>
        </TouchableNativeFeedback>

        {/* Products item */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 2)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.menuItem}>
            <Text><Image source={require('./icons/ic_product_red2.png')} />  Products</Text>
          </View>
        </TouchableNativeFeedback>
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
          renderScene={this._renderScene.bind(this)}
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
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
