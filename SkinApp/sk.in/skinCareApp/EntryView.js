import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';

export default class EntryView extends Component {
  static get defaultProps() {
    return {
      title: 'Entry View'
    };
  }

  _randFunc() {
    fetch("https://100.65.209.140:3000/users", {method: "GET"})
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
        <Text>This is an EntryView scene.</Text>
        <TouchableHighlight onPress={this._randFunc}>
          <Text>Test</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});
