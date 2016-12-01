import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,
TouchableWithoutFeedback, DatePickerAndroid, Image } from 'react-native';
import ImageResizer from 'react-native-image-resizer';
var ImagePicker = require('react-native-image-picker');

export default class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource: './icons/ic_tag_small_red.png'
    };
  }

  _showImagePicker() {
    console.log("Showing image picker");
    var options = {
      maxWidth: 300,
      maxHeight: 360,
      cameraType: 'back'
    };
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log('Took picture');
        var photoData = 'data:image/jpeg;base64,' + response.data;

        this.props.setPhotoData(photoData);
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        this.setState({photoSource: source});
        /*const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        var values = {
          file: 'data:image/jpeg;base64,' + response.data,
        };
        fetch('http://192.168.1.105:5000/upload-photo', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }).catch(function(error) {
          console.log(error);
        });*/
      }
    });
  }

  render() {
    return (
      <View style={styles.pad}>
        <TouchableOpacity onPress={this._showImagePicker.bind(this)}>
          <Text style={styles.button}>{this.props.buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  pad: {
    marginTop: 20
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
