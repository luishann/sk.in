import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions } from 'react-native';

export default class ChoosePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo1: './icons/ic_tag_small_red.png'
    };
    this.change = props.changeRoute;
  }

  render() {
    return(
      <View>
        <Text>Choose A Photo</Text>
        <Image source={require('./icons/ic_tag_small_red.png')} />
        <Image source={require('./icons/ic_tag_small_red.png')} />
        <Image source={require('./icons/ic_tag_small_red.png')} />
        <TouchableOpacity onPress={this.change.bind(this, 3, this.state.photo1)}>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
