import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

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
