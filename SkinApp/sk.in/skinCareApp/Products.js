import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Products extends Component {
  static get defaultProps() {
    return {
      title: 'Products'
    };
  }

  render() {
    return (
      <View>
        <Text>This is the products scene.</Text>
      </View>
    )
  }
}
