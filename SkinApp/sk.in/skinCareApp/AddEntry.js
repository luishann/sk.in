import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Journal from './Journal';

const dummyData = [];

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {month: 0, day: 0, year: 0, description: '', rating: 0};
    this.change = props.changeRoute;
  }

  _onPressButton() {
    dummyData.push(this.state);
    console.log(dummyData);
    /* this is where to make the POST request */

    this.change(1);
  }


  render() {

    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="month"
          onChangeText={(month) => this.setState({month})}
        />
        <TextInput
          placeholder="day"
          onChangeText={(day) => this.setState({day})}
        />
        <TextInput
          placeholder="year"
          onChangeText={(year) => this.setState({year})}
        />
        <TextInput
          placeholder="rating"
          onChangeText={(month) => this.setState({month})}
        />
        <TextInput
          placeholder="description"
          onChangeText={(description) => this.setState({description})}
        />
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.change.bind(this, 1)}>
          <Text>Back to Journal</Text>
        </TouchableOpacity>
      </View>
    );

  }
}

var styles = StyleSheet.create({

});
