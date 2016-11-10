import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';

export default class ProductView extends Component {
  static get defaultProps() {
    return {
      title: 'Product View'
    };
  }

  render() {

    return (
      <View>
        <Text>Book that was clicked on:</Text>
        <Text>{this.props.product.volumeInfo.title}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});
