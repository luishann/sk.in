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

import Journal from './Journal';
import Products from './Products';
import AddEntry from './AddEntry';
import EntryView from './EntryView';
import AddProduct from './AddProduct';
import ProductView from './ProductView';
import ChoosePhoto from './ChoosePhoto';
import EntryAnalytics from './EntryAnalytics';
import Years from './Years';
import ProductAnalytics from './ProductAnalytics';
import Options from './Options';


//here import a new class (and export it from before)
//and then add a new if else statement

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
/*
Allows for Android back button to be used in Android phones.
*/
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

export default class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    userID: props.userID
    };
  }
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

  _changeRoute(route, arg1){
    _navigator.push({id: route, arg: arg1})
  }

  _changeRoute(route, arg1, arg2) {
    _navigator.push({id: route, arg: arg1, arg2: arg2})
  }
//We can
  // Render scene depending on route number
  _renderScene(route, navigator) {
    _navigator = navigator;
    if(route.id === 1){
      return <Journal changeRoute={this._changeRoute} userID = {this.props.userID}/>
    } else if (route.id === 2){
      return <Products changeRoute={this._changeRoute} userID = {this.props.userID}/>
    } else if (route.id === 3) {
      return <AddEntry changeRoute={this._changeRoute} photo={route.arg} userID = {this.props.userID}/>
    } else if (route.id === 4) {
      return <EntryView changeRoute={this._changeRoute} entryID={route.arg} photo={route.arg2} userID = {this.props.userID}/>
    } else if (route.id === 5) {
      return <AddProduct changeRoute={this._changeRoute} userID = {this.props.userID}/>
    } else if (route.id === 6) {
      return <ProductView product={route.arg} productID={route.arg2} changeRoute={this._changeRoute} userID = {this.props.userID}/>
    } else if (route.id === 7) {
      return <ChoosePhoto changeRoute={this._changeRoute} location={route.arg} entryID={route.arg2} userID ={this.props.userID}/>
    } else if (route.id === 8) {
      return <EntryAnalytics changeRoute={this._changeRoute} userID = {this.props.userID} year={route.arg}/>
    } else if(route.id == 9){
      return <ProductAnalytics changeRoute={this._changeRoute} userID = {this.props.userID} option={route.arg}/>
    } else if (route.id === 10) {
      return <Years changeRoute={this._changeRoute} userID = {this.props.userID}/>
    } else if(route.id == 11){
      return <Options changeRoute={this._changeRoute} userID = {this.props.userID}/>
    }
  }

  render() {
    // Navigation menu view
    var navigationView = (
      <View style={styles.navMenu}>

        {/* Header for showing user profile picture/ name. Dummy data for now */}
        <View style={{backgroundColor: '#62d7df',height: 110}}>
          <View style={{backgroundColor: '#62d7df',height: 60, margin: 30}}>
            <Image style={{flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'}}
              source={require('./icons/ic_user.png')}/>
          </View>
        </View>

        {/* Journal item */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 1,this.state.userID)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.menuItem}>
            <Text style={styles.txt}>
              <Image source={require('./icons/ic_book_red.png')} />  Journal</Text>
          </View>
        </TouchableNativeFeedback>

        {/* Products item */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 2)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.menuItem}>
            <Text style={styles.txt}>
              <Image source={require('./icons/ic_product_red2.png')} />  Products</Text>
          </View>
        </TouchableNativeFeedback>

        <Text style={styles.navHeader}>Analytics</Text>

        {/*Entry Analytics */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 10)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.analytics}>
            <Text style={styles.txt}>
              <Image source={require('./icons/ic_bar_chart.png')} />  Entries</Text>
          </View>
        </TouchableNativeFeedback>
        {/*Product Analytics */}
        <TouchableNativeFeedback onPress={this._change.bind(this, 11)}
          background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.analytics}>
            <Text style={styles.txt}>
              <Image source={require('./icons/ic_line_chart.png')} />  All Products</Text>
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
    //backgroundColor:'#6fc7d1',
    backgroundColor: '#62d7df',
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
  txt: {
    color: '#222'
  },
  navHeader: {
    paddingLeft: 20,
    marginTop: 20,
    color: '#222',
  },
  analytics: {
    paddingLeft:45,
    height: 60,
    justifyContent: 'center',
  }
});
