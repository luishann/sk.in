import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions } from 'react-native';

export default class ChoosePhoto extends Component {
  constructor(props) {
    super(props);
    this.change = props.changeRoute;
    if (props.location == 'add') {
      this.state = {
        photo1: './icons/face.jpg',
        photo2: './icons/face2.jpg',
        next: 3
      };
    } else {
      this.state = {
        photo1: './icons/face.jpg',
        photo2: './icons/face2.jpg',
        entryID: props.entryID,
        next: 4
      };
    }
  }

  render() {
    if (this.state.next == 3) {
      return(
        <View style={styles.pad}>
          <Text style={styles.label}>Choose A Photo</Text>
          <View style={styles.imagestyle}>
            <TouchableOpacity onPress={this.change.bind(this, 3, this.state.photo1)}>
              <Image style={styles.images} source={require('./icons/face.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.change.bind(this, 3, this.state.photo2)}>
              <Image style={styles.images} source={require('./icons/face2.jpg')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.change.bind(this, 3)}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return(
        <View style={styles.pad}>
          <Text style={styles.label}>Choose A Photo</Text>
          <View style={styles.imagestyle}>
            <TouchableOpacity onPress={this.change.bind(this, 4, this.state.entryID, this.state.photo1)}>
              <Image style={styles.images} source={require('./icons/face.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.change.bind(this, 4, this.state.entryID, this.state.photo2)}>
              <Image style={styles.images} source={require('./icons/face2.jpg')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.change.bind(this, 4, '', this.state.entryID)}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  pad: {
    paddingTop: 25
  },

  label: {
    color: '#222',
    fontSize: 15,
  },

  images: {
    width: 175,
    height: 250
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
  },

  imagestyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15
  }

});
