import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions } from 'react-native';

export default class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'placeholder',
      password: 'placeholder',
      email: 'placeholder'
    };
    this.change = props.changeRoute;
  }

  _onPressButton() {
    if (this.state.username != null && this.state.password != null && this.state.email != null ) {
     user = JSON.stringify({username: this.state.username, password: this.state.password,
         email: this.state.email});
    } /*else {
      this.change(10);
    }*/

    console.log(user);

    fetch('https://lit-gorge-31410.herokuapp.com/add-user', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: user
    });

    this.change(1);
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.container}>

        {/* Username */}
        <View style={styles.pad}>
          <Text style={styles.label}>Description:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
        </View>

        {/* password */}
        <View style={styles.pad}>
          <Text style={styles.label}>Description:</Text>
          <TextInput secureTextEntry={true} style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        {/* email */}
        <View style={styles.pad}>
          <Text style={styles.label}>Description:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </View>

        <View style={styles.buttons}>
          {/* Signup button */}
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text style={styles.button}>Signup</Text>
          </TouchableOpacity>

        {/* Back button */}
        /*  <TouchableOpacity onPress={this.change.bind(this, 1)}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity> */
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 15
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  pad: {
    paddingTop: 25
  },
  label: {
    color: '#222',
    fontSize: 15,
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
  dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#d8f5d1',
    borderRadius: 5,
    padding: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  ratingStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  prodUsed: {
    paddingLeft: 20,
    fontSize:15,
    color: '#222',
    backgroundColor: '#d8f5d1'
  }
});
