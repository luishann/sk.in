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
        <View style={styles.navMenu}>
        <View style={{backgroundColor: '#6fc7d1',height: 110}}>

            <View style={{backgroundColor: '#6fc7d1',height: 50, margin: 30}}>
              <Image style={{flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'}} source={require('./user_profile_pic.png')}/>

            </View>
          </View>
            <TouchableOpacity onPress={this._change.bind(this, 1)}>
                  <Text style={styles.menuItem}>
                  <Image source={require('./ic_book.png')} />  Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._change.bind(this, 2)}>
                <Text style={styles.menuItem}>
                <Image source={require('./ic_product.png')} />  Products</Text>
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
            title={'SK.IN'}
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
  menuIcon: {
    marginTop: 20,
  },
});

AppRegistry.registerComponent('SkinCareApp', () => SkinCareApp);
