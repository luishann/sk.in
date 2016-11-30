import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,
TouchableWithoutFeedback, DatePickerAndroid, Image } from 'react-native';

var ImagePicker = require('react-native-image-picker');
var base64 = 'data:image/jpeg;base64,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'

export default class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource: './icons/ic_tag_small_red.png'
    };
  }

  _showImagePicker() {
    console.log("Showing image picker");
    ImagePicker.showImagePicker((response) => {
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
        console.log('response.uri: ' + response.uri);
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
          <Text style={styles.button}>Test Camera</Text>
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
