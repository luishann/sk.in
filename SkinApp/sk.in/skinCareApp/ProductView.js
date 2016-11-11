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
      <View style={styles.container}>
        <Text style={styles.brand}>{this.props.product.brand}</Text>
        <Text style={styles.name}>{this.props.product.name}</Text>
        <Text style={styles.text}>Expiry Date: {this.props.product.expiryDate}</Text>
        <Text style={styles.text}>Start Date: {this.props.product.startDate}</Text>
        <Text style={styles.text}>End Date: none </Text>
        {/*<Text>Book that was clicked on:</Text>
        <Text>{this.props.product.volumeInfo.title}</Text>*/}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 20,
  },
  brand: {
    fontSize: 22,
    color: '#222',
  },
  name: {
    fontSize: 19,
    color: '#222',
    marginBottom: 10
  },
  text: {
    color: '#555'
  }
});
