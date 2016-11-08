import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,
TouchableWithoutFeedback, DatePickerAndroid } from 'react-native';

export default class AddProduct extends Component {
  static get defaultProps() {
    return {
      title: 'AddProduct'
    };
  }

  state = {
    presetDate: new Date(2020, 4, 5),
    allDate: new Date(2020, 4, 5),
    simpleText: 'Pick a Date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'pick a date, preset to 2020/5/5',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
       newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };


  render() {
    return (
      <View style={styles.container}>
        {/* Get product brand from input */}
        <View style={styles.pad}>
          <Text style={styles.label}>Product Brand</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            autoCapitalize={"words"}/>
        </View>

        {/* Get product name from input */}
        <View style={styles.pad}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            autoCapitalize={"words"}/>
        </View>

        {/* Date Picker for expiry date  */}
        <TouchableWithoutFeedback
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <View style={styles.pickDate}>
          <Text style={styles.label}>Expiry Date:</Text>
          <Text style={styles.dateButton}> {this.state.simpleText}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity onPress={this.props.changeRoute.bind(this, 2)}>
          <Text style={styles.button}>Add Product</Text>
        </TouchableOpacity>

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
    paddingBottom: 20
  },
  label: {
    color: '#222',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#fad900',
    color: 'white',
    width: 100,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold'
  },
  pickDate: {
    paddingBottom: 20,
    //flexDirection: 'row',
  },
  dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#ffb8bc',
    borderRadius: 5,
    padding: 5
  }
});
