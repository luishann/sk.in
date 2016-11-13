import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions } from 'react-native';

const dummyData = [];

class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presetDate: new Date(2020, 4, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: 'pick a date',
      minText: 'pick a date, no earlier than today',
      maxText: 'pick a date, no later than today',
      presetText: 'pick a date, preset to 2020/5/5',
      allText: 'pick a date between 2020/5/1 and 2020/5/10',
      description: '',
      rating: 0,
      avatarSource: null,
      photo: null
    };
    this.change = props.changeRoute;
  }

  _onPressButton() {
    //prod = JSON.stringify({userID: 1, entryDescription: this.state.description,
      //rating: this.state.rating, photoLocation: ''});

    fetch('https://lit-gorge-31410.com/entry', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: 'INSERT INTO skin.entry (userID) VALUES (1)'
    });
  }

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
      <View style={{padding: 10}}>
        <TouchableWithoutFeedback
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <View>
            <Text>Entry Date:</Text>
            <Text>{this.state.simpleText}</Text>
          </View>
        </TouchableWithoutFeedback>
        <SliderExample
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              rating: value,
          })}
          minimumValue={0}
          maximumValue={5}
          step={0.5}/>
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

const styles = StyleSheet.create({

});
