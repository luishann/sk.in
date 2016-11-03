import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Journal extends Component {
  static get defaultProps() {
    return {
      title: 'Journal'
    };
  }

  render() {
    return (
      <View>
        <Text>This is the journal scene.</Text>
      </View>
    )
  }
}
