import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EntryView extends Component {
  static get defaultProps() {
    return {
      title: 'Entry View'
    };
  }

  render() {
    return (
      <View>
        <Text>This is an EntryView scene.</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});
