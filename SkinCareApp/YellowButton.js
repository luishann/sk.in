import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

var ImagePicker = require('react-native-image-picker');

export default class YellowButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.pad}>
        <TouchableOpacity onPress={this.props.onPressFunction}>
          <Text style={styles.button}>{this.props.buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  pad: {
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#fad900',
    color: 'white',
    width: 108,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
});
