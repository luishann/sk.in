import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,
TouchableWithoutFeedback, DatePickerAndroid } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'placeholder',
      name: 'placeholder',
      simpleText: 'Pick a Date'
    };
  }

  /* get defaultProps() {
    return {
      title: 'AddProduct'
    };
  }*/

  /*state = {
    presetDate: new Date(2020, 4, 5),
    allDate: new Date(2020, 4, 5),
    simpleText: 'Pick a Date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'pick a date, preset to 2020/5/5',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',
  };*/

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
       newState[stateKey + 'Text'] = 'Pick a Date';
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

  postProduct() {
    var prod;
    if (this.state.simpleText != 'Pick a Date') {
      prod = JSON.stringify({userid: this.props.userID, name: this.state.name, brand: this.state.brand,
        expirydate: this.state.simpleDate.toISOString().slice(0, 19).replace('T', ' ')});
    } else {
      prod = JSON.stringify({userid: this.props.userID, name: this.state.name, brand: this.state.brand});
    }

    fetch("https://lit-gorge-31410.herokuapp.com/products", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: prod
    });

    dismissKeyboard();
    //this.props.changeRoute(6, JSON.parse(prod));
    this.props.changeRoute(2, JSON.parse(prod));
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Get product brand from input */}
        <View style={styles.pad}>
          <Text style={styles.label}>Product Brand</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={(brand) => this.setState({brand})}
            autoCapitalize={"words"}/>
        </View>

        {/* Get product name from input */}
        <View style={styles.pad}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={(name) => this.setState({name})}
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

        {/* Submit button - add product */}
        <View style={styles.buttons}>
          <TouchableOpacity style={{width:115}}
            onPress={this.postProduct.bind(this)}>
            <Text style={styles.button}>Add Product</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.changeRoute.bind(this, 2)}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
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
    paddingBottom: 20
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
  pickDate: {
    paddingBottom: 20,
    //flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#d8f5d1',
    borderRadius: 5,
    padding: 5
  }
});
