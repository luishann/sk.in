import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableOpacity } from 'react-native';

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
        <Text style={styles.text}>Expiry Date: {this.props.product.expirydate}</Text>
        <Text style={styles.text}>Start Date: {this.props.product.startdate}</Text>
        <Text style={styles.text}>End Date: none </Text>

        <TouchableOpacity style={{flex: 1}}
          onPress={this.props.changeRoute.bind(this,2)}>
          <Text style={styles.ret}>Return to Products </Text>
        </TouchableOpacity>
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
  },
  ret: {
    bottom: 15,
    position: 'absolute'
  }
});
