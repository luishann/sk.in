import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';

export default class ProductView extends Component {
  static get defaultProps() {
    return {
      title: 'ProductView View'
    };
  }

  // how to make a GET request
  _randFunc() {
    fetch("https://lit-gorge-31410.herokuapp.com/users", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      console.log("got here");
      console.log(responseData);
    })
    .done();
  }

  render() {

    return (
      <View>
        <Text>This is an ProductView scene.</Text>
        <TouchableHighlight onPress={this._randFunc}>
          <Text>Test</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});
